import { NextApiRequest, NextApiResponse } from "next";
import { isBanned } from "../../../utils/ban";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log("method ban", req.method);
    if (req.method !== "GET") {
        res.status(405).end();
        return;
    }

    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    if (await isBanned(ip as string)) {
        res.status(403).end();
        return;
    }

    if (!req.query.username) {
        res.status(400).send("Missing username");
        return;
    }

    const response = await fetch(`${process.env.FIREBASE_URL}/discordstats/bans.json`);
    const array = await response.json();
    for (let i of array) {
        console.log(i.user, req.query.username);
        if (i.user == req.query.username) {
            console.log("banned");
            res.status(200).json({ banned: true, reason: i.reason });
            return;
        }
    }
    res.status(200).json({ banned: false });
}
