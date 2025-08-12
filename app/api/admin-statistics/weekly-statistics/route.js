import startDbConnection from "@/libs/db";
import FulfillmentModel from "@/models/fulfillmentModel";
import PharmacyModel from "@/models/pharmacyModel";
import PrescriptionModel from "@/models/prescriptionModel";
import PatientModel from "@/models/patientModel";
import { NextResponse } from "next/server";
import TransactionModel from "@/models/transactionModel";

export const GET = async () => {
  try {
    await startDbConnection();

    // Get the date 7 days ago
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 6); // Last 7 days including today
    sevenDaysAgo.setHours(0, 0, 0, 0);

    const today = new Date();
    today.setHours(23, 59, 59, 999);

    // Get counts within the last 7 days
    const totalPharmacies = await PharmacyModel.countDocuments({
      createdAt: { $gte: sevenDaysAgo, $lte: today },
    });

    const totalPatients = await PatientModel.countDocuments({
      createdAt: { $gte: sevenDaysAgo, $lte: today },
    });

    const totalPrescriptions = await PrescriptionModel.countDocuments({
      createdAt: { $gte: sevenDaysAgo, $lte: today },
    });

    // 🔹 Get total visits from TransactionModel
    const totalVisits = await TransactionModel.countDocuments({
      createdAt: { $gte: sevenDaysAgo, $lte: today },
    });

    const totalInvestment = await FulfillmentModel.aggregate([
      {
        $match: {
          createdAt: { $gte: sevenDaysAgo, $lte: today },
        },
      },
      {
        $group: {
          _id: null,
          totalAmount: { $sum: "$totalAmount" },
        },
      },
    ]);

    return NextResponse.json({
      success: true,
      statistics: {
        totalPharmacies,
        totalPatients,
        totalVisits,
        totalPrescriptions,
        totalInvestment: totalInvestment.length
          ? totalInvestment[0].totalAmount
          : 0,
      },
    });
  } catch (error) {
    console.error("Error Getting Weekly Dashboard Statistics ==> ", error);
    return NextResponse.json(
      { success: false, message: error?.message, error: error },
      { status: 500 }
    );
  }
};
