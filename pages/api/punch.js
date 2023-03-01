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
      const data = {};
      const { type, inTime, outTime } = req.body;
      data.type = type;
      inTime ? (data.in_at = inTime) : null;
      outTime ? (data.out_at = outTime) : null;
      const start = new Date();
      start.setHours(0, 0, 0, 0);
      const end = new Date();
      end.setHours(23, 59, 59, 999);

      // Retrieve the current authenticated user
      const user = await prisma.user.findUnique({
        where: { email: session.user.email },
      });
      data.userId = user.id;
      const punched = await prisma.punch.findFirst({
        where: {
          userId: user.id,
          created_at: {
            gte: start,
            lte: end,
          },
        },
      });
      if (punched) {
        const punch = await prisma.punch.update({
          where: {
            id: punched.id,
          },
          data,
        });
      } else {
        const punch = await prisma.punch.create({
          data,
        });
      }
      res.status(200).json({ message: "punch success" });
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
