import startDbConnection from "@/libs/db";
import PatientModel from "@/models/patientModel";
import saveImage from "@/utils/saveImage";
import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

// Function to generate a 5-digit random patient code
const generatePatientCode = () => {
  return Math.floor(10000 + Math.random() * 90000).toString();
};

// Create a new patient
export const POST = async (req) => {
  try {
    const data = await req.formData();
    console.log("FormData From Backend:", Object.fromEntries(data.entries()));

    // Extract fields from formData
    const patient_code = generatePatientCode();
    const name = data.get("name");
    const age = data.get("age");
    const gender = data.get("gender");
    const contact = data.get("contact");
    const address = data.get("address");
    const cnic_number = data.get("cnic_number");
    const father_cnic_number = data.get("father_cnic_number");
    const photocopy = data.get("photocopy");
    const note = data.get("note");
    const patient_condition = data.get("patient_condition");
    const patient_status = data.get("patient_status");
    const father_status = data.get("father_status");
    const father_name = data.get("father_name");
    const father_profession = data.get("father_profession");
    const income = data.get("income");
    const eligibility = data.get("eligibility");
    const interview_conducted_by = data.get("interview_conducted_by");
    const narrative = data.get("narrative");
    const symptoms_time = data.get("symptoms_time");
    const attending_physician_name = data.get("attending_physician_name");
    const attendantName = data.get("attendantName");
    const attendant_relation_to_patient = data.get("attendant_relation_to_patient");
    const date = data.get("date");

    // Handle CNIC photocopy upload
    let cnicPhotocopy;
    if (photocopy && typeof photocopy === "object") {
      // save locally if needed
      await saveImage(photocopy);

      // save on Vercel Blob
      const uploaded = await put(photocopy.name, photocopy, {
        access: "public",
      });
      cnicPhotocopy = uploaded.url;
    }

    await startDbConnection();

    const patient = await PatientModel.create({
      patient_code,
      name,
      age,
      gender,
      contact,
      address,
      note,
      patient_condition,
      patient_status,
      father_status,
      father_profession,
      father_name,
      father_cnic_number,
      income,
      eligibility,
      interview_conducted_by,
      narrative,
      symptoms_time,
      cnic: {
        cnic_number,
        photocopy: cnicPhotocopy,
      },
      attending_physician_name,
      attendant_details: {
        name: attendantName,
        relation_to_patient: attendant_relation_to_patient,
      },
      date,
    });

    return NextResponse.json(
      {
        success: true,
        message: `Patient ${patient.name} added successfully!`,
        patient,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating patient:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Server Error", error },
      { status: 500 }
    );
  }
};

// Get all patients
export const GET = async () => {
  try {
    await startDbConnection();

    const patients = await PatientModel.find().sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      data: patients,
    });
  } catch (error) {
    console.error("Error fetching patients:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Server Error", error },
      { status: 500 }
    );
  }
};
