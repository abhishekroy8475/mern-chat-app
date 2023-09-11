import mongoose from "mongoose";

const chatSchema = mongoose.Schema(
  {
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    isGroup: { type: Boolean, default: false },
    groupName: { type: String },
    groupAdmin: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    groupPhoto: {
      type: String,
      required: true,
      default:
        "https://res.cloudinary.com/abhishek-roy-cloud/image/upload/v1694433236/chatify-images/default_group_png_uosent.png",
    },
  },
  { timestamps: true }
);

const Chat = mongoose.model("Chat", chatSchema);

export default Chat;
