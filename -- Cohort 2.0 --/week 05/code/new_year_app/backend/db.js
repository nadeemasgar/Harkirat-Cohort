/*
* Todo {
    title: string;
    description: string;
    completed: boolean
  }
*/

const mongoose = require("mongoose");
const { boolean } = require("zod");

mongoose.connect(
  "mongodb+srv://admin:Nadeem%40123@cluster0.xpmnqir.mongodb.net/todos"
);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todo", todoSchema);

module.exports = {
  todo,
};
