const Stock = require("../models/stock");
const Profile = require("../models/profile");
const Stat = require("../models/stats");
const Chart = require("../models/chart");

const getAllProfile = async (req, res) => {
  const myData = await Profile.find({});
  res.status(200).json({ myData });
};

const getAllStats = async (req, res) => {
  const myData = await Stat.find({});
  res.status(200).json({ myData });
};

const getAllCharts = async (req, res) => {
  const myData = await Chart.find({});
  res.status(200).json({ myData });
};

module.exports = { getAllProfile, getAllStats, getAllCharts };
