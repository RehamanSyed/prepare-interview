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
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  useDisclosure,
  useToast,
  Select,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { getCsrfToken, signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import logo from "../../../public/logo.svg";
import {
  AiFillGithub,
  AiFillGoogleCircle,
  AiOutlineKey,
  AiOutlineUser,
} from "react-icons/ai";
import { Controller, useForm } from "react-hook-form";

// export async function getServerSideProps(context) {
//   return {
//     props: { csrfToken: await getCsrfToken(context) },
//   };
// }
const SignIn = () => {
  // console.log(csrfToken);
  const toast = useToast();
  const [inputVal, setInputVal] = useState();
  const [passwordVal, setPasswordVal] = useState();

  const [success, setSuccess] = useState(false);
  const route = useRouter();
  const { data: session } = useSession();
  const { isOpen, onClose, onOpen } = useDisclosure();

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const onSubmit = async (data) => {
    console.log("data", inputVal);

    // const result = await signIn("credentials", {
    //   name: data.username,
    //   password: data.password,
    //   redirect: false,
    // });

    // route.push("/");
    // setSuccess(result);
  };

  const googleHandler = async (e) => {
    signIn("google", { callbackUrl: "http://localhost:3000/" });
  };
  const githubHandler = async (e) => {
    signIn("github", { callbackUrl: "http://localhost:3000/" });
  };

  if (success?.ok) {
    // toast({
    //   position: "top",
    //   title: "Login successful",
    //   status: "success",
    //   duration: 2000,
    //   isClosable: true,
    // });
    route.push("/");
  } else {
    // toast({
    //   position: "top",
    //   title: "Username or password wrong",
    //   status: "error",
    //   duration: 2000,
    //   variant: "subtle",
    //   isClosable: true,
    // });
  }

  return (
    <Box>
      <Container>
        <Stack
          minH={"calc(100vh)"}
          justifyContent={"center"}
          alignItems="center"
        >
          <Flex
            gap={3}
            mb={10}
            fontSize={"xl"}
            textAlign={"center"}
            flexDir={"column"}
            justifyContent={"center"}
            alignItems="center"
            fontWeight={"bold"}
          >
            <Image src={logo} width={100} height={100} alt={"logo"} />
            Login to
            <Link href="/">
              <Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text">
                Interview Warmup !
              </Text>
            </Link>
          </Flex>

          <form onSubmit={handleSubmit(onSubmit)} style={{ width: "350px" }}>
            <Flex
              justifyContent={"start"}
              flexDirection={"column"}
              p={3}
              bg={"red.50"}
              mb={5}
            >
              <List spacing={3}>
                <ListItem></ListItem>
              </List>
            </Flex>
            <Flex justifyContent={"center"} flexDirection={"column"} gap={5}>
              <Controller
                name="username"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <InputGroup>
                    <InputLeftElement pointerEvents="none" h={12}>
                      <AiOutlineUser color="gray.300" size={20} />
                    </InputLeftElement>
                    <Input
                      type="text"
                      fontSize={14}
                      h={12}
                      placeholder="Enter your username"
                      value={inputVal}
                      bg={"white"}
                      onChange={(e) => setInputVal(e.target.value)}
                      {...field}
                    />
                  </InputGroup>
                )}
              />

              <Controller
                name="password"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <InputGroup justifyContent={"center"}>
                    <Input
                      type="password"
                      value={passwordVal || ""}
                      fontSize={14}
                      h={12}
                      bg={"white"}
                      onChange={(e) => setPasswordVal(e.target.value)}
                      placeholder="Enter your password"
                      {...field}
                    />
                    <InputLeftElement h={12}>
                      <AiOutlineKey color="green.500" size={20} />
                    </InputLeftElement>
                  </InputGroup>
                )}
              />
              {/* <Controller
        name="select"
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            options={[
              { value: "chocolate", label: "Chocolate" },
              { value: "strawberry", label: "Strawberry" },
              { value: "vanilla", label: "Vanilla" },
            ]}
          />
        )}
      /> 
      <input type="submit" />*/}
              {/* <InputGroup>
                <InputLeftElement pointerEvents="none" h={12}>
                  <AiOutlineUser color="gray.300" size={20} />
                </InputLeftElement>
                <Input
                  type="text"
                  fontSize={14}
                  h={12}
                  placeholder="Enter your username"
                  value={inputVal || ""}
                  bg={"white"}
                  onChange={(e) => setInputVal(e.target.value)}
                />
              </InputGroup>
              <InputGroup justifyContent={"center"}>
                <Input
                  type="password"
                  value={passwordVal || ""}
                  fontSize={14}
                  h={12}
                  bg={"white"}
                  onChange={(e) => setPasswordVal(e.target.value)}
                  placeholder="Enter your password"
                />
                <InputLeftElement h={12}>
                  <AiOutlineKey color="green.500" size={20} />
                </InputLeftElement>
              </InputGroup> */}
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
            <Box position="relative" margin="10">
              <Divider />
              <AbsoluteCenter bg="white" px="4" fontSize={12}>
                Or
              </AbsoluteCenter>
            </Box>
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
              Register here
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

{
  /* <Box position="relative">
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
            </Box> */
}
