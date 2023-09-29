import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const cookies = req.headers.cookie ?? "";
    if (!cookies.includes(`token=${process.env.ADMIN_PASSWORD}`)) {
        res.end("Unauthorized");
        return;
    }

    const data = await (await fetch('https://mldkyt-s-website-default-rtdb.europe-west1.firebasedatabase.app/track.json')).json()

    res.json(data)
}