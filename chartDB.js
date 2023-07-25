
require("dotenv").config();
const fs = require("fs");
const mongoose = require("mongoose");
const connectDB = require("./db/connect");
const Chart = require("./models/chart");

connectDB(process.env.MONGODB_URL);


const db = mongoose.connection;

db.once('open', async () => {
  console.log('Connected to MongoDB Atlas');

  try {
    
    const jsonData = await fs.promises.readFile('chartData.json', 'utf8');
    const parsedData = JSON.parse(jsonData);

    
    const getChartsData = parsedData['get-charts'];

    
    for (const symbol in getChartsData) {
      if (Object.prototype.hasOwnProperty.call(getChartsData, symbol)) {
        const chartData = getChartsData[symbol];
        const chart = new Chart({
          symbol,
          '5y': chartData['5y'],
          '1y': chartData['1y'],
          '1mo': chartData['1mo'],
          '3mo': chartData['3mo'],
        });
        await chart.save();
        console.log(`Chart data for ${symbol} saved successfully.`);
      }
    }

  } catch (error) {
    console.error('Error:', error);
  } 
});
