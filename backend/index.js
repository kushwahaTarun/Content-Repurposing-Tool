const express = require("express");
const { GoogleGenAI } = require("@google/genai");
const system_instruction = require("./system-prompt");
const app = express();

require("dotenv").config();
app.use(express.json());

app.post("/api/generate", async (req, res) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const { text } = req.body;

    const interaction = await ai.interactions.create({
      model: process.env.GEMINI_MODEL || "gemini-3.5-flash",
      input: text,
      system_instruction,
    });

    res.status(200).json({ success: true, output: interaction.output_text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Failed to generate content" });
  }
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
