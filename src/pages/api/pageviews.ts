import { NextApiRequest, NextApiResponse } from "next";
import { isBanned } from "../../utils/ban";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        res.status(405).end();
        return
    }

    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    if (await isBanned(ip as string)) {
        res.status(403).json({ message: 'Your IP is banned from the API' });
        return
    }

    if (!req.body) {
        res.status(400).send({ message: 'Bad body' });
        return
    }

    let path = req.body["page"];

    if (path === undefined || path === null) {
        res.status(400).send({ message: 'Bad body' });
        return
    }

    if (!path.match(/^[a-z0-9\/_\-.]+$/)) {
        res.status(400).send({ message: 'Regex on parameter failed' });
        return
    }
    
    path = path.replace(/[.\-_\/]/g, '_')
    
    let res1 = await (await fetch(`${process.env.FIREBASE_URL}/visits/${path}.json`)).json()
    if (res1 == null) {
        await fetch(`${process.env.FIREBASE_URL}/visits/${path}.json`, {
            method: 'PUT',
            body: '1'
        });
        res1 = 1;
    }
    else if (typeof res1 === 'object') {
        await fetch(`${process.env.FIREBASE_URL}/visits/${path}.json`, {
            method: 'PUT',
            body: '1'
        });
        res1 = 1;
    }
    else {
        res1 = res1 + 1;
        await fetch(`${process.env.FIREBASE_URL}/visits/${path}.json`, {
            method: 'PUT',
            body: JSON.stringify(res1)
        })
    }


    res.status(200).send({
        views: res1
    })
}