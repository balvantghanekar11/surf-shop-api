const express = require("express");

const router = express.Router();
const { postRegister, postLogin, getLogout } = require("../controllers/index");
const { errorHandler } = require("../middleware/index");

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Surf Shop | Home" });
});

/* POST /register */
router.post("/register", errorHandler(postRegister));

/* GET /login */
router.get("/login", (req, res, next) => {
  res.send("GET /login");
});

/* POST /login */
router.post("/login", postLogin);

/* GET /LOGOUT*/
router.get("/logout", getLogout);

/* GET /profile */
router.get("/profile", (req, res, next) => {
  res.send("GET /profile");
});

/* PUT /profile/:user_id */
router.put("/profile/:user_id", (req, res, next) => {
  res.send("PUT /profile/:user_id ");
});

/* GET /forgot-password */
router.get("/forgot-password", (req, res, next) => {
  res.send("GET /forgot-password");
});

/* PUT /forgot-password */
router.put("/forgot-password", (req, res, next) => {
  res.send("PUT /forgot-password");
});

/* GET /reset-password */
router.get("/reset-password/:token", (req, res, next) => {
  res.send("GET /reset-password/:token");
});

/* PUT /reset-password */
router.put("/reset-password/:token", (req, res, next) => {
  res.send("PUT /reset-password/:token");
});

module.exports = router;
