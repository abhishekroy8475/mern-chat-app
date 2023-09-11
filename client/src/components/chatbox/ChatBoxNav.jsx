import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Avatar, Box, Button, Flex, Spacer } from "@chakra-ui/react";
import { ChatState } from "../../context/ChatProvider";
import ProfileModal from "../modals/ProfileModal";

const ChatBoxNav = () => {
  const { selectedChat, setSelectedChat, user } = ChatState();

  return (
    <Flex
      alignItems="center"
      borderBottom="1px"
      borderBottomColor="gray.200"
      px={2}
      py={{ lg: 2 }}
    >
      <Button
        leftIcon={<ChevronLeftIcon fontSize="30px" />}
        p={0}
        bgColor="unset"
        display={{ base: selectedChat ? "flex" : "none", lg: "none" }}
        onClick={() => setSelectedChat()}
      ></Button>
      <Spacer />
      <Box>
        <ProfileModal
          user={
            user?._id === selectedChat.users[0]?._id
              ? selectedChat.users[1]
              : selectedChat.users[0]
          }
        >
          <Avatar
            name={
              user?._id === selectedChat.users[0]?._id
                ? selectedChat.users[1].name
                : selectedChat.users[0].name
            }
            src={
              user?._id === selectedChat.users[0]?._id
                ? selectedChat.users[1].photo
                : selectedChat.users[0].photo
            }
            size="sm"
          />
        </ProfileModal>
      </Box>
    </Flex>
  );
};

export default ChatBoxNav;
