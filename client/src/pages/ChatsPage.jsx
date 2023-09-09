import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ChatsPage = () => {
  const navigate = useNavigate();
  const handler = () => {
    localStorage.removeItem("userInfo");
    navigate("/");
  };
  return <Button onClick={handler}>Sign Out</Button>;
};

export default ChatsPage;
