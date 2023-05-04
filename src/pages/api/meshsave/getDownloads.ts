import kv from "@vercel/kv";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (!await kv.exists('meshsaveDownloads')) await kv.set('meshsaveDownloads', 0);
    const downloads = await kv.get('meshsaveDownloads');
    res.status(200).json({ downloads });
}