import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
import bcrypt from 'bcrypt'
import prisma from '@/libs/prisma'

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid user credentials");
        }

        // Check if user exist
        const existingUser = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });
        if (!existingUser) {
          throw new Error("Invalid user credentials");
        }

        if (!existingUser || !existingUser?.hashedPassword) {
          throw new Error("Invalid user credentials");
        }

        const isValid = await bcrypt.compare(
          credentials.password,
          existingUser.hashedPassword
        );

        if (!isValid) {
          throw new Error("Invalid user credentials");
        }

        return existingUser;
      },
    }),
  ],
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions)