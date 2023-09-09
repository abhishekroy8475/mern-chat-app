import mongoose from "mongoose";
import bcryptjs from "bcryptjs";

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, unique: true, required: true },
    photo: {
      type: String,
      required: true,
      default:
        "https://res.cloudinary.com/abhishek-roy-cloud/image/upload/v1694167632/chatify-images/default_ugvswk.png",
    },
  },
  { timestamps: true }
);

userSchema.methods.matchPassword = function (enteredPassword) {
  return bcryptjs.compare(enteredPassword, this.password);
};

userSchema.pre("save", function (next) {
  if (this.isModified("password")) {
    this.password = bcryptjs.hashSync(this.password, 10);
  }
  next();
});

const User = mongoose.model("User", userSchema);

export default User;
