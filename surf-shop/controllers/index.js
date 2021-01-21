const { model } = require("mongoose");
const passport = require("passport");

const User = require("../models/users");

module.exports = {
  // post Register method POST /register
  async postRegister(req, res, next) {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      image: req.body.image,
    });
    await User.register(newUser, req.body.password);
    res.redirect("/");
  },

  //post login method post /login
  postLogin(req, res, next) {
    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/login",
    })(req, res, next);
  },

  //get Logout method get /logout
  getLogout(req, res, next) {
    req.logOut();
    res.redirect("/");
  },
};
