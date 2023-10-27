import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
  const cookies = req.headers.cookie ?? "";
  if (!cookies.includes(`token=${process.env.ADMIN_PASSWORD}`)) {
    res.end("Unauthorized");
    return;
  }

  const { id, label, url, type } = JSON.parse(req.body) as {id: string, label: string, url: string, type: string };
  if (id === undefined || label === undefined || url === undefined || type === undefined){
    res.end("Invalid request");
    return;
  }

  const dataCheck = await (
    await fetch(
      `${process.env.FIREBASE_URL}/redirects/${id}.json`
    )
  ).json();
  if (dataCheck == null) {
    console.log("Not found");
    res.end("Not found");
    return;
  }

  await fetch(
    `${process.env.FIREBASE_URL}/redirects/${id}.json`,
    {
      method: "PATCH",
      body: JSON.stringify({
        url: url,
        label: label,
        type: type
      }),
    }
  );

  res.end("Success");
}