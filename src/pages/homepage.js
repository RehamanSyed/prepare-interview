import MainLayout from "@/layouts/main.layout";
import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { Fetcher } from "client";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Homepage = () => {
  const route = useRouter();
  const { isLoading, error, data } = useQuery({
    queryKey: ["techData"],
    queryFn: async () =>
      await Fetcher.get("alltech")
        .then((res) => res.data)
        .catch((error) => console.log(error)),
  });
  const { data: session } = useSession();
  // console.log("session data", session);
  if (session === null) {
    route.push("/auth/signin");
  }
  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;
  return (
    <>
      <Head>
        <title>prep-interview</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box bg={"white"} minH={"100vh"}>
        <Box w={"100%"} bg={"gray.100"}>
          <Container maxW={"container.sm"}>
            <Flex
              minHeight={"50vh"}
              flexDir={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={5}
            >
              <Heading>Interview Warmup</Heading>
              <Text textAlign={"center"}>
                A quick way to prepare for your next interview. Practice key
                questions, get insights about your answers, and get more
                comfortable interviewing.
              </Text>
            </Flex>
          </Container>
        </Box>
        <Container maxW={"container.lg"} mt={-32}>
          <Grid templateColumns="repeat(1, 1fr)" gap={3} mt={5} p={5}>
            <GridItem
              colSpan={4}
              bg={"blue.600"}
              textAlign={"center"}
              rounded="lg"
            >
              <Flex
                flexDir={"column"}
                justifyContent={"center"}
                color={"white"}
                minH={"50vh"}
              >
                <Heading
                  textTransform={"uppercase"}
                  fontWeight="bold"
                  size={"md"}
                >
                 Home Page Comming soon
                </Heading>
              </Flex>
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Homepage;

Homepage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
