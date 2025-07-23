const { GoogleGenerativeAI } = require("@google/generative-ai");

if (!process.env.GEMINI_API_KEY) {
  throw new Error("Missing GEMINI_API_KEY in environment variables");
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const TIME_PER_QUESTION = 30; // 30 seconds per question
const INPUT_MAX_QUESTIONS = 30;

function parseGeminiResponse(text) {
  try {
    return JSON.parse(text);
  } catch (e) {
    const jsonMatch = text.match(/(```json\n([\s\S]*?)\n```|{[\s\S]*?})/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[1].replace(/```json|```/g, ""));
    }
    throw new Error(`Failed to parse response: ${e.message}`);
  }
}

async function generateQuiz({ topic, numQuestions, language }) {
  if (numQuestions < 1 || numQuestions > INPUT_MAX_QUESTIONS) {
    throw new Error(`Number of questions must be 1-${INPUT_MAX_QUESTIONS}`);
  }

  const startTime = Date.now(); // Start timing the operation
  const timeLimit = numQuestions * TIME_PER_QUESTION;

  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
    generationConfig: {
      temperature: 0.7,
      topP: 1,
      topK: 40,
      maxOutputTokens: 4000,
    },
  });

  const prompt = `Generate exactly ${numQuestions} multiple choice questions about ${topic} in ${language}.
  
  Requirements:
  1. Return ONLY a JSON object with this structure:
  {
    "topic": "${topic}",
    "language": "${language}",
    "timeLimit": ${timeLimit},
    "questions": [
      {
        "question": "Question text",
        "options": {
          "a": "Option A",
          "b": "Option B",
          "c": "Option C",
          "d": "Option D"
        },
        "correctAnswer": "a"
      }
    ]
  }
  
  Important:
  - Include "timeLimit": ${timeLimit} in the response
  - Exactly ${numQuestions} questions
  - Each question must have 4 options (a-d)`;

  try {
    const result = await model.generateContent(prompt);
    const text = result.response.text();
    const quiz = parseGeminiResponse(text);

    if (!quiz.questions || quiz.questions.length !== numQuestions) {
      throw new Error(
        `Received ${
          quiz.questions?.length || 0
        } questions, expected ${numQuestions}`
      );
    }

    const endTime = Date.now();
    const processingTime = Math.floor((endTime - startTime) / 1000); // in seconds

    return {
      ...quiz,
      timeLimit, // Total time limit for the quiz
      timePerQuestion: TIME_PER_QUESTION, // Time per individual question
      processingTime, // Actual time taken to generate the quiz
      totalQuestions: numQuestions,
      serverMessage: `You have ${timeLimit} seconds total (${TIME_PER_QUESTION}s per question) to complete the quiz`,
    };
  } catch (error) {
    console.error("Generation error:", error);
    throw new Error(`Failed to generate quiz: ${error.message}`);
  }
}

module.exports = { generateQuiz };
