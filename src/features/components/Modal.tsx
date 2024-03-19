import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React from "react";

const CreateModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Button onClick={onOpen}>新しいTodoを追加</Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>新しいTodoを追加</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>タイトル</FormLabel>
              <Input ref={initialRef} placeholder="タイトルを記入" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>内容</FormLabel>
              <Input placeholder="内容を記入" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>期日</FormLabel>
              <Input placeholder="期日を記入" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>メモ</FormLabel>
              <Input placeholder="未入力" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              追加
            </Button>
            <Button onClick={onClose}>キャンセル</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateModal;
