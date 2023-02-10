import { MongoClient } from "mongodb";
import { statSync, createReadStream } from "fs";

export default async function handler(req, res) {
    const client = new MongoClient('mongodb+srv://mldkyt:Ix2s5Vr1HknaToXB@cluster0.nhsmboe.mongodb.net/Cluster0?retryWrites=true&w=majority');
    const webdata = client.db('Cluster0').collection('webdata');
    const data = await webdata.findOne({name: 'meshsavestat'});
    if (data == null) {
        await webdata.insertOne({name: 'meshsavestat', downloads: 1});
    } else {
        await webdata.findOneAndUpdate({name: 'meshsavestat'}, {$set: {downloads: data.downloads + 1}});
    }
    const stat = statSync('public/meshsave.txt');
    const file = createReadStream('public/meshsave.txt');
    res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Content-Length': stat.size,
        'Content-Disposition': 'attachment; filename=meshsave.txt'
    });
    file.pipe(res);
}