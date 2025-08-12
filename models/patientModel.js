import { Schema, model, models } from "mongoose";

const patientSchema = new Schema(
  {
    patient_code: { type: String },
    name: { type: String, required: true },
    age: { type: String, required: true },
    gender: { type: String, required: true },
    contact: { type: Number, required: true },
    address: { type: String, required: true },
    patient_condition: { type: String },
    patient_status: { type: String, required: true },
    father_status: { type: String },
    father_profession: { type: String },
    father_name: { type: String },
    father_cnic_number: { type: String },
    income: String,
    eligibility: { type: String },
    interview_conducted_by: { type: String },
    narrative: { type: String },
    symptoms_time: { type: String },
    note: { type: String },
    cnic: {
      cnic_number: { type: String, required: true },
      photocopy: { type: String },
    },
    attending_physician_name: { type: String, required: true },
    attendant_details: {
      name: String,
      relation_to_patient: String,
    },
    date: String,
  },
  {
    timestamps: true,
  }
);

const PatientModel = models.Patient || model("Patient", patientSchema);

export default PatientModel;
