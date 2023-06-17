import { Providers } from "@/Providers";
import Footer from "@/sharedUI/components/Footer";
import CommonHeader from "@/sharedUI/components/Header";
import { Box, Container } from "@chakra-ui/react";

import React from "react";

const MainLayout = ({ children }) => {
  return (
    <Providers>
    
        <Container maxW={"container.lg"}>
          <CommonHeader />
          <Box as="main" minH={"100vh"}>
            {children}
          </Box>
          <Footer />
        </Container>
      
    </Providers>
  );
};

export default MainLayout;
