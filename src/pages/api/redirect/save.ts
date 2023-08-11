import {sql} from "@vercel/postgres";
import {NextApiRequest, NextApiResponse} from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.cookies.token !== process.env.ADMIN_PASSWORD) return res.status(401).json({error: "Unauthorized"});

    const {id, label, url, type} = JSON.parse(req.body) as { id: string, label: string, url: string, type: string };
    if (!id || !label || !url || !type) return res.status(400).json({error: "Missing body parameters"});
    if (id.length === 0 || label.length === 0 || url.length === 0 || type.length == 0) return res.status(400).json({error: "Empty body parameters"});

    await sql`UPDATE redirects
              SET label = ${label},
                  url   = ${url},
                  type  = ${type}
              WHERE id = ${id}`;
    return res.status(200).json({success: true});
}