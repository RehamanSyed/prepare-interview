import { Box } from "@chakra-ui/react";
import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <>
      <Box>header</Box>
      <main>{children}</main>
      <Box>Gooter</Box>
    </>
  );
};

export default AuthLayout;
