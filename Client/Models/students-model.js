const mongoose = require('mongoose');
const schema = mongoose.Schema;

const Student = new schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    age:{
        type:Number
    }
},{ timestamps: true })

module.exports = mongoose.model('Student', Student);