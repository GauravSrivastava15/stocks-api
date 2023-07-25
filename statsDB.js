require("dotenv").config();
const fs = require("fs");
const mongoose = require("mongoose");
const connectDB = require("./db/connect");
const Stat = require("./models/stats");

connectDB(process.env.MONGODB_URL);

const db = mongoose.connection;

db.once('open', async () => {
  console.log('Connected to MongoDB Atlas');

  try {
    
    const jsonData = await fs.promises.readFile('statData.json', 'utf8');
    const parsedData = JSON.parse(jsonData);

    const statData = new Stat({
      get_stats: parsedData['get-stats'],
    });

    
    const result = await statData.save();
    console.log('Data saved successfully:', result);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    
    mongoose.connection.close();
  }
});
