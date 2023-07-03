import React, { useRef, useState } from "react";
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
const PostModal = ({ isOpen, onClose, userId, techId, postId }) => {
  const [editMode, setEditMode] = useState(false);

  const editorKey = process.env.NEXTEDITOR_TINY;
  const editorRef = useRef(null);
  const { createMutation } = useCreatePost();
  const { editMutation } = useEditPost();
  const [techquestion, setTechQuestion] = useState();
  const [techUrl, setTechUrl] = useState();
  const { data } = usePostById(postId);
  console.log("prot data", data);

  const submitQuestionHandler = (e) => {
    e.preventDefault();

    if (editMode) {
      let formData = {
        userId: userId,
        techId: techId,
        question: techquestion,
        example: techUrl,
        answer: editorRef.current.getContent(),
      };
      createMutation.mutate(formData);
    } else {
      console.log("object", postId);
      let formData = {
        question: techquestion,
        example: techUrl,
        answer: editorRef.current.getContent(),
      };
      editMutation.mutate(postId, formData);
    }

    onClose();
  };

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
            Add Your question and Answer
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
                  >
                    Add your question.
                  </FormLabel>
                  <Input
                    type="text"
                    // value={editMode ? "" : techquestion}
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
                  >
                    Example Url ( Ex : CodeSandbox, jsFiddle, StackBlitz, etc.,)
                  </FormLabel>
                  <Input
                    type="text"
                    // value={techUrl}
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

                  <Editor
                    apiKey={editorKey}
                    // onChange={(e) => setTechAnswer(e.target.value)}
                    onInit={(event, editor) => (editorRef.current = editor)}
                    init={{
                      skin: "oxide-dark",
                      content_css: "dark",
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
                  />
                  {/* <Textarea
                size="sm"
                h={10}
                variant="outline"
                colorScheme="red"
                onChange={(e) => setTechAnswer(e.target.value)}
              /> */}
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
