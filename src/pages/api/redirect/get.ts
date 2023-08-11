import {NextApiRequest, NextApiResponse} from "next";
import {sql} from "@vercel/postgres";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await new Promise(resolve => setTimeout(resolve, 1000));

    const {path} = req.query;
    if (!path) {
        return res.status(400).json({error: "Missing path"});
    }

    if (typeof path !== "string") {
        return res.status(400).json({error: "Invalid path"});
    }

    const data = await sql`SELECT * FROM redirects WHERE id = ${path}`
    if (data.rowCount === 0) {
        return res.status(404).json({error: "Not found"});
    }

    res.status(200).json({
        id: data.rows[0].id,
        url: data.rows[0].url,
        label: data.rows[0].label,
        views: data.rows[0].views,
        type: data.rows[0].type
    })
}