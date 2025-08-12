import startDbConnection from "@/libs/db";
import PrescriptionModel from "@/models/prescriptionModel";
import PharmacyModel from "@/models/pharmacyModel";
import { NextResponse } from "next/server";
import PatientModel from "@/models/patientModel";

export const GET = async (req) => {
  const pharmacyId = req.nextUrl.searchParams.get("pharmacy_id");

  try {
    await startDbConnection();

    const approvedPrescriptions = await PrescriptionModel.find({
      approved: true,
      pharmacyId: pharmacyId,
    })
      .populate("patient")
      .lean()
      .sort({ createdAt: -1 });

    const pharmacy = await PharmacyModel.findById(pharmacyId).lean();

    if (!pharmacy) {
      return NextResponse.json(
        { success: false, message: "Pharmacy not found" },
        { status: 404 }
      );
    }

    approvedPrescriptions.forEach((prescription) => {
      prescription.pharmacy_name = pharmacy.name;
    });

    return NextResponse.json({
      success: true,
      prescriptions: approvedPrescriptions,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error?.message || "Internal Server Error",
        stack: error?.stack,
        error: error,
      },
      { status: 500 }
    );
  }
};
