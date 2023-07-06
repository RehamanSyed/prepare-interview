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
  border,
} from "@chakra-ui/react";
import { getCsrfToken, signOut, useSession } from "next-auth/react";
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
const Register = () => {
  // console.log(csrfToken);
  const [inputEmail, setInputEmail] = useState();
  const [inputUsername, setInputUsername] = useState();
  const [passwordVal, setPasswordVal] = useState();
  const route = useRouter();
  const { data: session } = useSession();
  //   console.log("session data", session);

  const loginHandler = async (e) => {
    e.preventDefault();
    console.log(inputVal);
    console.log(passwordVal);

    // Register();
    await Register("credentials", {
      email: inputVal,
      password: passwordVal,
      redirect: false,
    });
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
            flexDirection="column"
            fontWeight={"bold"}
          >
            Register With us
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
                <InputLeftElement pointerEvents="none" h={12}>
                  <AiOutlineUser color="gray.300" size={18} />
                </InputLeftElement>
                <Input
                  type="text"
                  fontSize={14}
                  h={12}
                  placeholder="Enter your username"
                  bg={"white"}
                  onChange={(e) => setInputUsername(e.target.value)}
                />
              </InputGroup>
              <InputGroup>
                <InputLeftElement pointerEvents="none" h={12}>
                  <AiOutlineUser color="gray.300" size={18} />
                </InputLeftElement>
                <Input
                  type="email"
                  fontSize={14}
                  h={12}
                  placeholder="Enter your Email"
                  bg={"white"}
                  onChange={(e) => setInputEmail(e.target.value)}
                />
              </InputGroup>
              <InputGroup justifyContent={"center"}>
                <Input
                  type="password"
                  fontSize={14}
                  h={12}
                  bg={"white"}
                  onChange={(e) => setPasswordVal(e.target.value)}
                  placeholder="Enter the Password"
                />
                <InputLeftElement h={12}>
                  <AiOutlineKey color="green.500" size="18px" />
                </InputLeftElement>
              </InputGroup>
              <InputGroup justifyContent={"center"}>
                <Input
                  type="password"
                  fontSize={14}
                  h={12}
                  bg={"white"}
                  onChange={(e) => setPasswordVal(e.target.value)}
                  placeholder="Confirm Password"
                />
                <InputLeftElement h={12}>
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
                Create Account
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
              href="/auth/signin"
              bgColor={"gray.50"}
              variant={"ghost"}
              fontWeight={"bold"}
              fontSize={14}
              width="350px"
              h={12}
            >
              Already registered ? Login here
            </Button>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
};
export default Register;
Register.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};
