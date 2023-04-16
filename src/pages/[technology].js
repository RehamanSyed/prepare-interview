import Css from "@/components/Css";
import Html from "@/components/Html";
import Javascript from "@/components/Javascript";
import Nextjs from "@/components/Nextjs";
import Reactjs from "@/components/Reactjs";
import { Box, Container, Heading, Button, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Technology = () => {
  const route = useRouter();
  const { content, page } = route.query;
  return (
    <Box>
      <Container maxW={"container.lg"}>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Heading my={10}>{content}</Heading>
          <Button onClick={() => route.back()}> Go Back </Button>
        </Flex>
        {content === "CSS" ? (
          <Css />
        ) : content === "React" ? (
          <Reactjs />
        ) : content === "Javascript" ? (
          <Javascript />
        ) : content === "html" ? (
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
