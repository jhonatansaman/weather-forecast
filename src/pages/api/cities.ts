import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const cities = await prisma.cities.findMany();
      res.status(200).json(cities);
    } catch (err) {
      res.status(400).json({ message: "Something went wrong" });
    }
  }
  if (req.method === "POST") {
    try {
      const body = JSON.parse(req.body);
      const city = {
        lat: body.lat,
        lon: body.lon,
        name: body.name,
        state: body.state,
      };

      const savedContact = await prisma.cities.create({ data: city });
      res.status(200).json(savedContact);
    } catch (err) {
      res.status(400).json({ message: "Something went wrong" });
    }
  }
}
