import Css from "@/components/Css";
import Html from "@/components/Html";
import Javascript from "@/components/Javascript";
import Reactjs from "@/components/Reactjs";
import {
  Box,
  Container,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Technology = () => {
  const route = useRouter();
  const { content } = route.query;

  return (
    <Box>
      <Container maxW={"container.lg"}>
        <Heading my={10}>{content}</Heading>

        {content === "CSS" ? (
          <Css />
        ) : content === "React" ? (
          <Reactjs />
        ) : content === "Javascript" ? (
          <Javascript />
        ) : content === "Html" ? (
          <Html />
        ) : (
          "testing"
        )}
      </Container>
    </Box>
  );
};

export default Technology;
