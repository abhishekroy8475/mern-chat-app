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

const ProfileModal = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return (
    <>
      <Box onClick={onOpen} w="100%" h="100%">
        {children}
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Jack Miller</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image
              objectFit="contain"
              src="https://res.cloudinary.com/abhishek-roy-cloud/image/upload/v1694167632/chatify-images/default_ugvswk.png"
              alt="Jack Miller"
            />
            <Text mt={3} textAlign="center" fontWeight="semibold" fontSize="xl">
              Email: jackmiller@chatify.com
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileModal;
