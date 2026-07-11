const express = require("express");
const { GoogleGenAI } = require("@google/genai");
const system_instruction = require("./system-prompt");
const app = express();

require("dotenv").config();
app.use(express.json());

app.post("/api/generate", async (req, res) => {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const { text } = req.body;

  const interaction = await ai.interactions.create({
    model: "gemini-3.5-flash",
    input: text,
    system_instruction,
  });

  res.status(200).json({ success: true, output: interaction.output_text });
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
