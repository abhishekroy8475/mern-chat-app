import { Avatar, Box, Text } from "@chakra-ui/react";

const UserListItem = ({ result, handleFunc }) => {
  return (
    <Box
      display="flex"
      borderWidth="1px"
      rounded="lg"
      cursor="pointer"
      p={2}
      onClick={handleFunc}
      _hover={{
        backgroundColor: "lightgrey"
      }}
    >
      <Avatar name={result.name} src={result.photo} />
      <Box ml={2}>
        <Text fontWeight="semibold">{result.name}</Text>
        <Text>{result.email}</Text>
      </Box>
    </Box>
  );
};

export default UserListItem;
