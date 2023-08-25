const todoList = [
  {
    task: "you need to add something !",
    category: "work",
    date: "OCT 5,2023",
  },
];

module.exports.home = (req, res) => {
  return res.render("home", {
    title: "Todo-App",
    todo_list: todoList,
  });
};
