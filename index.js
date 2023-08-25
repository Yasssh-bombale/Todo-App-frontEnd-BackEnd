const express = require("express");
const port = 8000;
const bodyParser = require("body-parser");
const app = express();

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

// setting an view engine which is ejs engine;

app.set("view engine", "ejs");
app.set("views", "./views");

// setting an body-parser for an post request which is used to get an form inputs by body.req;
app.use(bodyParser.urlencoded());
// middle wares ;

app.use("/", require("./routes"));
app.use(express.static("assets"));

app.listen(port, (error) => {
  if (error) {
    console.log(`Error occured while connecting to the server ${error}`);
  }

  return console.log(`Server is launched Successfully ${port}`);
});
