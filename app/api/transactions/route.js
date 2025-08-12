import startDbConnection from "@/libs/db";
import PatientModel from "@/models/patientModel";
import PharmacyModel from "@/models/pharmacyModel";
import TransactionModel from "@/models/transactionModel";
import { NextResponse } from "next/server";

// Create a transaction
export const POST = async (req) => {
  try {
    const body = await req.json();
    await startDbConnection();
    const patient = await PatientModel.findById(body.patient);
    const sNo = await TransactionModel.countDocuments();
    const transaction = await TransactionModel.create({
      sNo: sNo + 1,
      ...body,
    });
    return NextResponse.json({
      success: true,
      message: `Transaction added successfully!`,
      transaction: {
        sNo: transaction.sNo,
        prescription_amount: transaction.prescription_amount,
        visits: transaction.visits,
        date: transaction.date,
        patient: patient,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error?._message, error: error },
      { status: 500 }
    );
  }
};

// Get all transactions
export const GET = async (req) => {
  try {
    await startDbConnection();
    const transactions = await TransactionModel.find()
      .populate("patient")
      .populate("pharmacy")
      .sort({ date: -1 });

    console.log(transactions);

    return NextResponse.json({
      success: true,
      data: transactions,
    });
  } catch (error) {
    console.log("Error in GET /transactions: ", error);
    console.dir(error, { depth: null });
    return NextResponse.json(
      { success: false, message: error?._message, error: error },
      { status: 500 }
    );
  }
};
