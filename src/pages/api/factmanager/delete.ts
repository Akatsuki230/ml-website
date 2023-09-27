import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const cookies = req.headers.cookie ?? "";
  if (!cookies.includes(`token=${process.env.ADMIN_PASSWORD}`)) {
    res.end("Unauthorized");
    return;
  }

  const { id } = JSON.parse(req.body) as {id: number};

  const data = await (
    await fetch(`${process.env.FIREBASE_URL}/facts.json`)
  ).json();

  data[id] = null;

  await fetch(`${process.env.FIREBASE_URL}/facts.json`, {
    method: "PUT",
    body: JSON.stringify(data),
  });

  res.end("Success");
}