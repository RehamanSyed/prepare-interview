import React from "react";
import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import MainLayout from "@/layouts/main.layout";
import { useSession } from "next-auth/react";

const Userprofile = () => {
  const { data: session } = useSession();
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
            <Heading>{session.user.name}</Heading>
            <Text textAlign={"center"}>{session.user.email}</Text>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Userprofile;
Userprofile.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
