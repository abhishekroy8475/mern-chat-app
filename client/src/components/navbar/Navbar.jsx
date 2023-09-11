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
      borderBottom="1px"
      borderBottomColor="gray.200"
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
