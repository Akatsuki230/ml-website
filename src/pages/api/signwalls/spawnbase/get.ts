import { NextApiRequest, NextApiResponse } from "next";
import { sql } from "@vercel/postgres";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // create table if not exists
    await sql`CREATE TABLE IF NOT EXISTS SpawnBaseSigns (id SERIAL PRIMARY KEY, content TEXT, author TEXT)`;
    const { rows: signs } = await sql`SELECT * FROM SpawnBaseSigns`;
    res.status(200).json(
        signs.map(x => {
            return {
                content: x.content,
                author: x.author
            }
        })
    );
}