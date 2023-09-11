import { Box, Flex, Text } from "@chakra-ui/react";
import { ChatState } from "../../context/ChatProvider";
import ChatBoxNav from "./ChatBoxNav";
import ChatBoxInput from "./ChatBoxInput";
import MessageBox from "./MessageBox";
import { ChatIcon } from "@chakra-ui/icons";

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
          {selectedChat ? (
            <>
              <ChatBoxNav />
              <MessageBox />
              <ChatBoxInput />
            </>
          ) : (
            <Flex
              alignItems="center"
              flexDir="column"
              justifyContent="center"
              h="100%"
            >
              <ChatIcon fontSize="9xl" />
              <Text fontSize="2xl" mt={5}>
                Click On User Or Search Users To Start Chat
              </Text>
            </Flex>
          )}
        </Box>
      </Box>
    </>
  );
};

export default ChatBox;
