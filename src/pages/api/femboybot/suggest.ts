import { isBanned } from "../../../utils/ban";
import { checkRequest, registerRequest } from "../../../utils/cooldown";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log('method suggestbot', req.method)
    if (req.method !== 'POST') {
        res.status(405).end();
        return
    }

    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const check = await checkRequest('femboybotsuggest', ip as string);
    if (check) {
        res.status(429).send('You are being ratelimited');
        return;
    }

    if (await isBanned(ip as string)) {
        res.status(403).end();
        return
    }

    await registerRequest('femboybotsuggest', ip as string, 30000);
    
    // webhook: https://discordapp.com/api/webhooks/1172944361793802372/qry9agTq4nKmudTAmxAr9TcRrePjRRM6YqhuzZ7GYcZnofUvIyIfCXto6yXGWO2QqPFz
    // code
    const { suggestion } = JSON.parse(req.body);
    if (!suggestion) {
        res.status(400).send('Invalid request body');
        return;
    }

    await fetch('https://discordapp.com/api/webhooks/1172944361793802372/qry9agTq4nKmudTAmxAr9TcRrePjRRM6YqhuzZ7GYcZnofUvIyIfCXto6yXGWO2QqPFz', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            content: suggestion + '\n\nSuggest on https://mldkyt.com/femboybot/'
        })
    })
    res.status(200).send('Success');
}