// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from '@/libs/prisma'
import serverAuth from "@/libs/serverAuth";
import { HttpMethods } from "@/libs/https";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {method} = req
  try {
    switch (method) {
      case HttpMethods.GET:
        const { userId } = req.query;
        let query = {} 
        if(!userId || typeof userId !== 'string') {
          query = {
          where: {
            userId
          }
        }
        }   
        const posts = await prisma.post.findMany({
          ...query,
          include: { user: true, comments: true},
          orderBy: {
            createdAt: 'desc'
          }}
        )
        return res.status(200).json(posts)
       
      case HttpMethods.POST:
        const { currentUser } = await serverAuth(req, res);
        const { body, image } = req.body
        const post = await prisma.post.create({
          data:  { body, image, userId: currentUser.id}
        })
        return res.status(200).json(post);
      default:
        return res.status(405).end();
    }
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
