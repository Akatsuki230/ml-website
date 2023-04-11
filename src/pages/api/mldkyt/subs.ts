import { MongoClient, WithId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import dayjs from "dayjs";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const mongo = new MongoClient(process.env.MONGO_URI || "mongodb+srv://vercel-admin-user:S7pZrZm64HNVcLXo@cluster0.9awq2ww.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
    await mongo.connect();
    const db = mongo.db("Cluster0");
    const webdata = db.collection("webdata");
    // get subs
    let subs = await webdata.findOne({ name: 'subs' }) as WithId<{lastDate: Date, subs: number}>;
// lastDate holds the last date the subs were updated
    const lastDate = dayjs(subs.lastDate);
    const now = dayjs();
    // if the last date the subs were updated is more than 1 day ago, update the subs
    if (now.diff(lastDate, 'day') > 1) {
        // get subs from youtube
        const subs1 = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UC7JMha1kjOS7gsJXwNtosNw&key=AIzaSyAUkLmdKNaosfUlnV27jI78NYB-ZvOQDDE`).then(x => x.json());
        // update subs in db
        await webdata.updateOne({ name: 'subs' }, { $set: { subs: Number(subs1.items[0].statistics.subscriberCount), lastDate: new Date() } });
        // get subs again
        subs = await webdata.findOne({ name: 'subs' }) as WithId<{lastDate: Date, subs: number}>;
    }
    // close
    await mongo.close();
    res.json({
        subs: subs.subs
    })
}