// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
    //using return to stop proccess and hide the success message
    if(err){
        return console.log('Unable to connect to mongodb server'); 
    }
    console.log('Connected to MongoDB Server');

    
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5ac4f96d7a4b8376af138846")
    // },{
    //     $set: {
    //         completed: true
    //     }  
    // },{
    //     returnOriginal: false
    // }).then((res) => {
    //     console.log(res);
    // });

    
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5ac4334dc5df78c23af97842')
    },{
        $set: {
            name: 'Alex3'
        },
        $inc: {
            age: 2
        }
    },{
        returnOriginal: false
    }).then((res) => {
        console.log(res);
    });


    db.close();
});