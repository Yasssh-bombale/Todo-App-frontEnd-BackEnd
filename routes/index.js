const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home-controller");
// const todoList = [
//   {
//     task: "you need to add something !",
//     category: "work",
//     date: "OCT 5,2023",
//   },
//   {
//     task: "here is some dummy tasks !",
//     category: "College",
//     date: "MAY 20,2019",
//   },
//   {
//     task: "Hii i need to do something is task !",
//     category: "School",
//     date: "JUNE 15,2020",
//   },
// ];
router.get("/", homeController.home);

// post request;

router.post("/create-todo", (req, res) => {
  console.log(req.body);
  return res.redirect("back");
});
module.exports = router;
