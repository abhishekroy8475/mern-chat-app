import { Box } from "@chakra-ui/react";
import Navbar from "../components/chats/navbar/Navbar";
import { ChatState } from "../context/ChatProvider";

const ChatsPage = () => {
  const { user } = ChatState();

  return (
    <>
      {user && (
        <>
          <Navbar />
          <Box>
            <Box>My Chats</Box>
            <Box>ChatBox</Box>
          </Box>
        </>
      )}
    </>
  );
};

export default ChatsPage;
