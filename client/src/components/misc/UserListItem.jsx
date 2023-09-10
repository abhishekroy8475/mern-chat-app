import { Avatar, Box, Text } from "@chakra-ui/react";

const UserListItem = ({ result, handleFunc }) => {
  return (
    <Box
      display="flex"
      my={{ base: 2, lg: 3 }}
      p={2}
      borderWidth="1px"
      rounded="lg"
      boxShadow="md"
      cursor="pointer"
      _hover={{
        background: "#0066cc",
        color: "white",
      }}
      onClick={handleFunc}
    >
      <Avatar bg="white" name={result.name} src={result.photo} />
      <Box ml={2}>
        <Text fontWeight="semibold">{result.name}</Text>
        <Text>{result.email}</Text>
      </Box>
    </Box>
  );
};

export default UserListItem;
