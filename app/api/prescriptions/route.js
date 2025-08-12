import startDbConnection from "@/libs/db";
import PrescriptionModel from "@/models/prescriptionModel";
import Patient from "@/models/patientModel";
import saveImage from "@/utils/saveImage";
import { put } from "@vercel/blob";
import { v4 as uuidv4 } from "uuid";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const data = await req.formData();

    const photocopy = data.get("photocopy");
    const patient = data.get("patient");
    const prescription_names = data.getAll("prescription_name") || [];
    const prescription_quantities = data
      .getAll("prescription_quantity")
      .map((qty) => parseInt(qty, 10) || 1);

    if (!patient || prescription_names.length === 0) {
      throw new Error("Missing required fields");
    }

    await startDbConnection();

    // const checkExistPatient = await PrescriptionModel.findOne({ patient });
    // if (checkExistPatient) {
    //   return NextResponse.json(
    //     {
    //       success: false,
    //       message: "There is already a prescription assigned to this patient",
    //     },
    //     { status: 422 }
    //   );
    // }

    let prescriptionPhotocopy = "";
    if (photocopy && photocopy.name) {
      try {
        const savedImage = await saveImage(photocopy);
        const uploadedImage = await put(photocopy.name, photocopy, {
          access: "public",
        });
        prescriptionPhotocopy = uploadedImage?.url || "";
      } catch (err) {
        console.error("File upload error:", err);
        throw new Error("Failed to upload prescription photocopy");
      }
    }

    const prescriptions = prescription_names.map((name, index) => ({
      prescriptionId: uuidv4(),
      name: name,
      amount: 0,
      quantity: prescription_quantities[index] || 1,
    }));

    const prescription = await PrescriptionModel.create({
      photocopy: prescriptionPhotocopy || "",
      patient: patient,
      prescription_names: prescriptions,
      prescription_amount: 0,
      approved: false,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Prescriptions added successfully!",
        prescription: prescription,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in POST API:", error);
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

// Get all prescriptions
export const GET = async (req) => {
  try {
    await startDbConnection();
    const prescriptions = await PrescriptionModel.find()
      .populate("patient")
      .sort({ createdAt: -1 });

    console.log("all prescriptions ==> ", prescriptions);

    return NextResponse.json({
      success: true,
      data: prescriptions,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { success: false, message: error?._message, error: error },
      { status: 500 }
    );
  }
};
