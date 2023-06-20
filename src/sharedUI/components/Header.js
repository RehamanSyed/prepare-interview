import {
  Box,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Input,
  ListItem,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const CommonHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Box bg={"white"} px={[0, 5]} py={5}>
        <Container maxW={"container.xl"}>
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Box>
              <Heading fontSize={20} fontWeight="extrabold">
                Interview Warmup
              </Heading>
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
              <Button
                colorScheme="red"
                variant="ghost"
                display={{ base: "flex", lg: "none" }}
                ref={btnRef}
                onClick={onOpen}
              >
                <AiOutlineMenu />
              </Button>
            </Box>
          </Flex>
        </Container>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"xs"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader bg={"gray.200"}>Welcome</DrawerHeader>

          <DrawerBody mt={5}>
            <UnorderedList
              display={"flex"}
              flexDir={"column"}
              ml={0}
              gap={5}
              listStyleType={"none"}
            >
              <ListItem>
                <Link href={"/"}>Profile</Link>
              </ListItem>
              <ListItem>
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
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default CommonHeader;
