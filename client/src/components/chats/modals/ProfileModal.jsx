import {
  Box,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { ChatState } from "../../../context/ChatProvider";

const ProfileModal = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // My ChatState
  const { user } = ChatState();

  return (
    <>
      <Box onClick={onOpen} w="100%" h="100%">
        {children}
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{user.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image objectFit="contain" src={user.photo} alt={user.name} />
            <Text mt={3} textAlign="center" fontWeight="semibold" fontSize="xl">
              Email: {user.email}
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileModal;
