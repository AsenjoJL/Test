const express = require('express');
const router = express.Router();

// Sample exams data stored in an array
let exams = [
  { id: 1, name: "Math Exam", date: "2025-04-01" },
  { id: 2, name: "Science Exam", date: "2025-04-05" }
];

// POST /exams - Add a new exam
router.post('/', (req, res) => {
  const newExam = req.body;

  // Validate that required fields exist
  if (!newExam.name || !newExam.date) {
    return res.status(400).json({ message: "Exam name and date are required." });
  }

  // Assign a new ID
  newExam.id = exams.length + 1;
  exams.push(newExam);

  res.status(201).json(newExam);
});

module.exports = router;
