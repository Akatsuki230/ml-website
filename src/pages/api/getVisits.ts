import { NextApiRequest, NextApiResponse } from "next";
import kv from '@vercel/kv';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const visits = await kv.incr("visits");
    res.json({ visits });
}