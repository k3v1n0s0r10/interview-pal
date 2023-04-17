import jwt from "jsonwebtoken";
import axios from "axios";
import NextAuth from "next-auth/next";
import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

const axiosInstance = axios.create({
  baseURL: process.env.BACKEND_URL,
});

export const authOptions: NextAuthOptions = {
  secret: process.env.SECRET_KEY,
  debug: process.env.NODE_ENV !== "production",
  pages: {
    signIn: "/login",
    newUser: "/register",
    error: "/login",
  },
  session: {
    maxAge: 2592000, /// month
    strategy: "jwt",
    updateAge: 86400, // day
  },
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { data } = await axiosInstance.post<string>(
          "/user/login/",
          credentials
        );

        const user = jwt.decode(data) as any;

        return { ...user, jwt: data };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (account) token.jwt = user.jwt;

      return token;
    },

    async session({ session, token }) {
      session.user = {
        email: token.email,
        username: token.username,
        isAdmin: token.isAdmin,
        jwt: token.jwt,
      };

      return session;
    },
  },
  jwt: {
    async encode({ token }) {
      if (token) return token.jwt;

      return "";
    },
    async decode({ token }) {
      if (token) {
        const decoded = jwt.decode(token) as any;
        return { ...decoded, jwt: token };
      }

      return undefined;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
