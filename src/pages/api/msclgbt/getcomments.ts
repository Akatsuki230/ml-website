import { NextApiRequest, NextApiResponse } from "next";

type CommentType = {
    name: string;
    comment: string;
    ip?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    let comments = (await (await fetch(`${process.env.FIREBASE_URL}/msclgbt/comments.json`)).json()) as CommentType[] | null;
    if (comments === null) {
        res.status(200).json([]);
        return;
    }

    comments.forEach((x) => {
        delete x.ip;
    });

    res.status(200).json(comments);
}
