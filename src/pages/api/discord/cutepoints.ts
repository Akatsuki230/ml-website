import { NextApiRequest, NextApiResponse } from "next";
import { isBanned } from "../../../utils/ban";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    console.log('method cutepoints', req.method)
    if (req.method !== 'GET') {
        res.status(405).end();
        return
    }

    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    if (await isBanned(ip as string)) {
        res.status(403).end();
        return
    }

    const response = await fetch(`${process.env.FIREBASE_URL}/discordstats/cutepoints.json`);
    const data = await response.json();
    res.status(200).json(data);
}