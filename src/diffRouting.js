// ORDER OF EXCUTION

const express = require("express");

const app = express();

// Request handler
// This will match all the HTTP method API call.
app.use("/test", (req, res) => {
  res.send("hello from the server");
});

app.get("/user", (req, res) => {
  res.send({ firstName: "Subha", lastName: "Roy" });
});

app.use("/user", (req, res) => {
  res.send("we are use: used to test");
});

// Testing || QUESTION
app.post("/user", (req, res) => {
  res.send("Save data in DB");
});

app.delete("/user", (req, res) => {
  res.send("User Delete");
});

app.listen(3001, () => {
  console.log("server is listening on port 3001");
});
