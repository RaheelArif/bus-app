const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentShema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true
    },
    rating: {
      type: Number,
      required: true
    },
    comment: {
      type: String,
      required: true,
      min: 0,
      max: 5
    }
  },
  { timestamps: true }
);

const comments = mongoose.model("comment", commentShema);

module.exports = comments;
