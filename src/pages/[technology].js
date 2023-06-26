import { useRouter } from "next/router";
import { Fetcher } from "client";
import Post from "@/components/Post";
import MainLayout from "@/layouts/main.layout";
import { Box, Container, Heading, Button, Flex, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import axios from "axios";

const Technology = () => {
  const route = useRouter();
  const { tech, tid, uid } = route.query;

  const { isLoading, error, data } = useQuery({
    queryKey: ["postData"],
    queryFn: async () =>
      await Fetcher.get("/allPost", {
        params: { techId: tid, userId: "646b7644abf92e2043abf5ba" },
      })
        .then((res) => res.data)
        .catch((err) => console.log(err)),
  });

  console.log("all post data", data);

  return (
    <Box minH={"100vh"} bg={"white"} pb={10}>
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
