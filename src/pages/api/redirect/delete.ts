import { NextApiRequest, NextApiResponse } from "next";
import {sql } from "@vercel/postgres";

export async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.cookies.token !== process.env.ADMIN_PASSWORD) return res.status(401).json({ error: "Unauthorized" });

    const { id } = JSON.parse(req.body);
    if (!id) return res.status(400).json({ error: "Missing body parameters" });
    if (typeof id !== "string") return res.status(400).json({ error: "Invalid body parameters" });
    await sql`DELETE FROM redirects WHERE id = ${id}`;
    return res.status(200).json({ success: true });
}