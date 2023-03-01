import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({ message: "Unauthorized." });
  }
  // Create new punch
  if (req.method === "POST") {
    try {
      // TODO
      const { inTime, type } = req.body;
      const data = {};

      const start = new Date(inTime || outTime);
      start.setHours(0, 0, 0, 0);
      const end = new Date(inTime || outTime);
      end.setHours(23, 59, 59, 999);
      const user = await prisma.user.findUnique({
        where: { email: session.user.email },
      });
      data.type = type;
      data.userId = user.id;
      data.in_at = start;
      // Retrieve the current authenticated user
      const punch = await prisma.punch.findFirst({
        where: {
          userId: user.id,
          in_at: {
            gte: start,
            lte: end,
          },
        },
      });
      if (punch) {
        const ooo = await prisma.punch.updateMany({
          where: {
            userId: user.id,
            in_at: {
              gte: start,
              lte: end,
            },
          },
          data,
        });
        res.status(200).json(ooo);
      } else {
        const ooo = await prisma.punch.create({
          data,
        });
        res.status(200).json(ooo);
      }
    } catch (e) {
      res.status(500).json({ message: e });
    }
  }
  // HTTP method not supported!
  else {
    res.setHeader("Allow", ["POST"]);
    res
      .status(405)
      .json({ message: `HTTP method ${req.method} is not supported.` });
  }
}
