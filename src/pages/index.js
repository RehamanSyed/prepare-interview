import Head from "next/head";

import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  Textarea,
  FormControl,
  FormHelperText,
  FormLabel,
  Spinner,
} from "@chakra-ui/react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

import { getSession, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Fetcher } from "client";
import MainLayout from "@/layouts/main.layout";
import { useCreateStack } from "@/modules/homepage/hooks/useStack";
import { useState } from "react";
import PageContent from "@/components/PageContent";
export async function getServerSideProps(context) {
  const { req, res } = context;
  const session = await getSession({ req });
  console.log("Context ---<", session);
  if (!session?.user) {
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
  const [inptValue, setInptValue] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data: session } = useSession();
  const { createMutation } = useCreateStack();
  const route = useRouter();
  const userId = session.user.id;
  const { isLoading, error, data } = useQuery({
    queryKey: ["techData"],
    queryFn: async () =>
      await Fetcher.get("/allTech", {
        params: { userId: userId },
        headers: {
          Authorization: `bearer ${session.user.token}`,
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.data)
        .catch((error) => console.log(error)),
  });


  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("you clicked", inptValue);
    const formdata = {
      inputVal: inptValue,
      session,
    };
    createMutation.mutate(formdata);
    onClose();
  };
  const tech = "Start";
  if (session === null) route.push("/auth/signin");
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
        <PageContent tech={tech} />
       
        <Container maxW={"container.lg"} mt={[-24, -32]}>
          <Grid
            templateColumns="repeat(4, 1fr)"
            gap={3}
            mt={[10, 5]}
            p={[0, 5]}
          >
            {isLoading ? (
              <GridItem
                colSpan={[4, 4, 4, 4]}
                key={190}
                bg={"white"}
                shadow={"lg"}
                textAlign={"center"}
                rounded="xl"
              >
                <Flex
                  minH={"50vh"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  flexDir={"column"}
                  gap={2}
                >
                  <Spinner color="red" />
                  <Text fontSize={12}>Loading Data</Text>
                </Flex>
              </GridItem>
            ) : (
              <>
                {data?.techData?.map((item, idx) => {
                  return (
                    <GridItem
                      colSpan={[2, 2, 1, 1, 1]}
                      key={idx}
                      h={32}
                      bg={"gray.700"}                                       
                      textAlign={"center"}
                      rounded="lg"
                    >
                      <Link
                        href={{
                          pathname: `/${item.page}`,
                          query: {
                            tid: `${item._id}`,
                            uid: `${session?.user.id}`,
                            tech: `${item.page}`,
                          },
                        }}
                      >
                        <Flex
                          flexDir={"column"}
                          justifyContent={"center"}
                          color={"white"}
                          minH={32}
                        >
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

                <GridItem
                  colSpan={[4, 4, 1, 1, 1]}
                  key={123}
                  h={32}
                  bg={"white"}
                  border={"1px dashed gray"}
                  textAlign={"center"}
                  rounded="lg"
                  onClick={onOpen}
                  cursor={"pointer"}
                >
                  <Flex
                    flexDir={"column"}
                    justifyContent={"center"}
                    color={"black"}
                    minH={32}
                  >
                    <Heading
                      textTransform={"uppercase"}
                      fontWeight="bold"
                      size={"md"}
                    >
                      Add Stack
                    </Heading>
                  </Flex>
                </GridItem>
              </>
            )}
          </Grid>
        </Container>
      </Box>

      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <form onSubmit={onSubmitHandler}>
          <ModalContent>
            <ModalHeader fontWeight={"bold"} fontSize={14}>
              Add Stack to your list
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex flexDir={"column"} gap={5}>
                <FormControl>
                  <FormLabel fontWeight={"thin"} fontSize={14}>
                    Enter the Technology Name
                  </FormLabel>
                  <Input
                    type="Text"
                    onChange={(e) => setInptValue(e.target.value)}
                  />
                  <FormHelperText
                    fontSize={10}
                    color={"red.900"}
                    display={"none"}
                  >
                    We will never share your email.
                  </FormHelperText>
                </FormControl>
              </Flex>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} type="submit">
                Add Stack
              </Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
};
export default Home;
Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
