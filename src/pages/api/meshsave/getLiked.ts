import { MongoClient } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const mongo = new MongoClient(process.env.MONGO_URI || "mongodb+srv://vercel-admin-user:S7pZrZm64HNVcLXo@cluster0.9awq2ww.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
    await mongo.connect();
    const db = mongo.db("MeshsaveData");
    const collection = db.collection("Likes");
    const data = await (await collection.find({}).toArray()).map(x => {
        return {
            name: x.name,
            color: x.color
        }
    });
    // close
    await mongo.close();
    res.status(200).json(data);
}