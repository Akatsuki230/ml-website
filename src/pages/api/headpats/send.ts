import { NextApiRequest, NextApiResponse } from "next";
import { isBanned } from "../../../utils/ban";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'OPTIONS') {
    res.status(405).end();
    return;
  }

  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  if (await isBanned(ip as string)) {
      res.status(403).json({ error: 'Your IP is banned from the API' });
      return
  }

  // check if it's friday in UTC
  const now = new Date();
  if (now.getUTCDay() !== 5) {
    res.status(403).json({ error: "It is not Friday in UTC" });
    return;
  }

  let fridayInfo = await (
    await fetch(
      `${process.env.FIREBASE_URL}/femboyfriday.json`
    )
  ).json();
  fridayInfo++;
  await fetch(
    `${process.env.FIREBASE_URL}/femboyfriday.json`,
    {
      method: "PUT",
      body: JSON.stringify(fridayInfo),
    }
  );

  try {
    let message = "Femboy Friday headpat sent: \n";
    message += "Headpats sent (new): " + fridayInfo + '\n';
    message +=
      "Origin: " + req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    message += "\nUser Agent: " + req.headers["user-agent"] + '\n';
    message += "UTC time: " + now.toUTCString() + '\n';
    const dis = await fetch(process.env.DISCORD_WEBHOOK,
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          content: message,
        }),
      }
    );
  } catch (e) {}

  res.status(200).json({ message: "Success", headpats: fridayInfo });
}
