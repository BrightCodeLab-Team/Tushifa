import { Schema, model, models } from "mongoose";

const patientSchema = new Schema(
  {
    patient_code: { type: String, trim: true },
    name: { type: String, required: true, trim: true },
    age: { type: String, required: true },
    gender: { type: String, required: true },
    contact: { type: Number, required: true },
    address: { type: String, required: true, trim: true },
    patient_condition: { type: String, trim: true },
    patient_status: { type: String, required: true },
    father_status: { type: String },
    father_profession: { type: String },
    father_name: { type: String },
    father_cnic_number: { type: String },
    income: { type: String },
    eligibility: { type: String },
    interview_conducted_by: { type: String },
    narrative: { type: String },
    symptoms_time: { type: String },
    note: { type: String },

    // CNIC details
    cnic: {
      cnic_number: { type: String, required: true },
      photocopy: { type: String }, // will store file path/URL
    },

    attending_physician_name: { type: String, required: true },

    // Attendant details
    attendant_details: {
      name: { type: String },
      relation_to_patient: { type: String },
    },

    date: { type: String },
    diagnosis: { type: String },
    location: { type: String },

    // Media & Stories
    image: { type: String }, // uploaded image path/URL
    story: { type: String }, // short story/quote
    fullStory: { type: String }, // full story details
  },
  {
    timestamps: true, // adds createdAt & updatedAt
  }
);

const PatientModel = models.Patient || model("Patient", patientSchema);

export default PatientModel;
