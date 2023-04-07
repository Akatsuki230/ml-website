import { State } from './_State';

// export a handler function
export default async (req, res) => {
    // get the visits from the database
    const client = await State.getInstance();
    // get from cluster0 database, the webdata collection
    // it should have a name "visitdata"
    const webdata = client.db('Cluster0').collection('webdata');
    const data = await webdata.findOne({name: 'visitdata'});
    // if the data is null, then it's the first visit
    if (data == null) {
        // insert a new document with name "visitdata" and visits: 1
        await webdata.insertOne({name: 'visitdata', visits: 1});
        res.status(200).json({visits: 1});
    } else {
        // otherwise, update the document with the new number of visits
        await webdata.findOneAndUpdate({name: 'visitdata'}, {$set: {visits: data.visits + 1}});
        res.status(200).json({visits: data.visits});
    }
}