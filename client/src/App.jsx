import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChatsPage from "./pages/ChatsPage";
import { Box } from "@chakra-ui/react";

const App = () => {
  return (
    <Box w="100%" h="100vh" bgColor="blackAlpha.200">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chats" element={<ChatsPage />} />
      </Routes>
    </Box>
  );
};

export default App;
