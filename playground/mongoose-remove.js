const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// Todo.remove({}).then((res) => {
//     console.log(res);
// });

Todo.findOneAndRemove('5acd2ab4242d45d8248382ba').then((todo) => {
    console.log(todo);
});

Todo.findByIdAndRemove('5acd2ab8242d45d8248382bb').then((todo) => {
    console.log(todo); // the item that has been removed
});
