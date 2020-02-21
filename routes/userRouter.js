const express = require("express");
const userController = require("../controllers/userController");

function routes(User) {
  const userRouter = express.Router();
  const controller = userController(User);

  userRouter.route("/register").post(controller.post);
  return userRouter;
}

module.exports = routes;
