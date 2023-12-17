import {NextApiRequest, NextApiResponse} from "next";
import {ArticleBase, ArticleExtended} from "@/types/articles";



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const response = await fetch(`${process.env.FIREBASE_URL}/articles.json`);
    const articles = await response.json() as ArticleBase[];
    const newestArticleWithTimestamp = articles
        .map((x: ArticleExtended) => {
            x.timeOrdering = (x.postYear - 2020) * 365 + x.postMonth * 28 + x.postDay;
            return x;
        })
        .sort((a, b) => a.timeOrdering - b.timeOrdering)
        [0];

    res.json(newestArticleWithTimestamp);
}
