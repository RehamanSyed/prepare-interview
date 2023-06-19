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
  Text,
  Spinner,
  Button,
  Image,
  Flex,
} from "@chakra-ui/react";
import { Fetcher } from "client";
import { useQuery } from "@tanstack/react-query";
const content = [
  {
    question: "1. What is JavaScript ?",
    description:
      "React is a open source javaScript library for building single  page user interfaces. It allows us to create reusable UI    components. Under the hood, react use a Virtual Dom, which will   efficiently update and render when every data changes",
    example: "",
  },
  {
    question: "2. what is virtural Dom?",
    description: `<p> It's a <strong>lightweight</strong> representation of the actual DOM, which is a tree-like structure that represents the HTML content of a web page.</p>
    <p>When a change occurs, React calculates the difference between the old Virtual DOM and the new Virtual DOM, and updates only the parts that have changed. This is known as "reconciliation" and it can save a lot of time and resources compared to updating the actual DOM every time a change occurs. </p>
     <p>In summary, the Virtual DOM is a key feature of React that helps make it a fast and efficient library for building web applications.</p>
    
`,
    example: "",
  },
];
const Javascript = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["techData"],
    queryFn: async () =>
      await Fetcher.get("/allReactPost").then((res) => res.data),
  });

  console.log("List data", data);
  if (isLoading) return <Spinner />;

  if (error) return "An error has occurred: " + error.message;
  return (
    <Box mt={-28} bg={"white"} p={10} rounded={"xl"} shadow={"2xl"}>
      <Accordion allowMultiple>
        {data &&
          data.map((item, idx) => {
            return (
              <AccordionItem border="none" key={idx} mb={2}>
                <AccordionButton
                  bg={"gray.100"}
                  rounded="2xl"
                  _expanded={{ bg: "teal.500", color: "white", rounded: "2xl" }}
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
                    dangerouslySetInnerHTML={{ __html: item.answer }}
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
                        backgroundColor: "red.600",
                        padding: "0.1rem",
                        borderRadius: "0.2rem",
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
                      fontWeight={"light"}
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
              <Heading fontWeight={"light"} fontSize={20}>
                No Data available
              </Heading>
            </Flex>
          </Container>
        )}
      </Accordion>
    </Box>
  );
};

export default Javascript;
