import { sql } from "@vercel/postgres";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.cookies.token !== process.env.ADMIN_PASSWORD) return res.status(401).json({error: "Unauthorized"});

    const {id, url, label, type} = JSON.parse(req.body) as {id: string, url: string, label: string, type: string};
    if (!id || !url || !label || !type) return res.status(400).json({error: "Missing body parameters"})
    if (id.length === 0 || url.length === 0 || label.length === 0 || type.length === 0) return res.status(400).json({error: "Empty body parameters"})
    const {rowCount} = await sql`SELECT * FROM redirects WHERE id = ${id}`;
    if (rowCount > 0) return res.status(400).json({error: "ID already in use"});
    await sql`INSERT INTO redirects (id, url, label, type) VALUES (${id}, ${url}, ${label}, ${type})`;
    return res.status(200).json({success: true});
}