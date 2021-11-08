
const mongoose = require('mongoose');

const pageSchema = mongoose.Schema({
    revenue: {
        type:String,
    },
    pageName: {
        type:String,
        trim:true,
    },
    CompID: {
        type: String,
    },
    email: {
        type:String,
    },
    currency : {
        type:String,
    },
    goal: String,
    owner : {
        type: String,
    },
    pageType :{
        type: Number
    },
    creative :{
        type: Number
    },
    members :{
        type: [{ type : mongoose.Schema.Types.ObjectId, ref: 'Member' }]
    },
    messageType:{
        type: String
    },
    mode:{
        type: String
    }
})

const Page = mongoose.model('Page', pageSchema);

module.exports = { Page: Page }
