import { Box } from "@chakra-ui/react";
import Navbar from "../components/navbar/Navbar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MyChats from "../components/mychats/MyChats";
import ChatBox from "../components/chatbox/ChatBox";
import { ChatState } from "../context/ChatProvider";

const ChatsPage = () => {
  const { user, setUser } = ChatState();
  const [fetchAgain, setFetchAgain] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);

    if (!userInfo) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <>
      {user && (
        <>
          <Navbar />
          <Box display="flex" justifyContent="space-between" h="91%">
            <MyChats fetchAgain={fetchAgain} />
            <ChatBox />
          </Box>
        </>
      )}
    </>
  );
};

export default ChatsPage;
