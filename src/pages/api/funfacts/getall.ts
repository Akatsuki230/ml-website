import {NextApiRequest, NextApiResponse} from "next";
import {sql} from "@vercel/postgres";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.cookies.token !== process.env.ADMIN_PASSWORD) return res.status(401).json({error: "Unauthorized"});
    const funFacts = await sql`SELECT * FROM funfacts ORDER BY id ASC`;
    return res.status(200).json(funFacts.rows);
}