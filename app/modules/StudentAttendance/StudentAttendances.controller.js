import StudentAttendance from "./StudentAttendances.model.js";

export async function getAllStudentAttendances(req, res) {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const [result, totalStudentAttendances] = await Promise.all([
      StudentAttendance.find().skip(skip).limit(limit).sort({ createdAt: -1 }),
      StudentAttendance.countDocuments()
    ]);

    res.status(200).json({
      success: true,
      data: result,
      pagination: {
        totalItems: totalStudentAttendances,
        totalPages: Math.ceil(totalStudentAttendances / limit),
        currentPage: page,
        itemsPerPage: limit
      }
    });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

export async function getStudentAttendancesByBranch(req, res) {
  const branch = req.params.branch;
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const [result, totalStudentAttendances] = await Promise.all([
      StudentAttendance.find({ branch }).skip(skip).limit(limit).sort({ createdAt: -1 }),
      StudentAttendance.countDocuments({ branch }) 
    ]);

    res.status(200).json({
      success: true,
      data: result,
      pagination: {
        totalItems: totalStudentAttendances,
        totalPages: Math.ceil(totalStudentAttendances / limit),
        currentPage: page,
        itemsPerPage: limit
      }
    });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Get student attendance by ID
export async function getStudentAttendanceById(req, res) {
  const id = req.params.id;
  try {
    const result = await StudentAttendance.findById(id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "Student Attendance not found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Create a new student attendance
export async function createStudentAttendance(req, res) {
  try {
    const studentAttendanceData = req.body;
    const result = await StudentAttendance.create(studentAttendanceData);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Update a student attendance by ID
export async function updateStudentAttendance(req, res) {
  const id = req.params.id;
  const studentAttendanceData = req.body;
  try {
    const result = await StudentAttendance.findByIdAndUpdate(id, studentAttendanceData, {
      new: true,
    });
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "Student Attendance not found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Remove a student attendance by ID
export async function removeStudentAttendance(req, res) {
  const id = req.params.id;
  try {
    const result = await StudentAttendance.findByIdAndDelete(id);
    if (result) {
      res.status(200).json({ message: "Student Attendance deleted successfully" });
    } else {
      res.status(404).json({ message: "Student Attendance not found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}