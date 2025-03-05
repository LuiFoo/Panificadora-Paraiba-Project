import type { NextApiRequest, NextApiResponse } from "next";
import client from "@/modules/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await client.connect();
    const dbSampleMflix = client.db("padaria");

    const paesSalgados = await dbSampleMflix
      .collection("paes-salgados")
      .find({})
      .sort({
        metacritic: -1,
      })
      .limit(10)
      .toArray();

    return res.status(200).json({
        paesSalgados: paesSalgados,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ name: "Internal server error" });
  }
}