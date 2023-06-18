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
} from "@chakra-ui/react";

import { useQuery } from "@tanstack/react-query";
import { Fetcher } from "client";

const Reactjs = () => {
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

export default Reactjs;
