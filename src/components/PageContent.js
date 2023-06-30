import React from "react";
import { Box, Container, Heading, Button, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
const PageContent = ({tech}) => {
    const route = useRouter();
  return (
    <>
      <Box w={"100%"} bg={"gray.100"}>
        <Container maxW={"container.sm"}>
          <Flex
            h={"450px"}
            flexDir={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={5}
          >
            <Heading>{tech} WarmUp</Heading>
            <Text textAlign={"center"}>
              A quick way to prepare for your next interview. Practice key
              questions, get insights about your answers, and get more
              comfortable interviewing.
            </Text>
            <Button
              onClick={() => route.back()}
              colorScheme="red"
              fontSize={14}
              color="black"
              fontWeight={"bold"}
              variant={"outline"}
            >
              Go Back
            </Button>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default PageContent;
