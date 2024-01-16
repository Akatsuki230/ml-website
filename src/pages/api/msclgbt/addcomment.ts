import { NextApiRequest, NextApiResponse } from "next";

type CommentType = {
    name: string;
    comment: string;
    ip: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.headers["content-type"] !== "application/json") {
        res.status(400).json({ error: "Invalid request" });
        return;
    }

    const { name, comment } = req.body as CommentType;
    const ip = req.headers["cf-connnecting-ip"]?.toString() || req.headers["x-forwarded-for"]?.toString() || req.headers["x-real-ip"]?.toString() || req.socket.remoteAddress.toString();

    let comments = (await (await fetch(`${process.env.FIREBASE_URL}/msclgbt/commentstoapprove.json`)).json()) as CommentType[] | null;
    if (comments === null) {
        await fetch(`${process.env.FIREBASE_URL}/msclgbt/commentstoapprove.json`, {
            method: "PUT",
            body: JSON.stringify([{ name, comment, ip }])
        });
        res.status(204).end();
        return;
    }

    comments = [{ name, comment, ip }, ...comments];
    await fetch(`${process.env.FIREBASE_URL}/msclgbt/commentstoapprove.json`, {
        method: "PUT",
        body: JSON.stringify(comments)
    });

    res.status(204).end();
}
