import startDbConnection from "@/libs/db";
import PatientStoryModel from "@/models/patientStoryModel";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    await startDbConnection();
    const story = await PatientStoryModel.findById(params.id);
    if (!story) {
      return NextResponse.json(
        { success: false, error: "Story not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, story });
  } catch (error) {
    console.error("GET /patient-stories/[id] error:", error);
    return NextResponse.json(
      { success: false, message: error?.message || "Server error" },
      { status: 500 }
    );
  }
};

export const DELETE = async (req, { params }) => {
  try {
    await startDbConnection();
    const deleted = await PatientStoryModel.findByIdAndDelete(params.id);
    if (!deleted) {
      return NextResponse.json(
        { success: false, message: "Story not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { success: true, message: "Story deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("DELETE /patient-stories/[id] error:", error);
    return NextResponse.json(
      { success: false, message: error?.message || "Server error" },
      { status: 500 }
    );
  }
};