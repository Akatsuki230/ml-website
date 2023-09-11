import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const cookies = req.headers.cookie ?? "";
  if (!cookies.includes(`token=${process.env.ADMIN_PASSWORD}`)) {
    res.end("Unauthorized");
    return;
  }

  const { fact } = JSON.parse(req.body) as {fact: string};

  let data = await (
    await fetch(`${process.env.FIREBASE_URL}/facts.json`)
  ).json();

  console.log('Count of facts before: ', data.length)
  data.push({fact});
  console.log('Count of facts after: ', data.length)

  await fetch(`${process.env.FIREBASE_URL}/facts.json`, {
    method: "PUT",
    body: JSON.stringify(data),
  });

  res.end("Success");
}