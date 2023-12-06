import { NextApiRequest, NextApiResponse } from "next";
import { isBanned } from "../../../utils/ban";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    console.log('method addban', req.method)
    if (req.method !== 'GET') {
        res.status(405).end();
        return
    }

    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    if (await isBanned(ip as string)) {
        res.status(403).end();
        return
    }

    const data1 = await (await fetch(`${process.env.FIREBASE_URL}/discordstats/members.json`)).json();
    const data2 = await (await fetch(`${process.env.FIREBASE_URL}/discordstats/online.json`)).json();
    res.status(200).json({
        members: data1,
        online: data2
    });
}