
const mongoose = require("mongoose");

const chartSchema = new mongoose.Schema({
  symbol: { type: String, required: true },
  '5y': { type: Object, required: true },
  '1y': { type: Object, required: true },
  '1mo': { type: Object, required: true },
  '3mo': { type: Object, required: true },
});

module.exports = mongoose.model("Chart", chartSchema);
