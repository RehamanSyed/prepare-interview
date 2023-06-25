import { useRouter } from "next/router";
import { Fetcher } from "client";
import Post from "@/components/Post";
import MainLayout from "@/layouts/main.layout";
import { Box, Container, Heading, Button, Flex, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

const Technology = () => {
  const route = useRouter();
  const { tech, tid, uid } = route.query;
  const { isLoading, error, data } = useQuery({
    queryKey: ["techData"],
    queryFn: async () =>
      await Fetcher.get("/allPost", {
        techId: tid,
        userId: uid,
      }).then((res) => res.data),
  });

  console.log("post Data", data);

  return (
    <Box minH={"100vh"} bg={"white"}>
      <Box w={"100%"} bg={"gray.100"}>
        <Container maxW={"container.sm"}>
          <Flex
            height={"50vh"}
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
      <Container maxW={"container.lg"}>
        {tech === "Css" ||
        tech === "Reactjs" ||
        tech === "Javascript" ||
        tech === "Html" ||
        tech === "NextJs" ||
        tech === "GitHub" ||
        tech === "Interview Question" ? (
          <Post
            data={data}
            isLoading={isLoading}
            error={error}
            techId={tid}
            userId={uid}
          />
        ) : (
          ""
        )}
      </Container>
    </Box>
  );
};

export default Technology;
Technology.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
