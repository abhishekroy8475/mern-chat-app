import Chat from "../models/chatModel.js";

export const createChat = async (req, res, next) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return next(new ErrorHandler("User Id Not Sent!", 400));
    }

    const chatExist = await Chat.find({
      isGroup: false,
      $and: [
        { users: { $elemMatch: { $eq: req.user._id } } },
        { users: { $elemMatch: { $eq: userId } } },
      ],
    }).populate("users", "-password");

    if (chatExist.length > 0) {
      return res.status(200).json(chatExist);
    }

    const chatData = {
      isGroup: false,
      users: [req.user._id, userId],
    };

    const createChat = await Chat.create(chatData);

    if (createChat) {
      const fullChat = await Chat.findById(createChat._id).populate(
        "users",
        "-password"
      );

      return res.status(201).json(fullChat);
    } else {
      return next(new ErrorHandler("Failed To Create Chat", 500));
    }
  } catch (error) {
    return next(error);
  }
};
