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
  Button,
  Spinner,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

const Reactjs = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["techData"],
    queryFn: () =>
      fetch("http://localhost:5000/api/v1/allReactPost").then((res) =>
        res.json()
      ),
  });

  console.log("List data", data);
  if (isLoading) return <Spinner />;

  if (error) return "An error has occurred: " + error.message;

  return (
    <Accordion allowMultiple>
      {isLoading && !data ? (
        <Spinner />
      ) : (
        data.map((item, idx) => {
          return (
            <AccordionItem border="none" key={idx}>
              <AccordionButton
                _hover={{
                  background: "gray.100",
                  borderRadius: "full",
                }}
                _expanded={{ bg: "gray.300", color: "black", rounded: "full" }}
              >
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontWeight="semibold"
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
                  <Button as="a" target="_blank" mt={5} href={item.example}>
                    See the Example
                  </Button>
                )}
              </AccordionPanel>
            </AccordionItem>
          );
        })
      )}
    </Accordion>
  );
};

export default Reactjs;
