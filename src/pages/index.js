import Head from "next/head";

import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

import { getSession, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Fetcher } from "client";
import MainLayout from "@/layouts/main.layout";
export async function getServerSideProps(context) {
  const { req, res } = context;
  const session = await getSession({ req });
  // console.log("Context ---<", session);
  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
      },
    };
  }
  return {
    props: { session },
  };
}
const Home = () => {
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
              <Heading>Start WarmUp</Heading>
              <Text textAlign={"center"}>
                A quick way to prepare for your next interview. Practice key
                questions, get insights about your answers, and get more
                comfortable interviewing.
              </Text>
            </Flex>
          </Container>
        </Box>
        <Container maxW={"container.lg"} mt={-32}>
          <Grid templateColumns="repeat(4, 1fr)" gap={3} mt={5} p={5}>
            {data.map((item, idx) => {
              return (
                <GridItem
                  colSpan={1}
                  key={idx}
                  h={32}
                  bg={"gray.600"}
                 
                  textAlign={"center"}
                  rounded="lg"
                >
                  <Link
                    href={{
                      pathname: `/${item.page}`,
                      query: {
                        content: `${item.technology}`,
                        page: `${item.page}`,
                      },
                    }}
                  >
                    <Flex flexDir={'column'} justifyContent={'center'} color={"white"} minH={32} >
                      <Heading
                        textTransform={"uppercase"}
                        fontWeight="bold"
                        size={"md"}
                      >
                        {item.technology}
                      </Heading>
                    </Flex>
                  </Link>
                </GridItem>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </>
  );
};
export default Home;
Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
