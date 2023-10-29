import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const current = await (await fetch(`${process.env.FIREBASE_URL}/zensdiscord/unbanvotes.json`)).json();
    if (current == null || isNaN(Number(current))) {
        await fetch(`${process.env.FIREBASE_URL}/zensdiscord/unbanvotes.json`, {
            method: "PUT",
            body: "1",
        });
    }
    else {
        await fetch(`${process.env.FIREBASE_URL}/zensdiscord/unbanvotes.json`, {
            method: "PUT",
            body: String(Number(current) + 1),
        });
    }

    res.status(200).end();
}
