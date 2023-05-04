import { sql } from "@vercel/postgres";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const ip = req.headers["x-forwarded-for"] as string || req.connection.remoteAddress as string;
    const hash = require('crypto').createHash('sha512').update(ip).digest('hex');

    // check if the hash is already in the database
    await sql`CREATE TABLE IF NOT EXISTS MeshsaveLikes (id SERIAL PRIMARY KEY, name TEXT, color TEXT, ip TEXT)`;
    const { rows: data } = await sql`SELECT * FROM MeshsaveLikes WHERE ip = ${hash}`;
    res.status(200).json({ liked: (data.length > 0 ? 'not' : 'eligible') });
}