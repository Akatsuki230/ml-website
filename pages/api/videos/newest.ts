// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type VideoRes = {
    id: string
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse<VideoRes>
) => {
    const key = 'AIzaSyDUqFkmq3nu27P0fJCpNHXA1jBSgjxIFZo'
    let channel = await fetch(`https://www.googleapis.com/youtube/v3/search?part=id&channelId=UC7JMha1kjOS7gsJXwNtosNw&order=date&maxResults=1&key=${key}`, {
        headers: {
            'Accept': 'application/json'
        }
    })
    channel = await channel.json()
    channel = channel['items'][0]['id']['videoId']
    
    res.send({
        id: channel.toString()
    })
}
