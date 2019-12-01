const bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("server up");
});
