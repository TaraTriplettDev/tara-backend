const express = require("express");
const app = express();

const port = 3000;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

app.get("/data", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.set("view engine", "ejs");

app.set("views", "./views")

app.get("/", (req, res) => res.render("index"));



