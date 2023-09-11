import ErrorHandler from "../utils/errorHandler.js";
import Message from "../models/messageModel.js";
import User from "../models/userModel.js";

export const sendMessage = async (req, res, next) => {
  try {
    const { content, chatId } = req.body;

    if (!content || !chatId) {
      return next(new ErrorHandler("Please Fill All The Fields!", 400));
    }

    var newMessage = {
      sender: req.user._id,
      content: content,
      chat: chatId,
    };

    var message = await Message.create(newMessage);

    message = await message.populate("sender", "name pic photo");
    message = await message.populate("chat");
    message = await User.populate(message, {
      path: "chat.users",
      select: "name pic email",
    });

    return res.status(201).json(message);
  } catch (error) {
    return next(error);
  }
};

export const fetchMessages = async (req, res, next) => {
  try {
    const messages = await Message.find({ chat: req.params.chatId })
      .populate("sender", "name pic photo")
      .populate("chat").sort({updatedAt: -1});
    return res.status(200).json(messages);
  } catch (error) {
    return next(error);
  }
};
