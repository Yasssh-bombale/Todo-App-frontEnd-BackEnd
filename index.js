const express = require("express");
const port = 8000;

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");
// middle wares ;

app.use("/", require("./routes"));
app.use(express.static("assets"));
app.listen(port, (error) => {
  if (error) {
    console.log(`Error occured while connecting to the server ${error}`);
  }

  return console.log(`Server is launched Successfully ${port}`);
});
