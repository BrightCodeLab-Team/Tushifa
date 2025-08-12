import startDbConnection from "@/libs/db";
import TransactionModel from "@/models/transactionModel";
import { NextResponse } from "next/server";

// Update the transaction
export const PUT = async (req, { params }) => {
  const id = params.id;
  const body = await req.json();

  try {
    await startDbConnection();

    const checkExistTransaction = await TransactionModel.findById(id);

    if (!checkExistTransaction) {
      return NextResponse.json(
        {
          success: false,
          message: `Sorry, we did not find the transaction in the system which you are trying to update.`,
        },
        { status: 422 }
      );
    }

    const updatedTransaction = await TransactionModel.findByIdAndUpdate(
      id,
      { $set: { ...body } },
      { new: true }
    );

    if (!updatedTransaction) {
      return NextResponse.json(
        { success: false, error: "Transaction not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `Transaction updated successfully!`,
      pharmacy: updatedTransaction,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error?._message, error: error },
      { status: 500 }
    );
  }
};

// Delete transaction
export const DELETE = async (req, { params }) => {
  const id = params.id;

  try {
    await startDbConnection();

    const deletedTransaction = await TransactionModel.findByIdAndDelete(id);

    if (!deletedTransaction) {
      return NextResponse.json(
        { success: false, error: "Transaction not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `Transaction deleted successfully`,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error?._message, error: error },
      { status: 500 }
    );
  }
};
