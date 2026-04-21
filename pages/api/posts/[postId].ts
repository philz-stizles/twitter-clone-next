// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/libs/prisma";
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
        const { postId } = req.query;
        if (!postId || typeof postId !== "string") {
          throw new Error("Invalid ID");
        }

        const post = await prisma.post.findUnique(
          {
            where: {
              id: postId,
            },
            include: { 
              user: true, 
              comments: {
                include: {
                  user: true
                },
                orderBy: {
                    createdAt: 'desc'
                }
              } },
          },
        );
        return res.status(200).json(post);
      default:
        return res.status(405).end();
    }
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
