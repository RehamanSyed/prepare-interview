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
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
const content = [
  {
    question: "4. what is Higer Order Component and Uses?",
    description: ` A higher-order component (HOC) is an advanced technique in React for reusing component logic. It is a function that takes a component and returns a new component
    The main use of higher-order components is to share common functionality or behavior between different components.     `,
    example: "https://codesandbox.io/s/throbbing-frog-fypnl1",
  },
];
const Reactjs = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["techData"],
    queryFn: () =>
      fetch("http://localhost:5000/api/v1/allReactPost").then((res) =>
        res.json()
      ),
  });

  console.log("List data", data);
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  return (
    <Accordion allowMultiple>
      {data.map((item, idx) => {
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
                fontWeight="bold"
                fontSize={18}
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
                  "& strong": {
                    color: "green.500",
                  },
                  "& code": {
                    backgroundColor: "gray.100",
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
      })}
    </Accordion>
  );
};

export default Reactjs;
