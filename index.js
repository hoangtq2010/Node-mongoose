const mongoose = require('mongoose');
const Dishes = require('./models/dishes');

//connect server Mongo
const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url);

connect.then((db) => {
    console.log('Connected correctly to server');

    //var newDish = Dishes({
    Dishes.create({
        name : 'Happizza',
        description : 'test'
    })

    //newDish.save()      //tao nhanh object
    .then((dish) => {
        console.log(dish);

        return Dishes.find({}).exec();  //exec: dam bao dieu nay dc thuc hien, tra lai promise 
    })
    .then((dishes) => {
        console.log(dishes);

        return Dishes.remove({});
    })
    .then(() => {
        return mongoose.connection.close();
    })
    .catch((err) => {
        console.log(err);
    })
})
