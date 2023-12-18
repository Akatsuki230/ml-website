import {NextApiRequest, NextApiResponse} from "next";

async function getIdeas() {
    const response = await fetch(`${process.env.FIREBASE_URL}/ideas.json`);
    let json = await response.json();
    if (json === null || json === "undefined") {
        json = [];
    }
    return json;
}

async function saveIdeas(ideas: any) {
    await fetch(`${process.env.FIREBASE_URL}/ideas.json`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(ideas)
    });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        res.status(405).json({message: "Method Not Allowed"});
        return;
    }

    if (req.headers["content-type"] !== "application/json") {
        res.status(400).json({message: "Bad Request"});
        return;
    }

    const { idea } = req.body;
    let ideas = await getIdeas();
    ideas.push(idea);
    await saveIdeas(ideas);

    res.status(204).end();
}
