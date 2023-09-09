import { BellIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Avatar, Button, IconButton, Menu, MenuButton, MenuDivider, MenuItem, MenuList } from "@chakra-ui/react";

const UserMenu = () => {
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
        >
          <Avatar
            size="sm"
            name="Jack Miller"
            src="https://res.cloudinary.com/dmjp05125/image/upload/v1694167632/chatify-images/default_ugvswk.png"
          />
        </MenuButton>
        <MenuList>
            <MenuItem fontWeight="semibold">Profile</MenuItem>
            <MenuDivider />
            <MenuItem>Log Out</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default UserMenu;
