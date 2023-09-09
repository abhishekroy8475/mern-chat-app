import { Search2Icon, SearchIcon } from "@chakra-ui/icons";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Input,
  useDisclosure,
} from "@chakra-ui/react";

const Search = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button rightIcon={<Search2Icon />} colorScheme="blue" onClick={onOpen}>
        Search Users...
      </Button>

      <Drawer isOpen={isOpen} placement="left" size="sm" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Search Users To Chat</DrawerHeader>
          <DrawerBody>
            <Flex>
              <Input rounded="full" placeholder="Type here..." />
              <IconButton
                isRound={true}
                icon={<SearchIcon />}
                colorScheme="blue"
                ml={2}
              />
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Search;
