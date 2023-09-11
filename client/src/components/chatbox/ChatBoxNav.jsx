import { ChevronLeftIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Button,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { ChatState } from "../../context/ChatProvider";

const ChatBoxNav = () => {
  const { selectedChat, setSelectedChat } = ChatState();

  return (
    <Flex
      alignItems="center"
      borderBottom="1px"
      borderBottomColor="gray.200"
      px={2}
      py={{lg: 2}}
    >
      <Button
        leftIcon={<ChevronLeftIcon fontSize="30px" />}
        p={0}
        bgColor="unset"
        display={{ base: selectedChat ? "flex" : "none", lg: "none" }}
        onClick={() => setSelectedChat()}
      ></Button>
      <Spacer />
      <Avatar name="AR" size="sm" src="" />
    </Flex>
  );
};

export default ChatBoxNav;
