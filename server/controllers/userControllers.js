import ErrorHandler from "../utils/errorHandler.js";
import User from "../models/userModel.js";
import generateToken from "../config/generateToken.js";

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
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        photo: newUser.photo,
        token: generateToken(newUser._id),
      });
    } else {
      return next(
        new ErrorHandler("Failed To Create User, Try After Sometime!", 500)
      );
    }
  } catch (error) {
    return next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return next(new ErrorHandler("Please Fill All The Fields!", 400));
    }

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      return res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        photo: user.photo,
        token: generateToken(user._id.toString()),
      });
    } else {
      return next(new ErrorHandler("Email And Password Does Not Match!", 400));
    }
  } catch (error) {
    return next(error);
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const keyword = req.query.search
      ? {
          $or: [
            { name: { $regex: req.query.search, $options: "i" } },
            { email: { $regex: req.query.search, $options: "i" } },
          ],
        }
      : {};

    const users = await User.find(keyword)
      .find({ _id: { $ne: req.user._id } })
      .select("name email photo");

    if (users) {
      return res.json(users);
    } else {
      return next(new ErrorHandler("Failed To Find User!", 500));
    }
  } catch (error) {
    return next(error);
  }
};
