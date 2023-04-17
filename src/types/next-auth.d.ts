import { Session, User } from "next-auth";
import { JWT } from "next-auth/jwt";

import { AuthUser } from "./user";

declare module "next-auth" {
  interface User extends AuthUser {}

  interface Session {
    user: AuthUser;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends AuthUser {
    email: string;
  }
}
