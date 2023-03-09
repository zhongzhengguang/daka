import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export default async function hamdler(req, res) {
  if (req.method === 'GET') {
    try {
      const workTime = await prisma.user.findMany();
      res.status(200).json({ workTime });
    } catch (e) {
      res.status(500).json({ message: e });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `HTTP method ${req.method} is not supported.` });
  }
  // const { seconds, session } = req.body;

  // if (!seconds) {
  //   res.status(400).json({ answer: 'Please check in !' });
  //   return;
  // }
  // if (!session) {
  //   res.status(400).json({ answer: 'Please login !' });
  //   return;
  // }
  // const response = await (session, seconds);
  // res.status(200).json(response.session + ':' + response.seconds);
}
