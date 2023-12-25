import { NextApiRequest, NextApiResponse } from "next";
import { ArticleBase, ArticleExtended } from "@/types/articles";
import * as crypto from "crypto";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        res.status(405).send("Post is only allowed");
        return;
    }
    if (req.headers["content-type"] !== "application/json") {
        res.status(400).send("The content has to be sent in application/json format.");
        return;
    }

    if (!req.body.postMonth || !req.body.postYear || !req.body.postID || !req.body.comment || !req.body.username) {
        res.status(400).send("Missing postMonth/postYear/postID/comment/username");
        return;
    }

    if (req.body.comment.length < 5 || req.body.comment.length > 1000) {
        res.status(400).send("Comment has invalid length");
        return;
    }

    if (req.body.username.length < 2 || req.body.username.length > 20) {
        res.status(400).send("Username has invalid length");
        return;
    }

    const response = await fetch(`${process.env.FIREBASE_URL}/articles.json`);

    const articles = (await response.json()) as ArticleBase[];
    const articleIndex = articles.findIndex((x) => x.id === req.body.postID && x.postMonth === req.body.postMonth && x.postYear === req.body.postYear);
    if (articleIndex === -1) {
        res.status(404).send("");
    }

    const ip = (req.headers["x-real-ip"] || req.socket.remoteAddress || "").toString();
    const ipHashed = crypto.createHash("sha256").update(ip).digest("hex");
    if (!articles[articleIndex].comments) {
        articles[articleIndex].comments = [
            {
                ip: ipHashed,
                comment: req.body.comment,
                username: req.body.username
            }
        ];
    } else {
        if (articles[articleIndex].comments.find((x) => x.ip === ipHashed)) {
            const index2 = articles[articleIndex].comments.findIndex((x) => x.ip === ipHashed);
            articles[articleIndex].comments[index2].comment = req.body.comment;
            articles[articleIndex].comments[index2].username = req.body.username;
            await fetch(`${process.env.FIREBASE_URL}/articles.json`, {
                method: "PUT",
                body: JSON.stringify(articles)
            });
            res.status(200).send("Comment updated");
            return;
        }

        articles[articleIndex].comments.push({
            ip: ipHashed,
            comment: req.body.comment,
            username: req.body.username
        });
    }

    await fetch(`${process.env.FIREBASE_URL}/articles.json`, {
        method: "PUT",
        body: JSON.stringify(articles)
    });

    res.status(200).send("Comment submitted");
}
