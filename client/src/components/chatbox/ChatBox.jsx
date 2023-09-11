import { Box, Button } from "@chakra-ui/react";
import { ChatState } from "../../context/ChatProvider";

const ChatBox = () => {
  const { selectedChat, setSelectedChat } = ChatState();
  return (
    <>
      <Box
        display={{ base: selectedChat ? "flex" : "none", lg: "flex" }}
        w={{ base: "100%", lg: "70%" }}
      >
        <Button onClick={() => setSelectedChat()}>Back</Button>
      </Box>
    </>
  );
};

export default ChatBox;
