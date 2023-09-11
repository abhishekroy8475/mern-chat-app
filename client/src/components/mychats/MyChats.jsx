import { Avatar, Box, Stack, Text, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import SkeletonAnim from "../anim/SkeletonAnim";
import { ChatState } from "../../context/ChatProvider";

const MyChats = ({ fetchAgain }) => {
  const { selectedChat, setSelectedChat, chats, setChats, user } = ChatState();
  const [loading, setLoading] = useState();
  const toast = useToast();

  const fetchChats = async () => {
    try {
      setLoading(true);

      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };
      const url = "http://localhost:5000/api/v1/chat/fetch";

      const { data } = await axios.get(url, config);

      setChats(data);
      setLoading(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed To Fetch Chats",
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchChats();
  }, [fetchAgain]);

  return (
    <Box
      display={{ base: selectedChat ? "none" : "flex", lg: "flex" }}
      w={{ base: "100%", lg: "30%" }}
      px={{ base: 3, md: "", lg: 5 }}
      py={2}
      flexDir="column"
      borderRight={{ base: "none", lg: "1px" }}
    >
      <Box w="100%" h="100%" overflowY="hidden">
        {!loading ? (
          <>
            {chats ? (
              <Stack h="inherit" w="inherit" overflowY="auto">
                {chats?.map((chat) => {
                  return (
                    <Box
                      key={chat._id}
                      display="flex"
                      borderWidth="1px"
                      rounded="lg"
                      cursor="pointer"
                      p={2}
                      bgColor={selectedChat?._id === chat?._id ? "blue.400" : ""}
                      color={selectedChat?._id === chat?._id ? "white" : ""}
                      onClick={() => setSelectedChat(chat)}
                    >
                      <Avatar name={user.name} src={user.photo} />
                      <Box ml={2}>
                        <Text fontWeight="semibold">
                          {user?._id === chat.users[0]?._id
                            ? chat.users[1].name
                            : chats.users[0].name}
                        </Text>
                        <Text>Latest Message</Text>
                      </Box>
                    </Box>
                  );
                })}
              </Stack>
            ) : (
              <></>
            )}
          </>
        ) : (
          <SkeletonAnim />
        )}
      </Box>
    </Box>
  );
};

export default MyChats;
