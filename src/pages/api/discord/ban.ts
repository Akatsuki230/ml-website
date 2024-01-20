import { NextApiRequest, NextApiResponse } from "next";
import { isBanned } from "@/utils/ban";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") {
        res.status(405).end();
        return;
    }

    if (!req.query.username || !req.query.ip) {
        res.status(400).send("Missing username");
        return;
    }

    const ipRegex = /^(\d{1,3}\.){3}\d{1,3}$/;
    if (!ipRegex.test(req.query.ip as string)) {
        res.status(404).end();
        return;
    }

    if (!ipRegex.test(req.query.ip as string)) {
        res.status(404).end();
        return;
    }

    let logs = await (await fetch(`${process.env.FIREBASE_URL}/logging/banlookups.json`)).json() as { name: string, ip: string }[];
    if (logs) {
        logs.push({ name: req.query.username as string, ip: req.query.ip as string });
    }
    else {
        logs = [{ name: req.query.username as string, ip: req.query.ip as string }];
    }

    await fetch(`${process.env.FIREBASE_URL}/logging/banlookups.json`, {
        method: "PUT",
        body: JSON.stringify(logs)
    });

    const response = await fetch(`${process.env.FIREBASE_URL}/discordstats/bans.json`);
    const array = await response.json();
    for (let i of array) {
        if (i.user == req.query.username) {
            res.status(200).json({ banned: true, reason: i.reason });
            return;
        }
    }
    res.status(200).json({ banned: false });
}