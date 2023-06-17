import { Box, Container, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { AiFillHeart } from "react-icons/ai";

const Footer = () => {
  return (
    <Box p={4}>
      <Container>
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          gap={1}
          fontSize={12}
        >
          <Text>Built With</Text><AiFillHeart color="red" size={18} /><Text>@Syed Rehaman</Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
