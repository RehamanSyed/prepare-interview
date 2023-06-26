import React from "react";
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
} from "@chakra-ui/react";

import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const Post = ({
  data,
  isLoading,
  error,
  addQuestionHandler,
  editPostHandler,
  deletePostHandler,
}) => {
  // console.log("data in Post Component ==>: ", techId);

  const route = useRouter();
  const { data: session } = useSession();
  const { onOpen, } = useDisclosure();
  const addHandler = () => {
    addQuestionHandler();
  };
  const editHandler = (id) => {
    editPostHandler(id);
  };
  const deleteHandler = (id) => {
    deletePostHandler(id);
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

                    <Flex justifyContent={"space-between"} mt={5}>
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
                          href={item.example}
                        >
                          See the Example
                        </Button>
                      )}

                      <Flex gap={10}>
                        <Button
                          as="a"
                          target="_blank"
                          variant={"link"}
                          fontWeight={"medium"}
                          colorScheme={"blue"}
                          fontSize={14}
                          onClick={() => editHandler(item._id)}
                        >
                          Edit
                        </Button>
                        <Button
                          as="a"
                          target="_blank"
                          variant={"link"}
                          fontWeight={"medium"}
                          colorScheme={"blue"}
                          fontSize={14}
                          onClick={() => deleteHandler(item._id)}
                        >
                          Delete
                        </Button>
                      </Flex>
                    </Flex>
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
          onClick={addHandler}
        >
          ADD NEW QUESTION
        </Button>
      </Box>
    </>
  );
};

export default Post;
