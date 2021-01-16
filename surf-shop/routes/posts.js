var express = require("express");
var router = express.Router();

/* GET posts listing. /posts*/
router.get("/", (req, res, next) => {
  res.send("INDEX /posts");
});

/* GET new posts listing. /posts/new*/
router.get("/new", (req, res, next) => {
  res.send("NEW /posts/new");
});

/* POST create posts listing. /posts/create*/
router.post("/", (req, res, next) => {
  res.send("CREATE /posts");
});

/* GET show posts listing. /posts/show*/
router.get("/:id", (req, res, next) => {
  res.send("SHOW /posts/:id");
});

/* GET edit posts listing. /posts/:id/edit*/
router.get("/:id/edit", (req, res, next) => {
  res.send("EDIT /posts/:id/edit");
});

/* PUT update posts listing. /posts/:id/*/
router.put("/:id", (req, res, next) => {
  res.send("UPDATE /posts/:id");
});

/* DELETE destroy posts listing. /posts/:id*/
router.delete("/:id", (req, res, next) => {
  res.send("DELETE /posts/:id");
});

module.exports = router;

// GET  index        /posts
// GET  new          /posts/new
// POST create       /posts
// GET  show         /posts/:id
// GET  edit         /posts/:id/edit
// PUT update        /posts/:id
// DELETE destroy    /posts/:id
