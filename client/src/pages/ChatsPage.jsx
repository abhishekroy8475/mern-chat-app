import { Box, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/chats/navbar/Navbar";

const ChatsPage = () => {
  const navigate = useNavigate();
  const handler = () => {
    localStorage.removeItem("userInfo");
    navigate("/");
  };
  return (
    <>
      <Navbar />
      <Box>
        <Box>My Chats</Box>
        <Box>ChatBox</Box>
      </Box>
      <Button onClick={handler}>Sign Out</Button>
    </>
  );
};

export default ChatsPage;
