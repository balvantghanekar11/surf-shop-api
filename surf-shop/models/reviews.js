const mongoose = require(mongoose);
const passportLocalMongoose = require("passport-local-mongoose");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  body: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

ReviewSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("Review", ReviewSchema);
