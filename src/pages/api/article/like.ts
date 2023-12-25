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

    if (!req.body.postMonth || !req.body.postYear || !req.body.postID) {
        res.status(400).send("Missing postMonth/postYear/postID");
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
    if (!articles[articleIndex].likes) {
        articles[articleIndex].likes = [
            {
                ip: ipHashed
            }
        ];
    } else {
        if (articles[articleIndex].likes.find((x) => x.ip === ipHashed)) {
            res.status(400).send("Already liked");
            return;
        }

        articles[articleIndex].likes.push({
            ip: ipHashed
        });
    }

    await fetch(`${process.env.FIREBASE_URL}/articles.json`, {
        method: "PUT",
        body: JSON.stringify(articles)
    });

    res.status(200).send("Liked");
}
