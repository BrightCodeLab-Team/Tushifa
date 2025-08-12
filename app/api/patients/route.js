import startDbConnection from "@/libs/db";
import PatientModel from "@/models/patientModel";
import saveImage from "@/utils/saveImage";
import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

// Function to generate a 5-digit random patient code
const generatePatientCode = () => {
  return Math.floor(10000 + Math.random() * 90000).toString();
};

// Create a patient
export const POST = async (req) => {
  try {
    const data = await req.formData();
    console.log("FormData From Backend: ", req.formData());
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
    const attendant_relation_to_patient = data.get(
      "attendant_relation_to_patient"
    );
    const date = data.get("date");

    let cnicPhotocopy;
    if (photocopy) {
      cnicPhotocopy = await saveImage(photocopy);
      cnicPhotocopy = await put(photocopy?.name, photocopy, {
        access: "public",
      });
    }

    await startDbConnection();

    const patient = await PatientModel.create({
      patient_code: patient_code,
      name: name,
      age: age,
      gender: gender,
      contact: contact,
      address: address,
      note: note,
      patient_condition: patient_condition,
      patient_status: patient_status,
      father_status: father_status,
      father_profession: father_profession,
      father_name: father_name,
      father_cnic_number: father_cnic_number,
      income: income,
      eligibility: eligibility,
      interview_conducted_by: interview_conducted_by,
      narrative: narrative,
      symptoms_time: symptoms_time,
      cnic: {
        cnic_number: cnic_number,
        photocopy: cnicPhotocopy?.url,
      },
      attending_physician_name: attending_physician_name,
      attendant_details: {
        name: attendantName,
        relation_to_patient: attendant_relation_to_patient,
      },
      date: date,
    });

    return NextResponse.json(
      {
        success: true,
        message: `Patient ${patient.name} added successfully!`,
        patient: patient,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { success: false, message: error?.message, error: error },
      { status: 500 }
    );
  }
};

// Get all patients
export const GET = async (req) => {
  try {
    await startDbConnection();

    const patients = await PatientModel.find().sort({ date: -1 });

    return NextResponse.json({
      success: true,
      data: patients,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: error?._message, error: error },
      { status: 500 }
    );
  }
};
