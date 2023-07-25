const mongoose = require('mongoose');

const statSchema = new mongoose.Schema({
  get_stats: {
    AAPL: {
      bookValue: { type: Number },
      profit: { type: Number },
    },
    GOOGL: {
      bookValue: { type: Number },
      profit: { type: Number },
    },
    MSFT: {
      bookValue: { type: Number },
      profit: { type: Number },
    },
    AMZN: {
      bookValue: { type: Number },
      profit: { type: Number },
    },
    PYPL: {
      bookValue: { type: Number },
      profit: { type: Number },
    },
    TSLA: {
      bookValue: { type: Number },
      profit: { type: Number },
    },
    JPM: {
      bookValue: { type: Number },
      profit: { type: Number },
    },
    NVDA: {
      bookValue: { type: Number },
      profit: { type: Number },
    },
    NFLX: {
      bookValue: { type: Number },
      profit: { type: Number },
    },
    DIS: {
      bookValue: { type: Number },
      profit: { type: Number },
    },
  },
});


module.exports = mongoose.model('Stat', statSchema);
