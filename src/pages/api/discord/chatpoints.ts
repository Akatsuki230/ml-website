import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const data = await (await fetch(`${process.env.FIREBASE_URL}/discordstats/chatpoints.json`)).json();
    res.send(data);
}
