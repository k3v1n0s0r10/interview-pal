"use client";
import { SessionProvider } from "next-auth/react";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";

import { global } from "@/styles/chakra.global";
import { StreamProvider } from "@/context/stream";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <StreamProvider>
        <CacheProvider>
          <ChakraProvider theme={global}>{children}</ChakraProvider>
        </CacheProvider>
      </StreamProvider>
    </SessionProvider>
  );
}
