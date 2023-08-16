import {NextApiRequest, NextApiResponse} from "next";
import {kv} from "@vercel/kv";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const isStreaming = await kv.get('live')
    const link = await kv.get('live_link')
    if (isStreaming === null) return res.status(200).json({live: false})
    else return res.status(200).json({live: isStreaming, link: link})
}