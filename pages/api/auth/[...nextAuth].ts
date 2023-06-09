import { NextApiHandler } from "next";
import NextAuth, { SessionStrategy } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GitHubProvider from "next-auth/providers/github";
// import GoogleProvider from "next-auth/providers/google";

import prisma from "../../../lib/prisma";
// const strategy = "jwt" as SessionStrategy;

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;

const options = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET,
    //   // authorization: {
    //   //   params: {
    //   //     prompt: "consent",
    //   //     access_type: "offline",
    //   //     response_type: "code",
    //   //   },
    //   // },
    // }),
  ],
  // session: {
  //   strategy,
  // },
  // FIXME: https://next-auth.js.org/providers/google
  // callbacks: {
  //   async signIn({ account, profile }) {
  //     if (account.provider === "google") {
  //       return profile.email_verified && profile.email.endsWith("@example.com");
  //     }
  //     return true; // Do different verification for other providers that don't have `email_verified`
  //   },
  // },
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,
};
