import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const data = await (await fetch(process.env.FIREBASE_URL + '/femboys.json')).json();
    res.end(JSON.stringify(data));
}