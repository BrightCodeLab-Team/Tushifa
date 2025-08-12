import { Schema, model, models } from "mongoose";
import { v4 as uuidv4 } from "uuid";

const prescriptionSchema = new Schema(
  {
    photocopy: String,
    approved: Boolean,
    prescription_names: [
      {
        prescriptionId: { type: String, default: uuidv4 },
        name: { type: String, required: true },
        amount: { type: Number, required: true, default: 0 },
        quantity: { type: Number, required: true },
        isGiven: { type: Boolean, default: false },
      },
    ],
    patient: { type: Schema.Types.ObjectId, ref: "Patient" },
    pharmacyId: { type: Schema.Types.ObjectId, ref: "Pharmacy" },
    prescription_amount: { type: Number, required: true, default: 0 },
  },
  {
    timestamps: true,
  }
);

const PrescriptionModel =
  models.Prescription || model("Prescription", prescriptionSchema);

export default PrescriptionModel;
