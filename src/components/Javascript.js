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
} from "@chakra-ui/react";
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
  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      {content.map((item, idx) => {
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
                {item.question}
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel p={5}>
              <Box
                dangerouslySetInnerHTML={{ __html: item.description }}
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
            </AccordionPanel>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default Javascript;
