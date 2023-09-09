import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  // Handle password show / hide
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  // States for input
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // State for response
  const [response, setResponse] = useState();

  // Use Toast
  const toast = useToast();

  // Loading State
  const [loading, setLoading] = useState(false);

  // use Navigate
  const navigate = useNavigate();

  // Submit Handler
  const submitHandler = async () => {
    setLoading(true);

    // Empyt Field Validation
    if (!email || !password) {
      toast({
        title: "Warning",
        description: "Please Fill All Fields!",
        status: "warning",
        position: "top",
        duration: 4000,
        isClosable: true,
      });
      setLoading(false);
      return;
    }

    try {
      const config = { headers: { "Content-type": "application/json" } };
      const data = { email, password };
      const url = "http://localhost:5000/api/v1/user/login";

      await axios
        .post(url, data, config)
        .then((response) => setResponse(response.data));

      toast({
        title: "Success",
        description: "Login Successful!",
        status: "success",
        position: "top",
        duration: 4000,
        isClosable: true,
      });

      navigate("/chats");
      setLoading(false);
    } catch (error) {
      toast({
        title: "Error",
        description: error.response.data.message,
        status: "error",
        position: "top",
        duration: 4000,
        isClosable: true,
      });
      setLoading(false);
    }
  };

  return (
    <VStack spacing={{ base: 4, md: 6 }}>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          variant="flushed"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            variant="flushed"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement>
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? <ViewOffIcon /> : <ViewIcon />}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button
        w="100%"
        variant="outline"
        colorScheme="blue"
        onClick={submitHandler}
      >
        Submit
      </Button>
    </VStack>
  );
};

export default Login;
