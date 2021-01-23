var express = require("express");
var router = express.Router();
const { asyncErrorHandler } = require("../middleware");
const {
  postIndex,
  postNew,
  postCreate,
  postShow,
  postEdit,
  postUpdate,
  postDestroy,
} = require("../controllers/posts");

/* GET posts listing. /posts*/
router.get("/", asyncErrorHandler(postIndex));

/* GET new posts listing. /posts/new*/
router.get("/new", postNew);

/* POST create posts listing. /posts/create*/
router.post("/", asyncErrorHandler(postCreate));

/* GET show posts listing. /posts/:id*/
router.get("/:id", asyncErrorHandler(postShow));

/* GET edit posts listing. /posts/:id/edit*/
router.get("/:id/edit", asyncErrorHandler(postEdit));

/* PUT update posts listing. /posts/:id/*/
router.put("/:id", asyncErrorHandler(postUpdate));

/* DELETE destroy posts listing. /posts/:id*/
router.delete("/:id", asyncErrorHandler(postDestroy));

module.exports = router;

// GET  index        /posts
// GET  new          /posts/new
// POST create       /posts
// GET  show         /posts/:id
// GET  edit         /posts/:id/edit
// PUT update        /posts/:id
// DELETE destroy    /posts/:id
