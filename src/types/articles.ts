export type ArticleBase = {
    id: string;
    paragraphs: string[];
    postDay: number;
    postMonth: number;
    postYear: number;
    title: string;
    likes?: { ip: string }[];
    comments?: { username: string; ip: string; comment: string }[];
};

export type ArticleExtended = ArticleBase & { timeOrdering: number };
