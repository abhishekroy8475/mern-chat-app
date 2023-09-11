import { ChevronRightIcon } from "@chakra-ui/icons";
import { Flex, IconButton, Input } from "@chakra-ui/react";

const ChatBoxInput = () => {
  return (
    <Flex p={2} borderTop="1px" borderTopColor="gray.200">
      <Input rounded="full" placeholder="type here" />
      <IconButton
        aria-label="send message"
        icon={<ChevronRightIcon fontSize="20px" />}
        rounded="full"
        ml={2}
        colorScheme="blue"
      />
    </Flex>
  );
};

export default ChatBoxInput;
