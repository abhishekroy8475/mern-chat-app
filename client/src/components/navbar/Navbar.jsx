import { Flex, HStack } from "@chakra-ui/react";
import Logo from "./Logo";
import Notification from "./Notification";
import Search from "./Search";
import UserMenu from "./UserMenu";

const Navbar = ({ user, setSelectedChat, chats, setChats }) => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      px={{ base: 3, md: "", lg: 5 }}
      py={2}
      borderBottom="1px"
    >
      <Logo />
      <HStack>
        <Notification />
        <Search
          user={user}
          setSelectedChat={setSelectedChat}
          chats={chats}
          setChats={setChats}
        />
        <UserMenu user={user} />
      </HStack>
    </Flex>
  );
};

export default Navbar;
