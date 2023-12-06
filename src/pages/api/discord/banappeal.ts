import { NextApiRequest, NextApiResponse } from "next";
import { isBanned } from "../../../utils/ban";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log('method banappeal', req.method)
    if (req.method !== 'POST') {
        res.status(405).end();
        return
    }

    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    if (await isBanned(ip as string)) {
        res.status(403).end();
        return
    }

    const body = JSON.parse(req.body);
    if (!body.appeal || !body.username) {
        res.status(400).send('Missing appeal or username')
        return
    }

    let banned = false;
    const response = await fetch(`${process.env.FIREBASE_URL}/discordstats/bans.json`);
    const array = await response.json();
    for (let i = 0; i < array.length; i++) {
        console.log(array[i].user, body.username)
        if (array[i].user == body.username) {
            console.log('banned')
            banned = true;
            break;
        }
    }

    if (!banned) {
        res.status(400).send('User not banned');
        return
    }

    let message = '# Ban Appeal\n';
    message += `**Username:** ${body.username}\n`;
    message += `**Appeal:** ${body.appeal}\n`; 
    await fetch('https://discord.com/api/webhooks/1172643017816015008/-bO19dXT5oLY0qnNltay9KxuX74pCSYVLYnbcviYVyeUQwIItN_Yu_vr5LJucb0cz4O4', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            content: message
        })
    })

    res.status(200).send('Ban appeal sent');
}