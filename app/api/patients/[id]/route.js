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

    const patient = await PatientModel.findById({ _id: id });

    if (!patient) {
      return NextResponse.json(
        { success: false, error: "Patient not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      patient: patient,
    });
  } catch (error) {
    console.log(err);
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
    const attendant_relation_to_patient = data.get(
      "attendant_relation_to_patient"
    );
    const note = data.get("note");
    const date = data.get("date");

    await startDbConnection();

    let cnicPhotocopy;

    if (photocopy) {
      cnicPhotocopy = await put(photocopy?.name, photocopy, {
        access: "public",
      });
    }

    const updatedPatient = await PatientModel.findByIdAndUpdate(
      id,
      {
        $set: {
          patient_code,
          name: name,
          age: age,
          gender: gender,
          contact: contact,
          address: address,
          note: note,
          cnic: {
            cnic_number: cnic_number,
            photocopy: cnicPhotocopy?.url,
          },
          attending_physician_name: attending_physician_name,
          attendant_details: {
            name: attendantName,
            contact: attendantContact,
            relation_to_patient: attendant_relation_to_patient,
          },
          date: date,
        },
      },
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
      message: `Patient ${updatedPatient.name} updated successfully`,
      patient: updatedPatient,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error?._message, error: error },
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

    await TransactionModel.deleteMany({ patientId: id });

    return NextResponse.json({
      success: true,
      message: `Patient ${deletedPatient.name} and associated transactions deleted successfully`,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error?._message, error: error },
      { status: 500 }
    );
  }
};
