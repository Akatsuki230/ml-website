import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    let data = await (await fetch(`${process.env.FIREBASE_URL}/ml-website/socialbuttons.json`)).json();
    if (!data) data = {};
    res.json({
        github: data.githubClicks,
        twitch: data.twitchClicks,
        tiktok: data.tiktokClicks,
        youtube: data.ytClicks,
        patreon: data.patreonClicks
    });
}
