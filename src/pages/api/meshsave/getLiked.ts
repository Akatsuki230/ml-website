import { sql } from "@vercel/postgres";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // create table if not exists
    await sql`CREATE TABLE IF NOT EXISTS MeshsaveLikes (id SERIAL PRIMARY KEY, name TEXT, color TEXT, ip TEXT)`;
    const { rows: data } = await sql`SELECT * FROM MeshsaveLikes`;
    res.status(200).json(data);
}