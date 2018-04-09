const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5acaad42d08da3d836d07e46';
// if(!ObjectID.isValid(id)){
//     console.log('Id is invallid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('\nTodos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('\nTodo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('\nTodo by id', todo);
// }).catch((e) => console.log(e));

var id = '5ac8f612e265037802ad4fcc';

User.findById(id).then((user) => {
    if(!user){
        return console.log('User not found');
    }
    console.log('User: ', user);
});