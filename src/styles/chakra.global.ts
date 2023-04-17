import { extendTheme } from "@chakra-ui/react";

export const global = extendTheme({
  styles: {
    global: {
      a: {
        _hover: {
          textDecoration: "none !important",
        },
      },
    },
  },
});
