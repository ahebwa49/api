const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;
const db = mongoose.connect(
  "mongodb+srv://swipe2pay:swipe2pay@swipe2pay-xeaxh.mongodb.net/test?retryWrites=true"
);
const Book = require("./models/bookModels");
const User = require("./models/userModel");

const bookRouter = require("./routes/bookRouter")(Book);
const userRouter = require("./routes/userRouter")(User);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", bookRouter);
app.use("/api", userRouter);

app.get("/", (req, res) => {
  res.send("Welcome to my book REST API");
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
