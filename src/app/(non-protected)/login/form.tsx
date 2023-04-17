"use client";
import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import {
  Flex,
  Box,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as NextLink } from "@chakra-ui/next-js";

import CustomInput from "@/components/customInput";

const initialValues = {
  email: "",
  password: "",
};

export default function LoginForm() {
  const formik = useFormik({
    initialValues,
    onSubmit: async (data) => {
      await signIn("credentials", data);
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
          <Heading textAlign={"center"} fontSize={"4xl"}>
            Sign in to your account
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          as="form"
          onSubmit={formik.handleSubmit}
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <CustomInput
              label="Email:"
              id="email"
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isRequired={true}
            />
            <CustomInput
              label="Password:"
              id="password"
              name="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isRequired={true}
            />
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>
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
                Login
              </Button>
              <Text pt={6} align={"center"}>
                Don&apos;t have an account?{" "}
                <NextLink href={"/register"} color={"blue.400"}>
                  Register
                </NextLink>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
