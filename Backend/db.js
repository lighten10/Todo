const mongoose = require('mongoose');
const { boolean } = require('zod');

mongoose.connect("mongodb://localhost:27017/todos");

const todoScheme  = mongoose.Schema({
    title : String,
    description : String ,
    completed : Boolean
});

const todo = mongoose.model('todos', todoScheme);

module.exports = {
    todo
}
