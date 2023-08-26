const todoList = [
  {
    task: "you need to add something !",
    category: "work",
    date: "OCT 5,2023",
  },
  {
    task: "testing an todo app",
    category: "Coding",
    date: "NO DEADLINES",
  },
  {
    task: "just do timepass!",
    category: "Self",
    date: "OCT 6,2028",
  },
];

module.exports.home = (req, res) => {
  return res.render("home", {
    title: "Todo-App",
    todo_list: todoList,
  });
};
