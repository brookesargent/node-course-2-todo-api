const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5b4f5aa128adc53a57139157';
var userId = '5b4f471f6a8ade3355669ef4';

if (!ObjectId.isValid(id)) {
    console.log('Invalid id');
}

if (!ObjectId.isValid(userId)) {
    console.log('User id is invalid');
}

// Todo.find({
//     _id: id //mongoose auto converts string to object id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id //mongoose auto converts string to object id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id ', todo);
// }).catch((e) => console.log(e));

User.findById(userId).then((user) => {
    if (!user) {
        return console.log('User id not found');
    }
    console.log('User By Id ', user);
}).catch((e) => console.log(e));
