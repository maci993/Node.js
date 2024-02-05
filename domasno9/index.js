const express = require("express");
const {
  getForm,
  postForm,
  getStudents,
  deleteStudents,
} = require("./controllers/formular");

const app = express();

app.set("view engine", "ejs");

//koga isprakjame json
// app.use(express.json())

//koga isprakjame forma
app.use(express.urlencoded({ extended: true }));

//ni gi zema fajlovite od staticniot folder
app.use(express.static("public"));

app.get("/form", getForm);
app.post("/form", postForm);
app.get("/students", getStudents);
app.get("brisi", deleteStudents);

app.listen(3000, () => console.log("Server started at port 3000"));
