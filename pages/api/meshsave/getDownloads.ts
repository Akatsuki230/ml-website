import { MongoClient, WithId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const mongo = new MongoClient(process.env.MONGO_URI || "mongodb+srv://vercel-admin-user:S7pZrZm64HNVcLXo@cluster0.9awq2ww.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
    await mongo.connect();
    const db = mongo.db("MeshsaveData");
    const collection = db.collection("Data");
    const data = await collection.findOne({ type: 'downloads' }) as WithId<{downloads: number}>;
    // close
    await mongo.close();
    res.status(200).json({ downloads: data.downloads });
}