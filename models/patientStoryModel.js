import { Schema, model, models } from "mongoose";

const patientStorySchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    diagnosis: { type: String, trim: true },
    location: { type: String, trim: true },
    age: { type: String, trim: true },
    story: { type: String, trim: true },
    fullStory: { type: String, trim: true },
    image: { type: String, trim: true },
  },
  { timestamps: true }
);

const PatientStoryModel =
  models.PatientStory || model("PatientStory", patientStorySchema);

export default PatientStoryModel;