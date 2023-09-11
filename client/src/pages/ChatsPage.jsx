import { Box } from "@chakra-ui/react";
import Navbar from "../components/navbar/Navbar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MyChats from "../components/mychats/MyChats";
import ChatBox from "../components/chatbox/ChatBox";

const ChatsPage = () => {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const [selectedChat, setSelectedChat] = useState(false);
  const [chats, setChats] = useState();
  const [fetchAgain, setFetchAgain] = useState(false);

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
          <Navbar
            setSelectedChat={setSelectedChat}
            chats={chats}
            setChats={setChats}
            user={user}
          />
          <Box display="flex" justifyContent="space-between" h="91%">
            <MyChats
              selectedChat={selectedChat}
              setSelectedChat={setSelectedChat}
              chats={chats}
              setChats={setChats}
              user={user}
              fetchAgain={fetchAgain}
            />
            <ChatBox selectedChat={selectedChat} />
          </Box>
        </>
      )}
    </>
  );
};

export default ChatsPage;
