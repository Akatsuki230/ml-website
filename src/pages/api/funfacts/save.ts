import {NextApiRequest, NextApiResponse} from "next";
import {sql} from "@vercel/postgres";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.cookies.token !== process.env.ADMIN_PASSWORD) return res.status(401).json({error: "Unauthorized"});

    const {id, fact} = JSON.parse(req.body) as {id: string, fact: string};
    if (!id || !fact) return res.status(400).json({error: "Missing body parameters"})
    if (id.length === 0 || fact.length === 0) return res.status(400).json({error: "Empty body parameters"})
    const {rowCount} = await sql`UPDATE funfacts SET fact = ${fact} WHERE id = ${id}`;
    if (rowCount === 0) return res.status(400).json({error: "ID not found"});
    return res.status(200).json({success: true});
}