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
import { ChatState } from "../../../context/ChatProvider";

const UserMenu = () => {
  const navigate = useNavigate();

  // My Chat State
  const { user } = ChatState();

  // Logout Handler
  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    navigate("/");
  };
  return (
    <>
      {/* Need to convert to menu when adding notification feature */}
      <IconButton
        isRound={true}
        variant="solid"
        aria-label="Done"
        fontSize="20px"
        icon={<BellIcon />}
        mr={4}
      />

      <Menu>
        <MenuButton
          as={Button}
          leftIcon={<HamburgerIcon />}
          fontSize="20px"
          variant="outline"
          rounded="full"
          p={1}
        >
          <Avatar size="sm" name={user.name} src={user.photo} />
        </MenuButton>
        <MenuList>
          <MenuItem fontWeight="semibold">
            <ProfileModal>Profile</ProfileModal>
          </MenuItem>
          <MenuDivider />
          <MenuItem onClick={logoutHandler}>Log Out</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default UserMenu;
