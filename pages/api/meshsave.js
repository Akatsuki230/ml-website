import { statSync, createReadStream } from "fs";
import { State } from "./_State";

export default async function handler(req, res) {
    const client = await State.getInstance();
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