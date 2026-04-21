// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/libs/prisma";
import serverAuth from "@/libs/serverAuth";
import { HttpMethods } from "@/libs/https";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method } = req;
  try {
    switch (method) {
      case HttpMethods.GET:
        const { userId } = req.query;
        if(!userId || typeof userId !== "string") {
          throw new Error('Invalid user')
        }
        const existingUser = await prisma.user.findUnique({
          where: {
            id: userId,
          },
        });
        return res.status(200).json({...existingUser, followerCount: 0});
      default:
        return res.status(405).end();
    }
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
