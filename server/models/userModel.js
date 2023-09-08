import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, unique: true, required: true },
    photo: {
      type: String,
      required: true,
      default:
        "https://res.cloudinary.com/dmjp05125/image/upload/v1694167632/chatify-images/default_ugvswk.png",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
