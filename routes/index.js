const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/Todo-app")
  .then(() => {
    console.log("Mongo is connected");
  })
  .catch((error) => {
    console.log("error while connecting to mongo", error);
  });

const todoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

const Todo = mongoose.model("todoListExpress", todoSchema);

const todoList = [];

router.get("/", async (req, res) => {
  let newTodo1 = await Todo.find({});
  return res.render("home", {
    title: "Todo-App",
    todo_list: newTodo1,
  });
});

// post request;

router.post("/create-todo", async (req, res) => {
  // todoList.push(req.body);
  let newTodo = await Todo.create({
    task: req.body.task,
    category: req.body.category,
    date: req.body.date,
  });
  // let newContact = await Contact.create({
  //   name: req.body.name,
  //   phone: req.body.phone,
  // });
  console.log(newTodo);
  return res.redirect("back");
});
// delete-task

router.get("/delete-task", async (req, res) => {
  let id = req.query.id;
  let del = await Todo.findByIdAndDelete(id);

  return res.redirect("back");
});

module.exports = router;
