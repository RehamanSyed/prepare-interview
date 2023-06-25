import Css from "@/components/Css";
import GeneralQuestions from "@/components/GeneralQuestions";
import Git from "@/components/Git";
import Html from "@/components/Html";
import Javascript from "@/components/Javascript";
import Nextjs from "@/components/Nextjs";
import Reactjs from "@/components/Reactjs";
import MainLayout from "@/layouts/main.layout";
import { Box, Container, Heading, Button, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Technology = () => {
  const route = useRouter();
  const { content, page } = route.query;
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
            <Heading>{content} WarmUp</Heading>
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
        {content === "CSS" ? (
          <Css />
        ) : content === "React" ? (
          <Reactjs />
        ) : content === "Javascript" ? (
          <Javascript />
        ) : content === "Html" ? (
          <Html />
        ) : content === "NextJs" ? (
          <Nextjs />
        ) : content === "Git" ? (
          <Git />
        ): content === "General Questions" ? (
          <GeneralQuestions />
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
