var express = require("express");
var router = express.Router({ mergeParams: true });

/* GET reviews listing. /posts/:id/reviews*/
router.get("/", (req, res, next) => {
  res.send("INDEX posts/:id/reviews");
});

/* POST create reviews listing. /posts/:id/reviews/*/
router.post("/", (req, res, next) => {
  res.send("CREATE posts/:id/reviews");
});

/* GET edit reviews listing. /posts/:id/reviews/:review_id/edit*/
router.get("/:review_id/edit", (req, res, next) => {
  res.send("EDIT /posts/:id/reviews/:review_id/edit");
});

/* PUT update reviews listing. /posts/:id/reviews/:review_id/*/
router.put("/:review_id", (req, res, next) => {
  res.send("UPDATE /posts/:id/reviews/:review_id");
});

/* DELETE destroy reviews listing. /posts/:id/reviews/:review_id*/
router.delete("/:review_id", (req, res, next) => {
  res.send("DELETE /posts/:id/reviews/:review_id");
});

module.exports = router;

// GET  index        /reviews
// GET  new          /reviews/new
// POST create       /reviews
// GET  show         /reviews/:id
// GET  edit         /reviews/:id/edit
// PUT update        /reviews/:id
// DELETE destroy    /reviews/:id
