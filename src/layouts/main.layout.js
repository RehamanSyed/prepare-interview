import { Providers } from "@/Providers";
import Footer from "@/sharedUI/components/Footer";
import CommonHeader from "@/sharedUI/components/Header";
import { Box, Container } from "@chakra-ui/react";
import React from "react";
const MainLayout = ({ children }) => {
  return (
    <Providers>
      <Box bg={"gray.200"}>
        <CommonHeader />
        <Box as="main">{children}</Box>
        <Footer />
      </Box>
    </Providers>
  );
};

export default MainLayout;
