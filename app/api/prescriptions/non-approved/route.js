import startDbConnection from "@/libs/db";
import PrescriptionModel from "@/models/prescriptionModel";
import { NextResponse } from "next/server";
import PatientModel from "@/models/patientModel";

export const GET = async (req) => {
  try {
    await startDbConnection();
    const prescriptions = await PrescriptionModel.find({
      approved: { $ne: true },
      patient: { $ne: null }, // Ensure patient is not null
    })
      .populate("patient")
      .sort({ createdAt: -1 });

    const prescriptionsWithoutFilter = await PrescriptionModel.find({
      approved: { $ne: true },
      patient: { $ne: null }, // Ensure patient is not null
    })
      .populate("patient")
      .sort({ createdAt: -1 });

    console.log("prescriptions approved: false  ==> ", prescriptions);
    console.log(
      "prescriptions prescriptions without Filter  ==> ",
      prescriptionsWithoutFilter
    );
    return NextResponse.json({
      success: true,
      data: prescriptions,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { success: false, message: error?.message, error: error },
      { status: 500 }
    );
  }
};
