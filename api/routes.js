const express = require("express");
const router = express.Router();
const { generateQuiz } = require("./controllers/mcqController");

/**
 * @swagger
 * /api/generate-quiz:
 *   post:
 *     summary: Generate MCQ quiz
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               topic:
 *                 type: string
 *                 example: "Science"
 *               numQuestions:
 *                 type: integer
 *                 minimum: 1
 *                 maximum: 30
 *                 example: 5
 *               language:
 *                 type: string
 *                 example: "English"
 *     responses:
 *       200:
 *         description: Quiz generated successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/api/generate-quiz", async (req, res) => {
  try {
    const {
      topic = "General Knowledge",
      numQuestions = 10,
      language = "English",
    } = req.body;
    const quiz = await generateQuiz({ topic, numQuestions, language });
    res.json(quiz);
  } catch (error) {
    console.error("Route error:", error);
    res.status(500).json({
      error: error.message,
      suggestion: "Please try again with different parameters",
    });
  }
});

module.exports = router;
