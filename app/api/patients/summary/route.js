import startDbConnection from "@/libs/db";
import PatientModel from "@/models/patientModel";
import { NextResponse } from "next/server";
import TransactionModel from "@/models/transactionModel";

export const GET = async (request) => {
  try {
    const { searchParams } = new URL(request.url);
    const day = searchParams.get("day")?.toLowerCase(); // Day received in params
    const patientType = searchParams.get("patientType");

    if (!day || !patientType) {
      return NextResponse.json(
        { success: false, message: "Missing required query parameters" },
        { status: 400 }
      );
    }

    await startDbConnection();

    // 🔹 Map days to indexes
    const daysOfWeek = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];

    const today = new Date();
    const todayIndex = today.getDay(); // Get today's index (0-6)
    const requestedDayIndex = daysOfWeek.indexOf(day);

    if (requestedDayIndex === -1) {
      return NextResponse.json(
        { success: false, message: "Invalid day parameter" },
        { status: 400 }
      );
    }

    // 🔹 Find the most recent past occurrence of the requested day
    let daysAgo = (todayIndex - requestedDayIndex + 7) % 7; // Ensure non-negative values
    if (daysAgo === 0) daysAgo = 7; // If today is the requested day, get the last week's occurrence

    const targetDate = new Date();
    targetDate.setDate(today.getDate() - daysAgo); // Move back to last occurrence of the day
    targetDate.setHours(0, 0, 0, 0); // Start of day
    const endOfDay = new Date(targetDate);
    endOfDay.setHours(23, 59, 59, 999); // End of day

    console.log(
      `🔍 Searching records for ${day} (${targetDate.toDateString()})`
    );

    let patients = [];

    if (patientType === "new_patient") {
      patients = await PatientModel.find({
        createdAt: { $gte: targetDate, $lt: endOfDay },
      });
    } else if (patientType === "visited_patient") {
      const transactions = await TransactionModel.find({
        createdAt: { $gte: targetDate, $lt: endOfDay },
      }).populate("patient");

      patients = transactions.map((txn) => txn.patient);
    }

    return NextResponse.json({ success: true, data: patients });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: error?.stack, error: error },
      { status: 500 }
    );
  }
};
