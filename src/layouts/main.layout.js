import Footer from "@/components/sharedUI/Footer";
import Header from "@/components/sharedUI/Header";
import { Box, Container } from "@chakra-ui/react";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <Box bg={"red.200"}>
      <Container maxW={'container'}>
        <Header />
          <main>{children}</main>
        <Footer />
      </Container>
    </Box>
  );
};

export default MainLayout;
