// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from 'bcrypt'
import prisma from '@/libs/prisma'
import { HttpMethods } from "@/libs/https";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
 try {
  const { method , body} = req
  if(method !== HttpMethods.POST) {
    return res.status(405).end()
  }

  const { email, username, name, password} = body
  if (!email || !password) {
          throw new Error("Invalid user credentials");
  }

  // Check if user already exists.
  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (existingUser) {
    throw new Error("Invalid user credentials");
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const createdUser = await prisma.user.create({
    data: {
      email,
      hashedPassword,
      username, name
    },
  });

  return res.status(200).json(createdUser)

 } catch (error) {
  console.log(error);
    return res.status(400).end();
 }
}
