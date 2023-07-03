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
} from "@chakra-ui/react";
import {
  useCreatePost,
  useEditPost,
  usePostById,
} from "@/modules/technology/hooks/usePost";
import { Editor } from "@tinymce/tinymce-react";
const PostModal = ({ isOpen, onClose, userId, techId, postId, editMode }) => {
  

  const { createMutation } = useCreatePost();
  const { editMutation } = useEditPost();
  const [techquestion, setTechQuestion] = useState();
  const [techUrl, setTechUrl] = useState();
  const [techAns, setTechAns] = useState("");
  const { data: postIdData } = usePostById(postId);
  const submitQuestionHandler = (e) => {
    e.preventDefault();
    if (!editMode) {
      console.log("i at create post")
      let formData = {
        userId: userId,
        techId: techId,
        question: techquestion,
        example: techUrl,
        answer: techAns,
      };
      createMutation.mutate(formData);
    } else {
      console.log("i at Edit post")
      let formData = {
        question: techquestion,
        example: techUrl,
        answer: techAns,
      };
      console.log("Edit",formData)
      editMutation.mutate(postId, formData);
    }
    onClose();
  };

  useEffect(() => {
    console.log("id",postIdData);
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
          <ModalHeader fontWeight={"bold"} fontSize={14}>
            {editMode ? "Edit" : "Add"} Your question and Answer
          </ModalHeader>
          <ModalCloseButton
            border={"1px solid blue"}
            rounded={"full"}
            size={"sm"}
            color={"blue"}
            top={4}
            right={4}
          />
          <form onSubmit={submitQuestionHandler}>
            <ModalBody>
              <Flex flexDir={"column"} gap={5}>
                <FormControl>
                  <FormLabel
                    fontWeight={"regular"}
                    color={"gray.600"}
                    fontSize={14}
                    htmlFor="question"
                  >
                    Add your question.
                  </FormLabel>
                  <Input
                    type="text"
                    name="question"
                    value={editMode ? postIdData?.question : techquestion}
                    onChange={(e) => setTechQuestion(e.target.value)}
                  />
                  <FormHelperText
                    fontSize={10}
                    color={"red.900"}
                    display={"none"}
                  >
                    We will never share your email.
                  </FormHelperText>
                </FormControl>
                <FormControl>
                  <FormLabel
                    fontWeight={"regular"}
                    color={"gray.600"}
                    fontSize={14}
                    htmlFor="example"
                  >
                    Example Url ( Ex : CodeSandbox, jsFiddle, StackBlitz, etc.,)
                  </FormLabel>
                  <Input
                    type="text"
                    name="example"
                    value={editMode ? postIdData?.example : techUrl}
                    onChange={(e) => setTechUrl(e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel
                    fontWeight={"regular"}
                    color={"gray.600"}
                    fontSize={14}
                  >
                    Add relevent answer
                  </FormLabel>

                
                
                </FormControl>
              </Flex>
              <Editor
                    apiKey='9e6zrt6tjm44ammn80f49rlcqhidyil1q1azncfys7a3f6z1'
                    onChange={(e) => setTechAns(e.target.getContent())}
                    // onInit={(event, editor) => (editorRef.current = editor)}
                    init={{
                      
                      height: 400,
                      menubar: false,
                      plugins: [
                        "advlist",
                        "autolink",
                        "lists",
                        "link",
                        "image",
                        "charmap",
                        "anchor",
                        "searchreplace",
                        "visualblocks",
                        "code",
                        "insertdatetime",
                        "media",
                        "table",
                        "preview",
                        "help",
                        "wordcount",
                      ],
                      toolbar:
                        "undo redo | blocks | " +
                        "bold italic forecolor | alignleft aligncenter " +
                        "alignright alignjustify | bullist numlist outdent indent | " +
                        "removeformat | help",
                      content_style:
                        "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                    }}
                    initialValue={editMode ? postIdData?.answer : techAns}
                  />
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
