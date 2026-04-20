import mongoose from "mongoose";
const { Schema, model } = mongoose;

const StudentAttendanceSchema = Schema(
  {
    studentName: {
      type: String,
      required: [true, "Please provide the student name"],
    },
    studentId: {
      type: String,
      required: [true, "Please provide the student ID"],
    },
    date: {
      type: Date,
      required: [true, "Please provide the date"],
    },
    studentClass: {
      type: String,
      required: [true, "Please provide the class"],
    },
    section: {
      type: String,
      required: [true, "Please provide the section"],
    },
    present: {
      type: Boolean,
      default: false,
    },
    absent: {
      type: Boolean,
      default: false,
    },
    status: {
      type: Boolean,
      default: false,
    },
    branch: {
      type: String,
      required: [true, "Please provide the branch"],
    },
  },
  { timestamps: true }
);

const StudentAttendance = model("StudentAttendance", StudentAttendanceSchema);

export default StudentAttendance;