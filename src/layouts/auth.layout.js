import { Box, Container, Heading } from "@chakra-ui/react";
import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <Box bg={"red.200"}>
      <Container>
        <main>{children}</main>
      </Container>
    </Box>
  );
};
export default AuthLayout;
