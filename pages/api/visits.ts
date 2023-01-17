import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

type VisitsDoc = {
    name: string;
    visits: number;
}

type ResponseData = {
    visits: number;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    let client = new MongoClient("mongodb+srv://mldkyt:Ix2s5Vr1HknaToXB@cluster0.nhsmboe.mongodb.net/Cluster0?retryWrites=true&w=majority");
    let coll = client.db("Cluster0").collection("PageInfo");
    let doc = await coll.findOne() as VisitsDoc | null;
    if (doc == null) {
        doc = { name: "default", visits: 0 };
        await coll.insertOne(doc);
    }
    doc.visits++;
    await coll.updateOne({}, { $set: { visits: doc.visits } });
    await client.close();
    res.send({ visits: doc.visits });
}