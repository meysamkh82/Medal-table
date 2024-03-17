const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const TeamSchema = new Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    gold:{
        type:Number,
        default:0
    },
    silver:{
        type:Number,
        default:0
    },
    bronze:{
        type:Number,
        default:0
    },
    total:{
        type:Number,
        default:0
    },
    color:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Team',TeamSchema);