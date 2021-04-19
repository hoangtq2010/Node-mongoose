const mongoose = require('mongoose');
const Dishes = require('./models/dishes');

//connect server Mongo
const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url);

connect.then((db) => {
    console.log('Connected correctly to server');

    
    Dishes.create({
        name : 'Uthapizza',
        description : 'test'
    })

    .then((dish) => {
        console.log(dish);

        return Dishes.findByIdAndUpdate(dish._id, {     //dishId đề cập đến dish vừa chèn và sửa đổi $set:{}
            $set : {description : 'Updated test'}
        },{
            new : true              //sau khi update sẽ trả về dish đã update
        })
        .exec();  //exec: dam bao dieu nay dc thuc hien, tra lai promise 
    })

    .then((dish) => {
        console.log(dish);

        dish.comments.push({        //đẩy 1 document comment vào dish
            rating : 5,
            comment : ' I\'m getting a sinking feeling!',
            author : 'Messi'
        });

        return dish.save();         //trả lại dish cho callback tiếp
    })
    
    .then((dish) => {
        console.log(dish);
        return Dishes.remove({});
    })
    
    .then(() => {
        return mongoose.connection.close();
    })
    .catch((err) => {
        console.log(err);
    })
})
