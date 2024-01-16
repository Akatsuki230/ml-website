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

    const { name, comment, ip } = req.body as CommentType;

    if (!name || !comment || !ip) {
        res.status(400).json({ error: "Missing parameters" });
        return;
    }

    const ipRegex = /^(\d{1,3}\.){3}\d{1,3}$/;
    if (!ipRegex.test(ip)) {
        res.status(400).json({ error: "Invalid request" });
        return;
    }

    if (name.length < 3 || name.length > 32) {
        res.status(400).json({ error: "Name has to be longer than 3 letters and shorter than 32 letters" });
        return;
    }

    if (comment.length < 5 || comment.length > 1024) {
        res.status(400).json({ error: "Description has to be longer than 5 letters and shorter than 1024" });
        return;
    }

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
