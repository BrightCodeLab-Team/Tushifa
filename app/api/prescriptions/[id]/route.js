import startDbConnection from "@/libs/db";
import PrescriptionModel from "@/models/prescriptionModel";
import { NextResponse } from "next/server";
import { put } from "@vercel/blob";

// Get patient by id
export const GET = async (req, { params }) => {
  const id = params.id;

  try {
    await startDbConnection();

    const prescription = await PrescriptionModel.findById({ _id: id });

    if (!prescription) {
      return NextResponse.json(
        { success: false, error: "Prescription not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      prescription: prescription,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error?._message, error: error },
      { status: 500 }
    );
  }
};

// Update patient
export const PUT = async (req, { params }) => {
  const id = params.id;

  try {
    const data = await req.formData();

    const photocopy = data.get("photocopy");
    const patient = data.get("patient");
    const prescriptionNames = JSON.parse(
      data.get("prescription_names") || "[]"
    );

    await startDbConnection();

    const existingPrescription = await PrescriptionModel.findById(id);
    if (!existingPrescription) {
      return NextResponse.json(
        { success: false, error: "Prescription not found" },
        { status: 404 }
      );
    }

    let newPhotocopy = existingPrescription.photocopy;
    if (photocopy) {
      newPhotocopy = await put(photocopy?.name, photocopy, {
        access: "public",
      });
    }

    prescriptionNames.forEach((updatedPrescription) => {
      const index = existingPrescription.prescription_names.findIndex(
        (p) => p._id.toString() === updatedPrescription.id
      );
      if (index !== -1) {
        existingPrescription.prescription_names[index] = {
          ...existingPrescription.prescription_names[index],
          name: updatedPrescription.name,
          quantity: updatedPrescription.quantity,
        };
      }
    });

    const updateData = {};
    if (patient) updateData.patient = patient;
    if (newPhotocopy !== existingPrescription.photocopy) {
      updateData.photocopy = newPhotocopy?.url;
    }

    const updatedPrescription = await PrescriptionModel.findByIdAndUpdate(
      id,
      {
        $set: {
          ...updateData,
          prescription_names: existingPrescription.prescription_names,
        },
      },
      { new: true }
    );

    if (!updatedPrescription) {
      return NextResponse.json(
        { success: false, error: "Prescription not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Prescription updated successfully!",
      prescription: updatedPrescription,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error?.message, error: error },
      { status: 500 }
    );
  }
};

// Delete patient
export const DELETE = async (req, { params }) => {
  const id = params.id;

  try {
    await startDbConnection();

    const deletedPrescription = await PrescriptionModel.findByIdAndDelete(id);

    if (!deletedPrescription) {
      return NextResponse.json(
        { success: false, error: "Prescription not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `Prescription deleted successfully`,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error?._message, error: error },
      { status: 500 }
    );
  }
};
