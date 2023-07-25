const mongoose = require("mongoose")
const {Schema} = mongoose;

const stockSchema = new Schema({
    getCharts:{
        type: Map,
        of: {
            type: Map,
            of: {
                value: [Number],
                timeStamp: [Number],
            }
        }
    },

    getProfile: {
        type: Map,
        of: {
            summary: String,
        }
    },

    getStats: {
        type: Map,
        of: {
            bookValue: Number,
            profit: Number,
        }
    }
})

module.exports = mongoose.model("Stock", stockSchema);