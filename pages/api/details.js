import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({ message: "Unauthorized." });
  }
  if (req.method === "GET") {
    try {
      let { startDate, endDate } = req.query;
      endDate = new Date(Date.parse(endDate));
      endDate.setHours(23, 59, 59, 999);
      const user = await prisma.user.findUnique({
        where: { email: session.user.email },
      });
      const punches = await prisma.punch.findMany({
        orderBy: [
          {
            in_at: "desc",
          },
        ],
        where: {
          userId: user.id,
          in_at: {
            gte: startDate,
            lte: endDate,
          },
        },
      });
      res.status(200).json({ punches });
    } catch (e) {
      res.status(500).json({ message: e });
    }
  }
  // HTTP method not supported!
  else {
    res.setHeader("Allow", ["GET"]);
    res
      .status(405)
      .json({ message: `HTTP method ${req.method} is not supported.` });
  }
}
