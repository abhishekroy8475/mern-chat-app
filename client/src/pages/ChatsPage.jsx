import { Box } from "@chakra-ui/react";
import Navbar from "../components/navbar/Navbar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ChatsPage = () => {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);

    if (!userInfo) {
      navigate("/");
    }
  },[navigate]);

  return (
    <>
      {user && (
        <>
          <Navbar user={user} />
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
