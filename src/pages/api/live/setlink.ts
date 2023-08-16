import {NextApiRequest, NextApiResponse} from "next";
import {kv} from "@vercel/kv";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.cookies.token !== process.env.ADMIN_PASSWORD) return res.status(401).json({error: "Unauthorized"});
    const {link} = JSON.parse(req.body) as {link: string};
    console.log('new link', link)
    await kv.set('live_link', link)
    res.status(200).json({success: true, live: link})
}