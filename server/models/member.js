
const mongoose = require('mongoose');

const memberSchema = mongoose.Schema({
    revenue: {
        type:String,
    },
    totals: {
        type:Number,
    },
    user: {
        type: String,full_name
    },
    email: {
        type:String,
    },
    client : {
        type:String,
    },
    weeklyDonation: String,
    full_name : {
        type: String,
    },
    pageType :{
        type: Number
    },
    creative :{
        type: Number
    },
    messageType:{
        type: String
    },
    mode:{
        type: String
    },
    picture:{
        type: String
    }
})

const Member = mongoose.model('Member', memberSchema);

module.exports = { Member: Member }
