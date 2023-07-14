import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import { Fetcher } from "client";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_ID,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",
      async authorize(credentials, req) {
        const { name, password } = credentials;
        const response = await Fetcher.post("/login", { name, password });
        let user = response.data;
        console.log("reuslt @ credentials--> ", user);

        if (user.success) {
          console.log("User Data==>", user);
          return user;
        } else {
          console.log("User Data in else==>", user);
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    signin: "/auth/signin",
    signout: "/auth/signout",
    error: "/auth/error",
  },
  callbacks: {
    async jwt({ token, user }) {
      console.log("in call back jwt", user, token);
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      console.log("in call back session", session, user, token);
      session.user = token;
      return session;
    },
  },
};
export default NextAuth(authOptions);
