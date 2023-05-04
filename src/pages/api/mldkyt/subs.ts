import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    let subs = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UC7JMha1kjOS7gsJXwNtosNw&key=AIzaSyAUkLmdKNaosfUlnV27jI78NYB-ZvOQDDE`).then(x => x.json());

    res.json({
        subs: subs.items[0].statistics.subscriberCount
    })
}