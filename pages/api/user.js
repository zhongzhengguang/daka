import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const users = await prisma.user.findMany();
      res.status(200).json({ users });
    } catch (e) {
      res.status(500).json({ message: e });
    }
  }
  // HTTP method not supported!
  else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `HTTP method ${req.method} is not supported.` });
  }
}
