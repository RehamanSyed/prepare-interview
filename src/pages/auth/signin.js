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
  Form,
  AbsoluteCenter,
  HStack,
} from "@chakra-ui/react";
import { getCsrfToken, signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  AiFillGithub,
  AiFillGoogleCircle,
  AiOutlineKey,
  AiOutlineUser,
} from "react-icons/ai";

// export async function getServerSideProps(context) {
//   return {
//     props: { csrfToken: await getCsrfToken(context) },
//   };
// }
const SignIn = () => {
  // console.log(csrfToken);
  const [inputVal, setInputVal] = useState("syed@gmail.com");
  const [passwordVal, setPasswordVal] = useState("123456");
  const route = useRouter();
  const { data: session } = useSession();
  //   console.log("session data", session);

  const loginHandler = async (e) => {
    e.preventDefault();
    console.log(inputVal);
    console.log(passwordVal);

    // signIn();
    await signIn("credentials", {
      email: inputVal,
      password: passwordVal,
      redirect: false,
    });
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
      <Container>
        <Stack
          spacing={10}
          minH={"calc(100vh)"}
          justifyContent={"center"}
          alignItems="center"
        >
          <Flex
            gap={3}
            fontSize={"xl"}
            textAlign={"center"}
            fontWeight={"bold"}
          >
            Welcome to
            <Link href="/">
              <Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text">
                Interview Warmup !
              </Text>
            </Link>
          </Flex>
          {/*  */}

          <form onSubmit={loginHandler} style={{ width: "350px" }}>
            <Flex justifyContent={"center"} flexDirection={"column"} gap={5}>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <AiOutlineUser color="gray.300" />
                </InputLeftElement>
                <Input
                  type="email"
                  fontSize={14}
                  h={12}
                  placeholder="Enter your username"
                  value={inputVal}
                  bg={"white"}
                  onChange={(e) => setInputVal(e.target.value)}
                />
              </InputGroup>
              <InputGroup justifyContent={"center"}>
                <Input
                  type="password"
                  value={passwordVal}
                  fontSize={14}
                  h={12}
                  bg={"white"}
                  onChange={(e) => setPasswordVal(e.target.value)}
                  placeholder="Enter your password"
                />
                <InputLeftElement>
                  <AiOutlineKey color="green.500" size="18px" />
                </InputLeftElement>
              </InputGroup>
              <Button
                type="submit"
                variant={"solid"}
                colorScheme="purple"
                fontWeight={"normal"}
                h={12}
              >
                Login
              </Button>
            </Flex>
            <Box position="relative" padding="10">
              <Divider />
              <AbsoluteCenter bg="white" px="4" fontSize={12}>
                Or
              </AbsoluteCenter>
            </Box>
            {/* <Box position="relative">
              <Flex gap={3}>
                <Button
                  variant={"solid"}
                  colorScheme="red"
                  width="full"
                  onClick={googleHandler}
                  h={12}
                  leftIcon={<AiFillGoogleCircle fontSize={28} />}
                >
                  Google
                </Button>
                <Button
                  colorScheme="black"
                  variant={"solid"}
                  width="full"
                  onClick={githubHandler}
                  leftIcon={<AiFillGithub fontSize={28} />}
                  h={12}
                >
                  Github
                </Button>
              </Flex>
            </Box> */}
          </form>
          <Flex gap={3} fontSize={"lg"} textAlign={"center"}>
            <Button
              as="a"
              href="/auth/register"
              colorScheme="black"
              bgColor={"gray.50"}
              variant={"ghost"}
              fontWeight={"bold"}
              fontSize={14}
              width="350px"
              h={12}
            >
              Register an account
            </Button>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
};
export default SignIn;
SignIn.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};
