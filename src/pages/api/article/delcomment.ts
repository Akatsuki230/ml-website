import { NextApiRequest, NextApiResponse } from "next";
import { ArticleBase, ArticleExtended } from "@/types/articles";
import * as crypto from "crypto";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "DELETE") {
        res.status(405).send("Delete is only allowed");
        return;
    }

    if (req.headers["content-type"] !== "application/json") {
        res.status(400).send("The content has to be sent in application/json format.");
        return;
    }

    if (!req.body.postMonth || !req.body.postYear || !req.body.postID) {
        res.status(400).send("Missing postMonth/postYear/postID/comment/username");
        return;
    }

    const response = await fetch(`${process.env.FIREBASE_URL}/articles.json`);

    const articles = (await response.json()) as ArticleBase[];
    const articleIndex = articles.findIndex((x) => x.id === req.body.postID && x.postMonth === req.body.postMonth && x.postYear === req.body.postYear);
    if (articleIndex === -1) {
        res.status(404).send("Cannot find article");
    }

    const ip = (req.headers["x-real-ip"] || req.socket.remoteAddress || "").toString();
    const ipHashed = crypto.createHash("sha256").update(ip).digest("hex");

    const index = articles[articleIndex].comments.findIndex((x) => x.ip === ipHashed);
    if (index === -1) {
        res.status(404).send("Could not find comment");
    }
    articles[articleIndex].comments = articles[articleIndex].comments.filter((x) => x.ip !== ipHashed);

    await fetch(`${process.env.FIREBASE_URL}/articles.json`, {
        method: "PUT",
        body: JSON.stringify(articles)
    });

    res.status(200).send("Comment deleted");
}
