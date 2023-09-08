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

const HomePage = () => {
  return (
    <Container maxW="xl" p={1}>
      <Box
        bg="whiteAlpha.800"
        borderRadius="lg"
        borderWidth="1px"
        boxShadow="md"
        p={3}
        textAlign="center"
        m={{ base: "20px 0 20px 0", md: "40px 0 20px 0" }}
      >
        <Text fontSize="4xl" fontWeight="semibold">
          Chatify
        </Text>
      </Box>
      <Box
        borderRadius="lg"
        borderWidth="1px"
        boxShadow="md"
        p={3}
        bg="whiteAlpha.900"
      >
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