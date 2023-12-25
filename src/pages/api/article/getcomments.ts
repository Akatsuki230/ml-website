import { NextApiRequest, NextApiResponse } from "next";
import { ArticleBase } from "@/types/articles";
import * as crypto from "crypto";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") {
        res.status(405).send("Post is only allowed");
        return;
    }

    if (!req.query.postMonth || !req.query.postYear || !req.query.postID) {
        res.status(400).send("Missing postMonth/postYear/postID/comment/username");
        return;
    }

    if (typeof req.query.postMonth !== "string" || typeof req.query.postYear !== "string" || typeof req.query.postID !== "string") {
        res.status(400).send("postMonth/postYear/postID has to be string");
        return;
    }

    const response = await fetch(`${process.env.FIREBASE_URL}/articles.json`);

    const articles = (await response.json()) as ArticleBase[];
    const articleIndex = articles.findIndex((x) => x.id === req.query.postID.toString() && x.postMonth.toString() === req.query.postMonth.toString() && x.postYear.toString() === req.query.postYear.toString());
    if (articleIndex === -1) {
        res.status(404).send("");
    }

    if (!articles[articleIndex].comments) {
        articles[articleIndex].comments = [];
    }

    const ip = (req.headers["x-real-ip"] || req.socket.remoteAddress || "").toString();
    const ipHashed = crypto.createHash("sha256").update(ip).digest("hex");

    const commentIndex = articles[articleIndex].comments.findIndex((x) => x.ip === ipHashed);
    let hasCommented = commentIndex !== -1;

    for (const element of articles[articleIndex].comments) {
        delete element.ip;
    }

    res.status(200).send({
        comments: articles[articleIndex].comments,
        hasCommented,
        myComment: hasCommented ? articles[articleIndex].comments[commentIndex] : undefined
    });
}
