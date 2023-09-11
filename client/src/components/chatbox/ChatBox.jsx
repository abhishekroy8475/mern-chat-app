import { Box } from "@chakra-ui/react";
import { ChatState } from "../../context/ChatProvider";
import ChatBoxNav from "./ChatBoxNav";
import ChatBoxInput from "./ChatBoxInput";

const ChatBox = () => {
  const { selectedChat } = ChatState();
  return (
    <>
      <Box
        display={{ base: selectedChat ? "flex" : "none", lg: "flex" }}
        w={{ base: "100%", lg: "70%" }}
        pr={{ base: 3, lg: 5 }}
        pl={{ base: 3, lg: 1 }}
        py={2}
      >
        <Box
          display="flex"
          flexDir="column"
          borderWidth="1px"
          borderRadius="lg"
          w="100%"
          h="100%"
        >
          <ChatBoxNav />
          <Box h="100%">
            hello
          </Box>
          <ChatBoxInput />
        </Box>
      </Box>
    </>
  );
};

export default ChatBox;
