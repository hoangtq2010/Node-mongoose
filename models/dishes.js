const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    rating : {
        type : Number,
        min : 1,
        max : 5,
        required : true
    },
    comment : {
        type : String, 
        required : true
    },
    author : {
        type : String,
        required : true
    }
},{
    timestamps : true
})



const dishSchema = new Schema({
    name : {
        type : String,
        required : true,      //moi document se co name nhu 1 truong bat buoc
        unique : true        //duy nhat, ko co 2 document trung ten
    },
    description : {
        type : String,
        required : true
    },
    comments : [ commentSchema ]    
},{
    timestamps : true          //tu dong chen time vao model(abtomat update)
});

var Dishes = mongoose.model('Dish', dishSchema);

module.exports = Dishes;
