import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import ErrorHandler from "../utils/errorHandler.js";

const protect = async (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      const decoded = jwt.verify(
        req.headers.authorization.split(" ")[1],
        process.env.JWT_SECRET
      );

      req.user = await User.findById(decoded.id).select("name email photo");

      next();
    } catch (error) {
      return next(
        new ErrorHandler("Authorization Failed, Please Login Again", 401)
      );
    }
  } else {
    return next(
      new ErrorHandler("Authorization Failed, Please Login Again", 401)
    );
  }
};

export default protect;
