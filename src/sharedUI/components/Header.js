import { Box, Button, Flex, Heading, ListItem, UnorderedList } from "@chakra-ui/react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";

const CommonHeader = () => {
  return (
    <Box bg={"gray.100"} p={3} >
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Box>
          <Heading fontSize={24}>Prep-interview</Heading>
        </Box>
        <Box>
          <UnorderedList display={"flex"} gap={10} listStyleType={"none"}>
            <ListItem>Profile</ListItem>
            <ListItem>MockTest</ListItem>
            <ListItem>
              <Button colorScheme="red" onClick={() => signOut()}>
                Logout
              </Button>
            </ListItem>
          </UnorderedList>
        </Box>
      </Flex>
    </Box>
  );
};

export default CommonHeader;
