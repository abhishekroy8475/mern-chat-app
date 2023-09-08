import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";

const Login = () => {
  // Handle password show / hide
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <VStack spacing={{ base: 4, md: 6 }}>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input type="email" variant="flushed" placeholder="Enter your email" />
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            variant="flushed"
            placeholder="Enter your password"
          />
          <InputRightElement>
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? <ViewOffIcon /> : <ViewIcon />}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button w="100%" variant="outline" colorScheme="blue">
        Submit
      </Button>
    </VStack>
  );
};

export default Login;
