import startDbConnection from "@/libs/db";
import PatientModel from "@/models/patientModel";
import TransactionModel from "@/models/transactionModel";
import { NextResponse } from "next/server";
import { put } from "@vercel/blob";

// Get patient by id
export const GET = async (req, { params }) => {
  const id = params.id;

  try {
    await startDbConnection();

    const patient = await PatientModel.findById(id);

    if (!patient) {
      return NextResponse.json(
        { success: false, error: "Patient not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      patient,
    });
  } catch (error) {
    console.error("GET /patients/[id] error:", error);
    return NextResponse.json(
      { success: false, message: error?.message || "Server error" },
      { status: 500 }
    );
  }
};

// Update patient
export const PUT = async (req, { params }) => {
  const id = params.id;

  try {
    const data = await req.formData();

    const patient_code = data.get("patient_code");
    const name = data.get("name");
    const age = data.get("age");
    const gender = data.get("gender");
    const contact = data.get("contact");
    const address = data.get("address");
    const cnic_number = data.get("cnic_number");
    const photocopy = data.get("photocopy");
    const attending_physician_name = data.get("attending_physician_name");
    const attendantName = data.get("attendantName");
    const attendantContact = data.get("attendantContact");
    const attendant_relation_to_patient = data.get("attendant_relation_to_patient");
    const note = data.get("note");
    const date = data.get("date");

    await startDbConnection();

    let updateData = {
      patient_code,
      name,
      age,
      gender,
      contact,
      address,
      note,
      cnic: {
        cnic_number,
      },
      attending_physician_name,
      attendant_details: {
        name: attendantName,
        contact: attendantContact,
        relation_to_patient: attendant_relation_to_patient,
      },
      date,
    };

    // Only upload + update photocopy if new file is provided
    if (photocopy) {
      const uploaded = await put(photocopy.name, photocopy, {
        access: "public",
      });
      updateData.cnic.photocopy = uploaded.url;
    }

    const updatedPatient = await PatientModel.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true }
    );

    if (!updatedPatient) {
      return NextResponse.json(
        { success: false, error: "Patient not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `Patient "${updatedPatient.name}" updated successfully`,
      patient: updatedPatient,
    });
  } catch (error) {
    console.error("PUT /patients/[id] error:", error);
    return NextResponse.json(
      { success: false, message: error?.message || "Server error" },
      { status: 500 }
    );
  }
};

// Delete patient
export const DELETE = async (req, { params }) => {
  const id = params.id;

  try {
    await startDbConnection();

    const deletedPatient = await PatientModel.findByIdAndDelete(id);

    if (!deletedPatient) {
      return NextResponse.json(
        { success: false, error: "Patient not found" },
        { status: 404 }
      );
    }

    // Delete associated transactions
    await TransactionModel.deleteMany({ patientId: id });

    return NextResponse.json({
      success: true,
      message: `Patient "${deletedPatient.name}" and their transactions deleted successfully`,
    });
  } catch (error) {
    console.error("DELETE /patients/[id] error:", error);
    return NextResponse.json(
      { success: false, message: error?.message || "Server error" },
      { status: 500 }
    );
  }
};
