const express = require("express");

const app = express();

app.get("/user", (req, res) => {
  console.log(req.query);
  res.send({ firstName: "Subha", lastName: "Roy" });
});

// Dynamic route
// ':' means dynamic
app.get("/user/:userId/:name", (req, res) => {
  console.log(req.params);
  res.send({ firstName: "Subha", lastName: "Roy" });
});

app.listen(3001, () => {
  console.log("server is listening on port 3001");
});
