require("dotenv").config();

const express = require("express");
const cors = require("cors");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const routes = require("./api/routes");

const app = express();
app.use(cors());
app.use(express.json());

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "MCQ Quiz Generator API",
      version: "1.0.0",
      description: "API for generating MCQ quizzes",
    },
    servers: [{ url: `http://localhost:${process.env.PORT || 3000}` }],
  },
  apis: ["./api/routes.js"],
};

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerJsdoc(swaggerOptions))
);
app.get("/", (req, res) => {
  res.send(
    "Welcome to the MCQ Quiz Generator API. Visit /api-docs for documentation."
  );
});
app.use(routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Docs at http://localhost:${PORT}/api-docs`);
});
