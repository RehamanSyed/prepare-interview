import MainLayout from "@/layouts/main.layout";
import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Mocktest = () => {
  return (
    <Box bg={"white"} minH={"100vh"}>
      <Box w={"100%"} bg={"gray.100"}>
        <Container maxW={"container.sm"}>
          <Flex
            minHeight={{ base: "60vh", lg: "50vh" }}
            flexDir={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={5}
          >
            <Heading>Mock Test is Under Development</Heading>
            <Text textAlign={"center"}>
              I am looking to provide this service as soon as possible, Hold
              your breath for sometime. Good days are coming. :)
            </Text>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Mocktest;

Mocktest.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
