import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ChatState } from "../context/ChatProvider";

const HomePage = () => {
  const { setUser } = ChatState();
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    if (userInfo) {
      setUser(userInfo);
      navigate("/chats");
    }
  }, [navigate]);

  return (
    <Container maxW="xl" p={1}>
      <Box
        borderRadius="lg"
        borderWidth="1px"
        p={3}
        textAlign="center"
        m={{ base: "20px 0 20px 0", md: "40px 0 20px 0" }}
      >
        <Text fontSize="4xl" fontWeight="semibold">
          Chatify
        </Text>
      </Box>
      <Box borderWidth="1px" borderRadius="lg" p={3}>
        <Tabs isFitted variant="soft-rounded">
          <TabList>
            <Tab>Log In</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
