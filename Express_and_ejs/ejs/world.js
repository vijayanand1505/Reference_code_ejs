const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const PORT = process.env.PORT || 3500;
const path = require("path");
const router = express.Router();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.set("view engine", "ejs");
const users = [];

app.get("/", (req, res) => {
  res.render("login");
});

app.get("/signup", (req, res) => {
  res.render("signup");
  res.redirect("/");
});

// app.get("^/$|/login.ejs", (req, res) => {
//   const { username, email, password } = req.body;
//   users.push({ username, email, password });
//   console.log(users);
//   res.render("login.ejs");
// });

// app.get("^/$|/register.(html)?", (req, res) => {
//   res.render(path.join(__dirname, "signup.ejs"));
// });

app.post("^/signup.ejs", (req, res) => {
  const { username, email, password } = req.body;
  const existingUser = users.find(
    (user) => user.username === username || user.email === email
  );
  if (existingUser) {
    return res.status(409).send("Username or email already exists.");
  }
  // If not, add the new user to the users array
  users.push({ username, email, password });
  console.log(users);
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
