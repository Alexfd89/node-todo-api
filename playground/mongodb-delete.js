// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
    //using return to stop proccess and hide the success message
    if(err){
        return console.log('Unable to connect to mongodb server'); 
    }
    console.log('Connected to MongoDB Server');

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // })

    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    // console.log(result);
    // })

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    //     });

    //Challenge
    //Delete all Duplicates docs with name Alex

    // db.collection('Users').deleteMany({name: 'Alex'}).then((res) => {
    //     console.log(res);
    // });

    //Delete by _id
    db.collection('Users').findOneAndDelete({_id: new ObjectID("5ac503027a4b8376af1389f9")}).then((res) => {
        console.log(JSON.stringify(res));
    });



    db.close();
});