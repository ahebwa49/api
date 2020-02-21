const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("../config");

function userController(User) {
  function post(req, res) {
    var hash = bcrypt.hashSync(req.body.password, 8);

    User.create(
      {
        name: req.body.name,
        email: req.body.email,
        password: hash
      },
      function(err, user) {
        if (err)
          return res
            .status(500)
            .send("There was a problem registering the user.");
        // create a token
        var token = jwt.sign({ id: user._id }, config.secret, {
          expiresIn: 86400 // expires in 24 hours
        });
        res.status(200).send({ auth: true, token: token });
      }
    );
  }
  return { post };
}

module.exports = userController;
