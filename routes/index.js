const express = require("express");
const router = express.Router();
// const homeController = require("../controllers/home-controller");

const todoList = [
  {
    task: "you need to add something !",
    category: "Work",
    date: "OCT 5,2023",
  },
  {
    task: "testing an todo app",
    category: "College",
    date: "NO DEADLINES",
  },
  {
    task: "just do timepass!",
    category: "Self",
    date: "OCT 6,2028",
  },
];

router.get("/", (req, res) => {
  return res.render("home", {
    title: "Todo-App",
    todo_list: todoList,
  });
});

// post request;

router.post("/create-todo", (req, res) => {
  todoList.push(req.body);
  return res.redirect("back");
});

module.exports = router;
