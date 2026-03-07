const express = require("express");
const app = express();

app.use(express.json());

/* PUBLIC LANDING */

app.get("/", (req, res) => {
  res.send("Welcome to Axivara — Ecosystem Gateway Platform");
});

app.get("/apps", (req, res) => {
  res.json({
    apps: [
      { name: "Payments Module", status: "planned" },
      { name: "Identity Gateway", status: "planned" },
      { name: "Analytics Engine", status: "planned" }
    ]
  });
});

/* CLIENT API */

app.post("/api/register", (req, res) => {
  res.json({ message: "Client registration endpoint (coming soon)" });
});

app.post("/api/login", (req, res) => {
  res.json({ message: "Client login endpoint (coming soon)" });
});

/* FOUNDER ADMIN */

app.get("/admin/dashboard", (req, res) => {
  res.json({
    platform: "Axivara",
    apps_active: 0,
    companies_registered: 0,
    monthly_revenue: 0
  });
});

app.get("/admin/apps", (req, res) => {
  res.json({
    message: "Founder can manage ecosystem apps here"
  });
});

app.get("/admin/revenue", (req, res) => {
  res.json({
    message: "Revenue tracking module"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Axivara server running on port ${PORT}`);
});
"dependencies": {
  "express": "^4.18.2",
  "mongoose": "^7.0.0"
}
