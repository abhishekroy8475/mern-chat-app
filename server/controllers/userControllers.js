import ErrorHandler from "../utils/errorHandler.js";
import User from "../models/userModel.js";

export const registerUser = async (req, res, next) => {
  try {
    const { name, email, password, photo } = req.body;

    if (!name || !email || !password) {
      return next(new ErrorHandler("Please Fill All The Fields!", 400));
    }

    const userExist = await User.findOne({ email });

    if (userExist) {
      return next(new ErrorHandler("User Already Exist, Login Instead!", 400));
    }

    const newUser = await User.create({ name, email, password, photo });

    if (newUser) {
      return res.status(201).json({
        name: newUser.name,
        email: newUser.email,
        _id: newUser._id,
        photo: newUser.photo,
      });
    } else {
      return next(
        new ErrorHandler("Failed To Create User, Try After Sometime!", 500)
      );
    }
  } catch (error) {
    // sends response to client, NEED TO HANDLE!
    return next(error);
  }
};
