import {NextApiRequest, NextApiResponse} from "next";
import crypto from "crypto";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // friday check
  if (new Date().getDay() !== 5) {
    res.send({
      success: false,
      message: 'Not friday',
      count: 0
    });
    return;
  }
  const ips = await (await fetch('https://mldkyt-s-website-default-rtdb.europe-west1.firebasedatabase.app/ff/votes.json')).json() as { ip: string }[];
  console.log(ips)
  const ip = req.headers['x-forwarded-for']?.toString() || req.socket.remoteAddress || '';
  console.log(ip)
  const hash = crypto.createHash('sha256').update(ip).digest('hex');
  if (ips.some(i => i.ip === hash)) {
    res.send({
      success: false,
      message: 'Already voted',
      count: ips.length
    });
    return;
  }

  ips.push({ ip: hash })

  await fetch('https://mldkyt-s-website-default-rtdb.europe-west1.firebasedatabase.app/ff/votes.json', {
    method: 'PUT',
    body: JSON.stringify(ips)
  })

  res.send({
    success: true,
    count: ips.length
  })
}