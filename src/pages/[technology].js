import { useRouter } from "next/router";
import { Fetcher } from "client";
import Post from "@/components/Post";
import MainLayout from "@/layouts/main.layout";
import {
  Box,
  Container,
  Heading,
  Button,
  Flex,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import axios from "axios";
import PageContent from "@/components/PageContent";
import PostModal from "@/components/PostModal";
import {
  useAllPost,
  useDeletePost,
  useEditPost,
} from "@/modules/technology/hooks/usePost";

const Technology = () => {
  const { data: session } = useSession();
  const route = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { tech, tid, uid } = route.query;
  const { isLoading, error, data } = useAllPost({ tid, uid });
  const { editMutation } = useEditPost();
  const { deleteMutation } = useDeletePost();

  console.log("all post data", data);

  const addQuestionHandler = () => {
    onOpen();
  };

  const deletePostHandler = (id) => {
    console.log("Post id", id);
    deleteMutation.mutate(id);
  };
  const editPostHandler = (id) => {
    console.log("Post id", id);
    onOpen();

    // editMutation.mutate(id);
  };

  return (
    <Box minH={"100vh"} bg={"white"} pb={10}>
      <PageContent tech={tech} />

      <Container maxW={"container.lg"}>
        {tech === "Css" ||
        tech === "React" ||
        tech === "Javascript" ||
        tech === "Html" ||
        tech === "NextJs" ||
        tech === "GitHub" ||
        tech === "Interview Question" ? (
          <>
            <Post
              data={data}
              isLoading={isLoading}
              error={error}
              techId={tid}
              userId={uid}
              addQuestionHandler={addQuestionHandler}
              editPostHandler={editPostHandler}
              deletePostHandler={deletePostHandler}
            />
            <PostModal
              isOpen={isOpen}
              onClose={onClose}
              techId={tid}
              userId={uid}
            />
          </>
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
