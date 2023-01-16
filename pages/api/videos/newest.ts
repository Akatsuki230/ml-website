// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type VideoRes = {
    id: string
}

type YoutubeSearchResponse = {
    items: Array<YoutubeSearchItem>
}

type YoutubeSearchItem = {
    id: YoutubeSearchItemId
}

type YoutubeSearchItemId = {
    videoId: string
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse<VideoRes>
) => {
    const key = 'AIzaSyDUqFkmq3nu27P0fJCpNHXA1jBSgjxIFZo'
    let channelReq = await fetch(`https://www.googleapis.com/youtube/v3/search?part=id&channelId=UC7JMha1kjOS7gsJXwNtosNw&order=date&maxResults=1&key=${key}`, {
        headers: {
            'Accept': 'application/json'
        }
    })
    let channel: YoutubeSearchResponse = await channelReq.json()
    
    res.send({
        id: channel.items[0].id.videoId
    })
}
