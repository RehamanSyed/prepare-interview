import Css from "@/components/Css";
import Html from "@/components/Html";
import Javascript from "@/components/Javascript";
import Nextjs from "@/components/Nextjs";
import Reactjs from "@/components/Reactjs";
import MainLayout from "@/layouts/main.layout";
import { Box, Container, Heading, Button, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Technology = () => {
  const route = useRouter();
  const { content, page } = route.query;
  return (
    <Box>
      <Container maxW={"container.lg"}>
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          bg={"gray.900"}
          mb={2}
          p={5}
          px={10}
          roundedBottomLeft={"2xl"}
          roundedBottomRight={"2xl"}
        >
          <Heading fontWeight={"semibold"} fontSize={24} color="white">
            {content}
          </Heading>
          <Button
            onClick={() => route.back()}
            colorScheme="yellow"
            fontSize={14}
            color="black"
            fontWeight={"light"}
          >
            Go Back
          </Button>
        </Flex>
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
