import { Avatar, Box, Flex, Text, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ChatState } from "../../context/ChatProvider";
import axios from "axios";
import ScrollableFeed from "react-scrollable-feed";

const MessageBox = () => {
  const { selectedChat, user, messages, setMessages } = ChatState();
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const fetchMessages = async () => {
    setLoading(true);

    if (!selectedChat) return;

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const url = `http://localhost:5000/api/v1/message/${selectedChat._id}`;

      const { data } = await axios.get(url, config);

      setMessages(data);
      setLoading(false);
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: error.message,
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, [selectedChat]);

  return (
    <Box
      borderRadius="lg"
      h="100%"
      display="flex"
      flexDir="column-reverse"
      p={2}
      overflow="scroll"
      bgColor="gray.200"
      m={2}
    >
      {messages?.map((message) => {
        return (
          <Flex
            flexDir={{
              base: message.sender._id === user._id ? "row-reverse" : "row",
            }}
            ml={{ base: message.sender._id === user._id ? "auto" : "" }}
            w="60%"
            p={1}
            key={message._id}
          >
            <Avatar
              size="sm"
              name={message.sender.name}
              src={message.sender.photo}
            />
            <Text
              mx={2}
              fontSize="md"
              bgColor={{
                base: message.sender._id === user._id ? "gray.500" : "blue.400",
              }}
              color="white"
              px={3}
              borderRadius="lg"
            >
              {message.content}
            </Text>
          </Flex>
        );
      })}
    </Box>
  );
};

export default MessageBox;
