const mongoose = require("mongoose");


const connectDB = async (uri) => {
  try {
    await mongoose.connect(uri);
    console.log(`Connected to Mongodb Database ${mongoose.connection.host}`);
  } catch (error) {
    console.log(`MONGO Connect Error ${error}`);
  }
};

module.exports = connectDB;
