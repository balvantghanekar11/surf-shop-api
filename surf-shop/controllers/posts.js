const Post = require("../models/posts");

module.exports = {
  //posts index
  async postIndex(req, res, next) {
    let posts = await Post.find({});
    res.render("posts/index", { posts });
  },

  //new Posts
  postNew(req, res, next) {
    res.render("posts/new");
  },

  //create Posts
  async postCreate(req, res, next) {
    //use req.body to create a new post
    let post = await Post.create(req.body.post);
    res.redirect(`/posts/${post.id}`);
  },

  //show Posts
  async postShow(req, res, next) {
    let post = await Post.findById(req.params.id);
    res.render("posts/show", { post });
  },

  //post edit
  async postEdit(req, res, next) {
    let post = await Post.findById(req.params.id);
    res.render("posts/edit", { post });
  },

  //post Update
  async postUpdate(req, res, next) {
    let post = await Post.findByIdAndUpdate(req.params.id, req.body.post);
    res.redirect(`/posts/${post.id}`);
  },

  //post Delete
  async postDestroy(req, res, next) {
    let post = await Post.findByIdAndDelete(req.params.id);
    res.redirect("/posts");
  },
};
