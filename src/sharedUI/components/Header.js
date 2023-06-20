import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const CommonHeader = () => {
  return (
    <Box bg={"white"} p={5}>
      <Container maxW={"container.xl"}>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Box>
            <Heading fontSize={24}>Interview Warmup</Heading>
          </Box>
          <Box>
            <UnorderedList
              display={{ base: "none", lg: "flex" }}
              gap={10}
              listStyleType={"none"}
            >
              <ListItem>
                <Link href={"/"}>Profile</Link>
              </ListItem>
              <ListItem>
                {" "}
                <Link href={"/"}>MockTest</Link>
              </ListItem>
              <ListItem>
                <Button
                  variant={"link"}
                  colorScheme="red"
                  onClick={() => signOut()}
                >
                  Logout
                </Button>
              </ListItem>
            </UnorderedList>
            <Button colorScheme="red" variant="ghost"  display={{ base: "flex", lg: "none" }}>
            <AiOutlineMenu />
            </Button>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default CommonHeader;
