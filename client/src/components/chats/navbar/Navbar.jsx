import { Flex, Spacer } from "@chakra-ui/react";
import Search from "./Search";
import Logo from "./Logo";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <>
      <Flex alignItems='center' bg="whiteAlpha.800" p={3} borderWidth="5px" borderColor="gray.300">
        <Search />
        <Spacer />
        <Logo />
        <Spacer />
        <UserMenu />
      </Flex>
    </>
  );
};

export default Navbar;
