import { Search2Icon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
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
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import UserListItem from "../misc/UserListItem";
import SkeletonAnim from "../anim/SkeletonAnim";

const Search = ({ user }) => {
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

      const response = await axios.get(url, config);

      setResults(response.data);
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

  return (
    <>
      <Button
        rightIcon={<Search2Icon />}
        size={{ base: "sm", md: "md" }}
        colorScheme="blue"
        onClick={onOpen}
      >
        Search Users...
      </Button>

      <Drawer isOpen={isOpen} placement="left" size="sm" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton onClick={() => setResults([])} />
          <DrawerHeader>Search Users To Chat</DrawerHeader>
          <DrawerBody>
            <Flex>
              <Input
                rounded="full"
                placeholder="Type here..."
                onChange={(e) => setQuery(e.target.value)}
              />
              <IconButton
                isRound={true}
                icon={<SearchIcon />}
                colorScheme="blue"
                ml={2}
                onClick={searchHandler}
                isLoading={loading}
              />
            </Flex>
            <Box>
              {loading ? (
                <SkeletonAnim />
              ) : (
                results?.map((result) => {
                  return <UserListItem key={result._id} result={result} />;
                })
              )}
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Search;
