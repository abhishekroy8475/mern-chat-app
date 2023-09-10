import { BellIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import ProfileModal from "../modals/ProfileModal";
import { useNavigate } from "react-router-dom";

const UserMenu = ({ user }) => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    navigate("/");
  };

  return (
    <>
      <IconButton
        isRound={true}
        variant="solid"
        aria-label="Done"
        fontSize={{ base: "18px", md: "20px" }}
        icon={<BellIcon />}
        mr={3}
      />

      <Menu>
        <MenuButton
          as={Button}
          leftIcon={<HamburgerIcon />}
          fontSize={{ base: "18px", md: "20px" }}
          variant="outline"
          rounded="full"
          p={1}
        >
          <Avatar size="sm" name={user.name} src={user.photo} />
        </MenuButton>
        <MenuList>
          <MenuItem fontWeight="semibold">
            <ProfileModal user={user}>My Profile</ProfileModal>
          </MenuItem>
          <MenuDivider />
          <MenuItem onClick={logoutHandler}>Log Out</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default UserMenu;
