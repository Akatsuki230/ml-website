// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type VideoRes = {
    id: string,
    error: string
}

type YoutubeSearchResponse = {
    items: Array<YoutubeSearchItem>,
    error: YoutubeError
}

type YoutubeSearchItem = {
    id: YoutubeSearchItemId
}

type YoutubeSearchItemId = {
    videoId: string
}

type YoutubeError = {
    code: number,
    message: string
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
    let response = await channelReq.json()
    console.log(response)
    let channel = <YoutubeSearchResponse> response
    
    if (channel.error != null && channel.error.message != "") {
        res.status(500).json({ error: channel.error.message, id: ''})
    }
    else {
        res.status(200).json({ id: channel.items[0].id.videoId, error: ''})
    }
}
