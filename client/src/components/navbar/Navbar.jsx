import { Flex, HStack } from "@chakra-ui/react";
import Logo from "./Logo";
import Notification from "./Notification";
import Search from "./Search";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      px={{ base: 3, md: "", lg: 5 }}
      py={2}
      borderWidth="1px"
    >
      <Logo />
      <HStack>
        <Notification />
        <Search />
        <UserMenu />
      </HStack>
    </Flex>
  );
};

export default Navbar;
