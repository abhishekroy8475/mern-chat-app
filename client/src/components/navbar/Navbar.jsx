import { Flex, Spacer, Text } from "@chakra-ui/react";
import Search from "./Search";
import UserMenu from "./UserMenu";

const Navbar = ({ user }) => {
  return (
    <>
      <Flex
        alignItems="center"
        bg="white"
        p={{ base: 2, lg: 3 }}
        boxShadow="md"
      >
        <Search user={user} />
        <Spacer />
        <Text
          fontSize="3xl"
          fontWeight="semibold"
          display={{ base: "none", md: "block" }}
        >
          Chatify
        </Text>
        <Spacer />
        <UserMenu user={user} />
      </Flex>
    </>
  );
};

export default Navbar;
