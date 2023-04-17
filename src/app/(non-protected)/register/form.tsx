"use client";
import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import {
  Flex,
  Box,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";

import CustomInput from "@/components/customInput";

const initialValues = {
  username: "",
  email: "",
  password: "",
};

export default function RegisterForm() {
  const formik = useFormik({
    initialValues,
    onSubmit: async (data: typeof initialValues) => {
      const { username, email, password } = data;

      await signIn("credentials", { email, password });
    },
  });

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <CustomInput
              label="Full Name:"
              id="username"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isRequired
            />
            <CustomInput
              label="Email:"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isRequired
            />
            <CustomInput
              label="Password:"
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isRequired
            />

            <Button
              //Styles
              py={2}
              color={"white"}
              bg={"blue.400"}
              _hover={{
                bg: "blue.500",
              }}
              //End Styles
              type="submit"
              loadingText="Loading..."
              isLoading={formik.isSubmitting}
              disabled={formik.isSubmitting}
            >
              Register
            </Button>

            <Text pt={6} align={"center"}>
              Already a user?{" "}
              <Link href={"/login"} color={"blue.400"}>
                Login
              </Link>
            </Text>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
