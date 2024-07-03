const express = require("express");
const bodyParser = require("body-parser");
const projects =  require('./data.json');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// code here for adding static assets
app.use("/static", express.static("public"));

app.set("view engine", "pug");

app.get("/", (req, res) => {

  res.render("index" , projects);
});

app.get("/about", (req, res) => {
  res.render("about", {projects:projects});
});


app.get("/project/:id", (req, res) => {
  res.render("project", {project:projects.projects[req.params.id]});
});

app.listen(3000, () => {
  console.log("The application is running on localhost:3000!");
});
