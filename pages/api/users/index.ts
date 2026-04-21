// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/libs/prisma";
import serverAuth from "@/libs/serverAuth";
import { HttpMethods } from "@/libs/https";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  try {
    switch (method) {
      case HttpMethods.GET:
        const users = await prisma.user.findMany({
          orderBy: {
            createdAt: 'desc',
          },
        });
        return res.status(200).json(users);
      default:
        return res.status(405).end();
    }
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
