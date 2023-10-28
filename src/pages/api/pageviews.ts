import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res :NextApiResponse) {
    if (req.method !== 'POST') {
        console.log('Handler method')
        res.status(400).send({ message: 'Invalid method' });
        return
    }

    if (!req.body) {
        console.log('Handler body')
        res.status(400).send({ message: 'Bad body' });
        return
    }

    let path = req.body["page"] as string;

    if (path === undefined || path === null) {
        console.log('Handler path existance')
        res.status(400).send({ message: 'Bad body' });
        return
    }

    if (!path.match(/^[a-z0-9\/_]+$/)) {
        console.log('Regex')
        res.status(400).send({ message: 'Regex on parameter failed' });
        return
    }
    
    path = path.replace(/[.-\/]/g, '_')
    
    let res1: number | object = await (await fetch(`${process.env.FIREBASE_URL}/visits/${path}.json`)).json()
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
