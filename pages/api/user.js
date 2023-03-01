import { PrismaClient } from "@prisma/client";
import axios from "axios";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const start = new Date();
  start.setHours(0, 0, 0, 0);
  const end = new Date();
  end.setHours(23, 59, 59, 999);
  // Create new punch
  if (req.method === "GET") {
    try {
      const users = await prisma.user.findMany();
      const punches = await prisma.punch.findMany({
        where: {
          created_at: {
            gte: start,
            lte: end,
          },
        },
      });
      res.status(200).json({ users, punches });
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
