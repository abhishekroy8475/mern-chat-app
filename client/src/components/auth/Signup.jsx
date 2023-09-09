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
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  // Handle password show / hide
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  // States for input
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

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
    if (!name || !email || !password || !confirmPassword) {
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

    // Confirm Password Validation
    if (password !== confirmPassword) {
      toast({
        title: "Warning",
        description: "Passwords Do Not Match!",
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
      const data = { name, email, password };
      const url = "http://localhost:5000/api/v1/user";

      await axios
        .post(url, data, config)
        .then((response) => setResponse(response.data));

      toast({
        title: "Success",
        description: "Registration Successful!",
        status: "success",
        position: "top",
        duration: 4000,
        isClosable: true,
      });

      navigate("/chats");
      setLoading(false);
    } catch (error) {
      toast({
        title: "Warning",
        description: error.response.data.message,
        status: "warning",
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
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          variant="flushed"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
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
            placeholder="Create password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement>
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? <ViewOffIcon /> : <ViewIcon />}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Re-enter Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            variant="flushed"
            placeholder="Confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
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
        isLoading={loading}
      >
        Submit
      </Button>
    </VStack>
  );
};

export default Signup;
