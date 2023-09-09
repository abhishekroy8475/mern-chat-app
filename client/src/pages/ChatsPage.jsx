import { Box } from "@chakra-ui/react";
import Navbar from "../components/chats/navbar/Navbar";

const ChatsPage = () => {
  return (
    <>
      <Navbar />
      <Box>
        <Box>My Chats</Box>
        <Box>ChatBox</Box>
      </Box>
    </>
  );
};

export default ChatsPage;
