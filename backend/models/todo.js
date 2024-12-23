const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    taskName:{type:String, require:true},
    status:{type:Boolean, require:false},
}, {timestamps:true});

module.exports=mongoose.model('Todo', todoSchema);
