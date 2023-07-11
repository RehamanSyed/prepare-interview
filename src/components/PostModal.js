import React, { useEffect, useRef, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  FormControl,
  FormHelperText,
  FormLabel,
  Button,
  Flex,
  Textarea,
} from "@chakra-ui/react";
import {
  useCreatePost,
  useEditPost,
  usePostById,
} from "@/modules/technology/hooks/usePost";
import { Editor } from "@tinymce/tinymce-react";
import { Controller, useForm } from "react-hook-form";
const PostModal = ({ isOpen, onClose, userId, techId, postId, editMode }) => {
  const { createMutation } = useCreatePost();
  const { editMutation } = useEditPost();
  const { data: postIdData } = usePostById(postId);

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (!editMode) {
      console.log("i at create post");
      let formData = {
        userId: userId,
        techId: techId,
        question: data.question,
        example: data.example,
        answer: data.answer,
      };
      createMutation.mutate(formData);
    } else {
      console.log("i at Edit post");
      let formData = {
        question: data.question,
        example: data.example,
        answer: data.answer,
      };
      console.log("Edit", formData);
      editMutation.mutate({postId, formData});
    }
    onClose();
  };

  useEffect(() => {
    console.log("id", postIdData);
  }, [postIdData]);

  return (
    <>
      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset="slideInBottom"
        size={"4xl"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontWeight={"bold"} fontSize={18}>
            {editMode ? "Edit" : "Add"} Your question and Answer{" "}
            {editMode ? "---editmode---" : "---not editmode---"}
          </ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalBody>
              <Flex flexDir={"column"} gap={5}>
                <FormControl>
                  <FormLabel fontSize={14} htmlFor="question">
                    Add your question
                  </FormLabel>
                  <Input
                    defaultValue={editMode ? postIdData?.question : ""}
                    {...register("question")}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel fontSize={14} htmlFor="example">
                    Example Url (Ex : CodeSandbox, jsFiddle, StackBlitz, etc.,)
                  </FormLabel>

                  <Input defaultValue={editMode ? postIdData?.example : ""} {...register("example")} />
                </FormControl>

                <FormControl>
                  <FormLabel fontSize={14}>Add relevent answer</FormLabel>
                  <Textarea
                    defaultValue={editMode ? postIdData?.answer : ""}
                    {...register("answer")}
                  ></Textarea>
                </FormControl>
              </Flex>
            </ModalBody>
            <ModalFooter>
              <Button
                colorScheme="blue"
                variant={"outline"}
                mr={3}
                type="submit"
              >
                Save Question
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PostModal;
