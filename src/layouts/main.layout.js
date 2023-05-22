import { Box } from "@chakra-ui/react";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <Box>
      <main>{children}</main>
    </Box>
  );
};

export default MainLayout;
