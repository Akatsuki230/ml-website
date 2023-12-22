import { NextApiRequest, NextApiResponse } from "next";
import { ArticleBase, ArticleExtended } from "@/types/articles";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const response = await fetch(`${process.env.FIREBASE_URL}/articles.json`);
    const articles = (await response.json()) as ArticleBase[];
    const articlesWithTimestamps = articles.map((x: ArticleExtended) => {
        x.timeOrdering = (x.postYear - 2020) * 365 + x.postMonth * 28 + x.postDay;
        return x;
    });
    articlesWithTimestamps.sort((a, b) => b.timeOrdering - a.timeOrdering);

    let takeOnly25 = [] as ArticleExtended[];
    for (let i = 0; i < Math.min(articlesWithTimestamps.length, 25); i++) {
        takeOnly25.push(articlesWithTimestamps[i]);
    }

    res.json(takeOnly25);
}
