import express from "express";
import { AxivaraCore } from "./src/core/axivaraCore.js";
import { config } from "./config/config.js";

import { MongoClient, ServerApiVersion } from "mongodb";

const uri = "mongodb+srv://davinjmeema405_db_user:Axivara_secure_founder-admin@cluster0.zxjtizy.mongodb.net/axivara?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
}

connectDB();

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
