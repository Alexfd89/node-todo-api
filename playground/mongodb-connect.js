// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj); prints the id that going to be insert

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
    //using return to stop proccess and hide the success message
    if(err){
        return console.log('Unable to connect to mongodb server'); 
    }
    console.log('Connected to MongoDB Server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // },(err,result) => {
    //     if(err){
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })

    db.collection('Users').insertOne({
        name: 'Alex',
        age: 28,
        location: 'Israel'
    },(err,result) => {
        if(err){
            return console.log('Unable to insert todo', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.close();
});