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
import { useEffect, useState } from "react";
import axios from "axios";
import PageContent from "@/components/PageContent";
import PostModal from "@/components/PostModal";
import {
  useAllPost,
  useDeletePost,
  useEditPost,
} from "@/modules/technology/hooks/usePost";
import { useSession } from "next-auth/react";
import EditPostModal from "@/components/EditPostModal";

const Technology = () => {
  const { data: session } = useSession();
  const route = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: editisOpen,
    onOpen: editonOpen,
    onClose: editClose,
  } = useDisclosure();
  const { tech, tid, uid } = route.query;
  const { isLoading, error, data } = useAllPost({ tid, uid });
  const [postId, setPostId] = useState();
  const { editMutation } = useEditPost();
  const { deleteMutation } = useDeletePost();

  const addQuestionHandler = () => {
    onOpen();
  };

  const deletePostHandler = (id) => {
    console.log("Post id", id);
    deleteMutation.mutate(id);
  };

  const editPostHandler = (id) => {
    setPostId(id);
    onOpen();
  };

  useEffect(() => {
    console.log("all post data", data);
  }, [data]);
  const colorSchemeTech = {
    Reactjs: "linear(to-r, blue.300, teal.500, blue.300)",
    nextjs: "linear(to-r, blue.300, teal.500, blue.300)",
    html: "linear(to-r, blue.300, teal.500, blue.300)",
    Javascript: "linear(to-r, blue.300, teal.500, blue.300)",
    Css: "linear(to-r, green.300, red.500, green.300)",
  };
  return (
    <Box minH={"100vh"} bg={"white"} pb={10}>
      <PageContent tech={tech} colorSchemeTech={colorSchemeTech} />

      <Container maxW={"container.lg"}>
        {tech === "Css" ||
        tech === "Reactjs" ||
        tech === "Javascript" ||
        tech === "Html" ||
        tech === "NextJs" ||
        tech === "Testing" ||
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
              postId={postId}
            />
            <EditPostModal
              isOpen={editisOpen}
              onClose={editClose}
              techId={tid}
              userId={uid}
            />
          </>
        ) : (
          "No Post"
        )}
      </Container>
    </Box>
  );
};

export default Technology;
Technology.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
