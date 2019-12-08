const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const msgUserSchema = new Schema(
  {
    name: {
      type: String,
      requred: true
    },
    id: {
      type: Schema.Types.ObjectId,
      required: true
    },
    avatar: {
      type: String
    }
  },
  { _id: false }
);
const messageSchema = new Schema(
  {
    text: {
      type: String,
      required: true
    },
    user: msgUserSchema,
    _id: {
      type: String,
      required: true
    },
    createdAt: { type: Date, default: Date.now }
  },
  { _id: false }
);

const messagesSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  messages: [messageSchema]
});

module.exports = mongoose.model("Messages", messagesSchema);
