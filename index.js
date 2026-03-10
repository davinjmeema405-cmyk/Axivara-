import express from "express";
import { AxivaraCore } from "./src/core/axivaraCore.js";
import { config } from "./config/config.js";

const app = express();
app.use(express.json());

const ai = new AxivaraCore(config);
ai.start();

app.get("/", (req, res) => {
  res.send("Axivara AI is running");
});

app.post("/chat", (req, res) => {
  const { message } = req.body;

  const response = ai.process(message);

  res.json({
    reply: response
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Axivara API running on port", PORT);
});
