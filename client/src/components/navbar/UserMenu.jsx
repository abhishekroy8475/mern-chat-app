import {
  AddIcon,
  ChevronDownIcon,
  InfoIcon,
  WarningIcon,
} from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import ProfileModal from "../modals/ProfileModal";
import { useNavigate } from "react-router-dom";
import { ChatState } from "../../context/ChatProvider";

const UserMenu = () => {
  const { user } = ChatState();
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    navigate("/");
  };

  return (
    <Box>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          rounded="lg"
          p={2}
        >
          <Avatar size="sm" name={user.name} src={user.photo} />
        </MenuButton>
        <MenuList>
          <ProfileModal user={user}>
            <MenuItem icon={<InfoIcon />}>My Profile</MenuItem>
          </ProfileModal>
          <MenuItem icon={<AddIcon />}>New Group</MenuItem>
          <MenuItem icon={<WarningIcon />} onClick={logoutHandler}>
            Log Out
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default UserMenu;
