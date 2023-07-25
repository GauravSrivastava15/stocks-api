require("dotenv").config();
const fs = require("fs");
const mongoose = require("mongoose");
const connectDB = require("./db/connect");
const Profile = require("./models/profile");

// Use the MongoDB URL from the environment variable
connectDB(process.env.MONGODB_URL);

// Access the mongoose connection object
const db = mongoose.connection;


db.once("open", async () => {
  console.log("Connected to MongoDB Atlas");

  try {
    // Read JSON data from the file
    const jsonData = await fs.promises.readFile("profileData.json", "utf8");
    const parsedData = JSON.parse(jsonData);

    const profileData = new Profile({
      get_profile: parsedData["get-profile"],
    });

    // Save the data to MongoDB Atlas
    const result = await profileData.save();
    console.log("Data saved successfully:", result);
  } catch (error) {
    console.error("Error:", error);
  }
});

// require("dotenv").config();
// const fs = require("fs");
// const connectDB = require("./db/connect");
// const Profile = require('./models/profile')

// connectDB(process.env.MONGODB_URL);

// fs.readFile('profileData.json', 'utf8', (err,data) =>{
//     if (err) {
//         console.error('Error reading JSON data:', err);
//         mongoose.connection.close();
//         return;
//     }
//     try{
//         const jsonData = JSON.parse(data);
//         const profileData = new Profile({
//             get_profile: jsonData['get-profile'],
//         })

//         profileData.save((err, result) => {
//             if (err) {
//               console.error('Error saving data:', err);
//             } else {
//               console.log('Data saved successfully:', result);
//             }
//         })
//     }catch (parseError) {
//         console.error('Error parsing JSON data:', parseError);
//     }

// })
