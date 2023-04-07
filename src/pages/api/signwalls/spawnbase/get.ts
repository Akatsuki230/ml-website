import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";
import { MONGODB_CONN_STRING } from "@/components/Globals";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const client = new MongoClient(MONGODB_CONN_STRING);
    await client.connect();
    const signs = client.db('Minecraft').collection('SpawnBaseSigns');
    const arrayOfSigns = await signs.find({}).toArray();
    await client.close();
    res.status(200).json(
        arrayOfSigns.map(x => {
            return {
                content: x.content,
                author: x.author
            }
        })
    );
}