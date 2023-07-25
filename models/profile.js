const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CompanySchema = new Schema({
  summary: String,
});


const ProfileSchema = new Schema({
  get_profile: {
    AAPL: CompanySchema,
    GOOGL: CompanySchema,
    MSFT: CompanySchema,
    AMZN: CompanySchema,
    PYPL: CompanySchema,
    TSLA: CompanySchema,
    JPM: CompanySchema,
    NVDA: CompanySchema,
    NFLX: CompanySchema,
    DIS: CompanySchema,
  },
});



module.exports = mongoose.model('Profile', ProfileSchema);
