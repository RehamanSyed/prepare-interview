import React from "react";
import { Box, Container, Heading, Button, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const PageContent = ({ tech, colorSchemeTech }) => {
  const { data: session } = useSession();
  const route = useRouter();
  console.log("route", route);

  return (
    <>
      <Box
        w={"100%"}
        bgGradient={"linear(to-r, blue.300, teal.500, blue.300)"}
        color={"white"}
      >
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
            <Flex gap={2}>
              {route.route === "/" ? (
                ""
              ) : (
                <Button
                  onClick={() => {
                    route.back();
                  }}
                  colorScheme="whiteAlpha"
                  fontSize={14}
                  fontWeight={"bold"}
                  variant={"solid"}
                >
                  Go Back
                </Button>
              )}
            </Flex>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default PageContent;
