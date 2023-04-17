import { Session } from "next-auth";
import { Link as NextLink } from "@chakra-ui/next-js";

const links = {
  login: "/login",
  register: "/register",
};

interface Props {
  pathname: string;
  session: Session | null;
}

export const LoginButton = ({ session, pathname }: Props) => {
  if (session || pathname === links.login) return <></>;
  return <NextLink href={links.login}>Sign In</NextLink>;
};

export const RegisterButton = ({ session, pathname }: Props) => {
  if (session || pathname === links.register) return <></>;
  return <NextLink href={links.register}>Register</NextLink>;
};
