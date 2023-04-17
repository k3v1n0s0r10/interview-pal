"use client";
import { Button, Flex, Stack } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";

import ThemeToggle from "./themeToggle";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <Flex
      h={16}
      px={4}
      bg={"transparent"}
      as="header"
      alignItems={"center"}
      justifyContent={"space-between"}
      position="fixed"
      top={0}
      width="full"
    >
      <Link href="/" fontSize="2xl" fontWeight="bold" letterSpacing="tight">
        Logo
      </Link>

      <Stack direction={"row"} spacing={7} alignItems={"center"}>
        <ThemeToggle />
        {pathname === "/" && (
          <Button
            color={"white"}
            bg={"blue.400"}
            _hover={{
              bg: "blue.500",
            }}
            as={Link}
            href="/register"
          >
            Try It Now
          </Button>
        )}
      </Stack>
    </Flex>
  );
}
