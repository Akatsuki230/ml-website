import axios from "axios";
import { MongoClient } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { name, color } = req.body;

    const data = new FormData();
    data.append('text', name);
    data.append('lang', 'en');
    data.append('mode', 'username');
    data.append('api_user', '813686044');
    data.append('api_secret', 'XK364ovzdFUbUAkeMdr5');

    const sightEngineReport = await axios({
        url: 'https://api.sightengine.com/1.0/text/check.json',
        method:'post',
        data: data,
        headers: data.getHeaders()
    });

    if (sightEngineReport.data.profanity.matches.length > 0) {
        res.status(200).json({ success: false, reason: 'Profanity' });
        return;
    }

    if (sightEngineReport.data.personal.matches.length > 0) {
        res.status(200).json({ success: false, reason: 'Personal' });
        return;
    }

    if (sightEngineReport.data.link.matches.length > 0) {
        res.status(200).json({ success: false, reason: 'Links' });
        return;
    }

    const ip = req.headers["x-forwarded-for"] as string || req.connection.remoteAddress as string;
    const hash = require('crypto').createHash('sha512').update(ip).digest('hex');

    const mongo = new MongoClient(process.env.MONGO_URI || "mongodb+srv://vercel-admin-user:S7pZrZm64HNVcLXo@cluster0.9awq2ww.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
    await mongo.connect();
    const db = mongo.db("MeshsaveData");
    const collection = db.collection("Likes");
    // insert name, color and ip of request
    await collection.insertOne({
        name,
        color,
        ip: hash
    });
    // close
    await mongo.close();
    res.status(200).json({ success: true });
}