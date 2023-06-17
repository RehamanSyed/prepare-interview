import { Box, Container, Heading } from "@chakra-ui/react";
import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <Box bg={"red.200"}>
      <Container>
        <main>{children}</main>
        <Heading>Gooter</Heading>
      </Container>
    </Box>
  );
};
export default AuthLayout;
