import { sql } from "@vercel/postgres";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { content, author } = req.body;
    if (!content || !author) {
        res.status(400).json({ message: "Content or author is empty." });
        return;
    }
    if (content.length < 0 || content.length > 100) {
        res.status(400).json({ message: "Content must be between 1 and 100 characters." });
        return;
    }
    if (author.length < 0 || author.length > 25) {
        res.status(400).json({ message: "Author must be between 1 and 25 characters." });
        return;
    }
    
    await sql`CREATE TABLE IF NOT EXISTS SpawnBaseSigns (id SERIAL PRIMARY KEY, content TEXT, author TEXT)`;
    await sql`INSERT INTO SpawnBaseSigns (content, author) VALUES (${content}, ${author})`;
    res.status(200).json({ message: "Success." });
}