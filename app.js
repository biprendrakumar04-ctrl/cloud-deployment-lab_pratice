
const express = require("express");

const app = express();
const PORT = process.env.PORT || 5000;

const APP_NAME = "Cloud Deployment Lab";
const APP_VERSION = process.env.APP_VERSION || "1.0.0";
const STUDENT_NAME = process.env.STUDENT_NAME || "Biprendra kumar";

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${APP_NAME}</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background: #f0f4f8;
          text-align: center;
          padding: 60px 20px;
        }
        .card {
          background: white;
          max-width: 550px;
          margin: auto;
          padding: 35px;
          border-radius: 14px;
          box-shadow: 0 4px 18px #00000015;
        }
        h1 { color: #1769aa; }
        p { font-size: 18px; }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>Welcome to Cloud Deployment Lab!</h1>
        <p><strong>Student:</strong> ${STUDENT_NAME}</p>
        <p><strong>Application:</strong> ${APP_NAME}</p>
        <p><strong>Version:</strong> ${APP_VERSION}</p>
        <p>Successfully deployed using Docker and AWS EC2.</p>
      </div>
    </body>
    </html>
  `);
});

app.get("/health", (req, res) => {
  res.json({
    status: "healthy",
    application: APP_NAME,
    version: APP_VERSION
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`${APP_NAME} v${APP_VERSION} running on port ${PORT}`);
});
