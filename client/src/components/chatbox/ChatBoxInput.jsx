import { ChevronRightIcon } from "@chakra-ui/icons";
import { Flex, IconButton, Input, useToast } from "@chakra-ui/react";
import { ChatState } from "../../context/ChatProvider";
import { useState } from "react";
import axios from "axios";

const ChatBoxInput = () => {
  const [newMessage, setNewMessage] = useState("");
  const { setMessages, user, selectedChat, messages } = ChatState();
  const toast = useToast();

  const sendMessage = async (event) => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };
      const url = `http://localhost:5000/api/v1/message`;

      const { data } = await axios.post(
        url,
        {
          content: newMessage,
          chatId: selectedChat._id,
        },
        config
      );

      setMessages([data, ...messages]);
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: "Failed to send the Message",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      console.log(error);
    }
  };

  return (
    <Flex p={2} borderTop="1px" borderTopColor="gray.200">
      <Input
        rounded="full"
        placeholder="type here"
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <IconButton
        aria-label="send message"
        icon={<ChevronRightIcon fontSize="20px" />}
        rounded="full"
        ml={2}
        colorScheme="blue"
        onClick={sendMessage}
      />
    </Flex>
  );
};

export default ChatBoxInput;
