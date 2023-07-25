require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect");

app.get("/", (req, res) => {
  res.send("Server is Live");
});

const profile_route = require("./routes/stock")
app.use("/api", profile_route)

const stat_route = require("./routes/stock")
app.use("/api", stat_route)

const chart_route = require("./routes/stock")
app.use("/api", chart_route)

const start = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(3000, () => {
      console.log("Server is started");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
