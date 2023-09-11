import { BellIcon } from "@chakra-ui/icons";
import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

const Notification = () => {
  return (
    <Box>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<BellIcon />}
          rounded="full"
        />
        <MenuList>
          <MenuItem>No New Notification</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default Notification;
