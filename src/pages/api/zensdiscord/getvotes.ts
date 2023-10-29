import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const data = await (await fetch(`${process.env.FIREBASE_URL}/zensdiscord.json`)).json();

    res.status(200).json(data);
}
