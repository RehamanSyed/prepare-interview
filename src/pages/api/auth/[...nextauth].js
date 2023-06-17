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
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        console.log("credentials", credentials);
        const { email, password } = credentials;
        const response = await Fetcher.post("/user/login", {
          email: credentials.email,
          password: credentials.password,
        });
        let result = await response.data;
        console.log("reuslt ", result);

        if (email !== result.user.email || password !== result.user.password) {
          throw new Error("Invalid credentials");
        }
        return result.user; // login succesfully
      },
    }),
  ],
  pages: {
    signin: "/auth/signin",
    signout: "/auth/signout",
    error:"/auth/error"
  },
  session: {
    strategy: "jwt",
  },
  secret:process.env.NEXTAUTH_SECRET
};
export default NextAuth(authOptions);
