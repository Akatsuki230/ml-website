import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { sql } from "@vercel/postgres";
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

    // insert name, color and ip of request
    await sql`CREATE TABLE IF NOT EXISTS MeshsaveLikes (id SERIAL PRIMARY KEY, name TEXT, color TEXT, ip TEXT)`;
    await sql`INSERT INTO MeshsaveLikes (name, color, ip) VALUES (${name}, ${color}, ${hash})`;
    
    res.status(200).json({ success: true });
}