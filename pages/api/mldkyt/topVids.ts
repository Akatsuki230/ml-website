import { MongoClient, WithId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import dayjs from "dayjs";

interface TopVids {
    lastDate: Date,
    vids: {
        id: string,
        title: string,
        views: number
    }[]
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const mongo = new MongoClient(process.env.MONGO_URI || "mongodb+srv://vercel-admin-user:S7pZrZm64HNVcLXo@cluster0.9awq2ww.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
    await mongo.connect();
    const db = mongo.db("Cluster0");
    const webdata = db.collection("webdata");
    // get subs
    let subs = await webdata.findOne({ name: 'top-vids' }) as WithId<TopVids>;
// lastDate holds the last date the subs were updated
    const lastDate = dayjs(subs.lastDate);
    const now = dayjs();
    // if the last date the subs were updated is more than 1 day ago, update the subs
    if (now.diff(lastDate, 'day') > 1) {
        // get subs from youtube
        const videos1 = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UC7JMha1kjOS7gsJXwNtosNw&order=viewCount&type=video&key=AIzaSyDUqFkmq3nu27P0fJCpNHXA1jBSgjxIFZo`).then(x => x.json());
        // update subs in db
        await webdata.updateOne({ name: 'top-vids' }, { $set: { subs: Number(videos1.items[0].statistics.subscriberCount), lastDate: new Date() } });
        // get subs again
        subs = await webdata.findOne({ name: 'subs' }) as WithId<TopVids>;
    }
    // close
    await mongo.close();
    res.json({
        subs: subs.subs
    })
}