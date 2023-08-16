import {NextApiRequest, NextApiResponse} from "next";
import {kv} from "@vercel/kv";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.cookies.token !== process.env.ADMIN_PASSWORD) return res.status(401).json({error: "Unauthorized"});
    const lastLive = await kv.get('live')
    console.log('lastLive', lastLive)
    await kv.set('live', !lastLive)
    res.status(200).json({success: true, live: !lastLive})
}