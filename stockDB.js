require("dotenv").config();
const fs = require("fs");
const connectDB = require("./db/connect");
const Stock = require("./models/stock");

const DataJson = require("./data.json");
console.log(DataJson);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    const rawData = fs.readFileSync("data.json", "utf8");
    const dataObject = JSON.parse(rawData);
    const result = await Stock.create(dataObject);
    
    console.log("success");
    console.log('Data saved:', result);
  } catch (error) {
    console.log("Error saving the data", error);
  }
};

start();
