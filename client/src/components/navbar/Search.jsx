import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Input,
  VStack,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import UserListItem from "../misc/UserListItem";
import SkeletonAnim from "../anim/SkeletonAnim";
import { ChatState } from "../../context/ChatProvider";

const Search = () => {
  const { user, setSelectedChat, chats, setChats } = ChatState();
  const [query, setQuery] = useState();
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const searchHandler = async () => {
    if (!query) {
      toast({
        title: "Warning",
        description: "Please Enter Something In Search",
        status: "warning",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    try {
      setLoading(true);

      const config = { headers: { Authorization: `Bearer ${user.token}` } };
      const url = `http://localhost:5000/api/v1/user?search=${query}`;

      const { data } = await axios.get(url, config);

      setResults(data);
      setLoading(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed To Load The Search Results",
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
      setLoading(false);
    }
  };

  const createChat = async (userId) => {
    try {
      setLoading(true);

      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };
      const url = "http://localhost:5000/api/v1/chat/create";

      const { data } = await axios.post(url, { userId }, config);

      if (!chats.find((c) => c._id === data._id)) setChats([data, ...chats]);
      setSelectedChat(data);
      setLoading(false);
      onClose();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed To Create Chat",
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
      setLoading(false);
    }
  };

  return (
    <Box>
      <IconButton
        aria-label="search"
        icon={<SearchIcon />}
        rounded="full"
        onClick={onOpen}
      />

      <Drawer isOpen={isOpen} onClose={onClose} size="sm">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton onClick={() => setResults([])} />
          <DrawerHeader>Search Users To Chat</DrawerHeader>
          <DrawerBody>
            <Flex>
              <Input
                rounded="full"
                placeholder="type here"
                onChange={(e) => setQuery(e.target.value)}
              />
              <IconButton
                aria-label="search"
                icon={<SearchIcon />}
                rounded="full"
                ml={2}
                onClick={searchHandler}
                isLoading={loading}
              />
            </Flex>
            <VStack align="stretch" mt={2}>
              {loading ? (
                <SkeletonAnim />
              ) : (
                results?.map((result) => {
                  return (
                    <UserListItem
                      key={result._id}
                      result={result}
                      handleFunc={() => createChat(result._id)}
                    />
                  );
                })
              )}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Search;
