const express = require("express");

const app = express();

// Request handler
app.use("/test", (req, res) => {
  res.send("hello from the server");
});

app.listen(3001, () => {
  console.log("server is listening on port 3001");
});
