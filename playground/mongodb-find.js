// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
    //using return to stop proccess and hide the success message
    if(err){
        return console.log('Unable to connect to mongodb server'); 
    }
    console.log('Connected to MongoDB Server');

    // db.collection('Todos').find({completed: true}).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // }, (err) => {
    //     console.log('Unable to fetch todos ', err);
    // });

    //Count
    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos Count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to count todos ', err);
    // });

    db.collection('Users').find({name: 'Alex'}).count().then((count) => {
        console.log(`Todos Count: ${count}`);
    }, (err) => {
        console.log('Unable to count todos ', err);
    });

  

    db.close();
});