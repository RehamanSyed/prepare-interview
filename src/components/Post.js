import React, { useRef, useState } from "react";
import {
  Box,
  Container,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
  Spinner,
  Image,
  Flex,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  Textarea,
  FormControl,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/react";

import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { Editor } from "@tinymce/tinymce-react";
import { useCreateQuestion } from "@/modules/technology/hooks/useReactJs";

const Post = ({ data, isLoading, error, techId, userId }) => {
  // console.log("data in Post Component ==>: ", techId);
  const editorRef = useRef(null);
  const route = useRouter();
  const { data: session } = useSession();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { createMutation } = useCreateQuestion();
  const [techquestion, setTechQuestion] = useState();
  const [techUrl, setTechUrl] = useState();

  const editorKey = process.env.NEXTEDITOR_TINY;

  const addQuestionHandler = () => {
    onOpen();
  };

  const submitQuestionHandler = (e) => {
    e.preventDefault();
    let formData = {
      userId: userId,
      techId: techId,
      question: techquestion,
      example: techUrl,
      answer: editorRef.current.getContent(),
    };
    console.log("formdata", formData);

    createMutation.mutate(formData);
  };

  if (isLoading) return <Spinner />;
  if (error) return "An error has occurred: " + error.message;
  if (session === null) return route.push("/auth/signin");

  return (
    <>
      <Box mt={-28} bg={"white"} p={10} rounded={"xl"} shadow={"2xl"}>
        <Accordion allowMultiple>
          {data &&
            data.map((item, idx) => {
              return (
                <AccordionItem border="none" key={idx} mb={2}>
                  <AccordionButton
                    bg={"gray.100"}
                    rounded="2xl"
                    _expanded={{
                      bg: "teal.500",
                      color: "white",
                      rounded: "2xl",
                    }}
                  >
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontWeight="medium"
                      fontSize={16}
                      py={2}
                      px={5}
                    >
                      {idx + 1}. {item.question}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel p={5}>
                    <Box
                      dangerouslySetInnerHTML={{
                        __html: item.answer,
                      }}
                      sx={{
                        "& div": {
                          color: "black",
                          fontSize: 14,
                        },
                        "& strong": {
                          color: "red.500",
                          fontWeight: "semibold",
                        },
                        "& p": {
                          color: "black.500",
                          fontSize: 14,
                        },
                        "& code": {
                          backgroundColor: "red.100",
                          padding: "1px 5px",
                          borderRadius: "0.2rem",
                          color: "red",
                        },
                      }}
                    ></Box>
                    {item.example === null ? (
                      ""
                    ) : (
                      <Button
                        as="a"
                        target="_blank"
                        variant={"link"}
                        fontWeight={"medium"}
                        colorScheme={"blue"}
                        fontSize={14}
                        mt={5}
                        href={item.example}
                      >
                        See the Example
                      </Button>
                    )}
                  </AccordionPanel>
                </AccordionItem>
              );
            })}
          {data && data.length == 0 && (
            <Container
              centerContent
              bg={"gray.50"}
              maxW={"container"}
              rounded={"3xl"}
              onClick={onOpen}
              cursor={"pointer"}
            >
              <Flex
                minH={"50vh"}
                flexDir={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={5}
              >
                <Image
                  src="./empty.png"
                  width="100"
                  height="100"
                  filter="grayscale(50%)"
                  alt="no-image"
                />
                <Heading fontWeight={"medium"} fontSize={20}>
                  List your first Question and Answer
                </Heading>
              </Flex>
            </Container>
          )}
        </Accordion>

        <Button
          w={"100%"}
          variant={"solid"}
          colorScheme={"linkedin"}
          rounded={"2xl"}
          p={5}
          h={14}
          type="button"
          onClick={addQuestionHandler}
        >
          ADD NEW QUESTION
        </Button>
      </Box>
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
                    type="Text"
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
                      height: 300,
                      menubar: true,
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

export default Post;
