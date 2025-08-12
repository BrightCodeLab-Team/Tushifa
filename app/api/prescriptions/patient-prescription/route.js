// Get approved prescription by specific pharmacy endpoint

import startDbConnection from "@/libs/db";
import FulfillmentModel from "@/models/fulfillmentModel";
import PrescriptionModel from "@/models/prescriptionModel";
import TransactionModel from "@/models/transactionModel";
import { NextResponse } from "next/server";
import mongoose, { Types } from "mongoose";

export const GET = async (req) => {
  const patientId = req.nextUrl.searchParams.get("patient_id");

  try {
    await startDbConnection();
    const fulfillments = await FulfillmentModel.find({ patientId: patientId });

    const prescriptions = await PrescriptionModel.find({
      patient: patientId,
    })
      .populate("patient")
      .populate("pharmacyId");

    return NextResponse.json({
      success: true,
      prescription: {
        ...prescriptions[0].toObject(),
        fulfillment: fulfillments[0] ? true : false,
        totalAmount: fulfillments[0] ? fulfillments[0].totalAmount : null,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error?._message, error: error },
      { status: 500 }
    );
  }
};

export const PUT = async (req) => {
  try {
    const { searchParams } = new URL(req.url);
    const patient = searchParams.get("patient_id");
    const body = await req.json();
    const { pharmacyId, prescriptions } = body;

    if (
      !patient ||
      !pharmacyId ||
      !Array.isArray(prescriptions) ||
      prescriptions.length === 0
    ) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const { ObjectId } = mongoose.Types;
    await startDbConnection();
    const prescription = await PrescriptionModel.findOne({
      patient: new ObjectId(patient),
    });

    if (!prescription) {
      return NextResponse.json(
        { success: false, message: "Prescription not found or unauthorized" },
        { status: 404 }
      );
    }

    prescriptions.forEach(({ prescriptionId, amount, given }) => {
      const item = prescription.prescription_names.find(
        (item) => item.prescriptionId === prescriptionId
      );
      if (item) {
        item.amount = amount;
        item.isGiven = given;
      }
    });

    prescription.prescription_amount = prescription.prescription_names.reduce(
      (sum, item) => sum + item.amount,
      0
    );

    await prescription.save();

    const prevVisits = await TransactionModel.countDocuments({
      patient: new ObjectId(patient),
    });

    const transaction = new TransactionModel({
      sNo: (await TransactionModel.countDocuments()) + 1,
      patient: patient,
      pharmacy: pharmacyId,
      prescription_amount: prescription.prescription_amount,
      visits: prevVisits + 1 || 1,
      date: new Date().toISOString(),
    });

    await transaction.save();

    return NextResponse.json({
      success: true,
      message: "Prescription amounts updated successfully!",
      prescription,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        success: false,
        message: error?.message || "Internal Server Error",
        error,
      },
      { status: 500 }
    );
  }
};
