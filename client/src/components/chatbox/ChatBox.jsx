import { Box } from "@chakra-ui/react";

const ChatBox = ({ selectedChat }) => {
  return (
    <>
      <Box
        display={{ base: selectedChat ? "flex" : "none", lg: "flex" }}
        w={{ base: "100%", lg: "70%" }}
      >
        ChatBox
      </Box>
    </>
  );
};

export default ChatBox;
