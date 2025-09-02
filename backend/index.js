import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/check-text", (req, res) => {
  const { text } = req.body;

  // For now, just return dummy response
  res.json({
    message: `Received: "${text}". Grammar check coming soon!`,
  });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
