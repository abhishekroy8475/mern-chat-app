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

const UserMenu = () => {
  const navigate = useNavigate();

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
          <Avatar
            size="sm"
            name="Jack Miller"
            src="https://res.cloudinary.com/abhishek-roy-cloud/image/upload/v1694167632/chatify-images/default_ugvswk.png"
          />
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
