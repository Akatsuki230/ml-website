import { MongoClient } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const ip = req.headers["x-forwarded-for"] as string || req.connection.remoteAddress as string;
    const hash = require('crypto').createHash('sha512').update(ip).digest('hex');

    const mongo = new MongoClient(process.env.MONGO_URI || "mongodb+srv://vercel-admin-user:S7pZrZm64HNVcLXo@cluster0.9awq2ww.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
    await mongo.connect();
    const db = mongo.db("MeshsaveData");
    const collection = db.collection("Likes");
    const data = await collection.find({ ip: hash }).toArray();
    // close
    await mongo.close();
    res.status(200).json({ liked: (data.length > 0 ? 'not' : 'eligible') });
}