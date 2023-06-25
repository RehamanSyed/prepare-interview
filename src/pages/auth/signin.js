import AuthLayout from "@/layouts/auth.layout";
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import { getCsrfToken, signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { AiOutlineKey, AiOutlineUser } from "react-icons/ai";

export async function getServerSideProps(context) {
  return {
    props: { csrfToken: await getCsrfToken(context) },
  };
}
const SignIn = ({ csrfToken }) => {
  console.log(csrfToken);
  const [inputVal, setInputVal] = useState("syed@gmail.com");
  const [passwordVal, setPasswordVal] = useState("123456");
  const route = useRouter();
  const { data: session } = useSession();
  //   console.log("session data", session);

  const loginHandler = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      email: inputVal,
      password: passwordVal,
      redirect: false,
    });
    console.log("result @ signin page", result);
  };
  const googleHandler = async (e) => {
    signIn("google", { callbackUrl: "http://localhost:3000/" });
  };
  const githubHandler = async (e) => {
    signIn("github", { callbackUrl: "http://localhost:3000/" });
  };
  if (session) {
    route.push("/");
  }
  return (
    <Box>
      <Container
        maxW={{
          base: "90%",
          sm: "70%",
          md: "50%",
          lg: "40%",
          xl: "30%",
        }}
      >
        <Stack
          spacing={4}
          minH={"calc(100vh)"}
          justifyContent={"center"}
          alignItems="center"
        >
          <Heading
            mb={5}
            fontWeight="light"
            fontSize={"3xl"}
            textAlign={"center"}
          >
            Please Login
          </Heading>
          <Flex gap={3} width="100%">
            <Button colorScheme="facebook" width="full" onClick={googleHandler}>
              Google
            </Button>
            <Button colorScheme="twitter" width="full" onClick={githubHandler}>
              GitHub
            </Button>
          </Flex>
          <Divider my={10} />
          <form onSubmit={loginHandler} style={{ width: "100%" }}>
            <Flex
              justifyContent={"center"}
              w={"full"}
              flexDirection={"column"}
              gap={5}
            >
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <AiOutlineUser color="gray.300" />
                </InputLeftElement>
                <Input
                  type="email"
                  bg={"gray.50"}
                  fontSize={14}
                  w={"full"}
                  placeholder="Enter your username"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                />
              </InputGroup>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.300"
                  fontSize="1.2em"
                />
                <Input
                  type="password"
                  value={passwordVal}
                  bg={"gray.50"}
                  w={"full"}
                  fontSize={14}
                  onChange={(e) => setPasswordVal(e.target.value)}
                  placeholder="Enter your password"
                />
                <InputLeftElement>
                  <AiOutlineKey color="green.500" />
                </InputLeftElement>
              </InputGroup>
              <Button
                type="submit"
                variant={"outline"}
                colorScheme="messenger"
                width={"100%"}
              >
                Login
              </Button>
            </Flex>
          </form>
        </Stack>
      </Container>
    </Box>
  );
};
export default SignIn;
SignIn.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};
