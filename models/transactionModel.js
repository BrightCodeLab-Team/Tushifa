import { Schema, model, models } from "mongoose";

const transactionSchema = new Schema({
  sNo: { type: Number, required: true },
  patient: { type: Schema.Types.ObjectId, ref: "Patient" },
  pharmacy: { type: Schema.Types.ObjectId, ref: "Pharmacy" },
  prescription_amount: { type: Number, required: true },
  visits: { type: Number, required: true },
  date: { type: String, required: true },
});

const TransactionModel =
  models.Transaction || model("Transaction", transactionSchema);

export default TransactionModel;
