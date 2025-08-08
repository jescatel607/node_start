const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use("/", require("./routes"));
app.get("/", (req, res) => {
  res.send("Welcome to the Test Server!");
});

app.listen(port, () => {
  console.log(`Testing server running on port http://localhost:${port}`);
});
