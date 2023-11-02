import { NextApiRequest, NextApiResponse } from "next";

/**
 * 
 * @param {NextApiRequest} req 
 * @param {NextApiResponse} res 
 * @returns 
 */
export default async function handler(req, res){
  const cookies = req.headers.cookie ?? "";
  if (!cookies.includes(`token=${process.env.ADMIN_PASSWORD}`)) {
    res.end("Unauthorized");
    return;
  }

  const { id, url, pageTitle, embedTitle, embedDescription, embedColor, embedAuthor, siteTitle, siteDescription } = JSON.parse(req.body);
  if (id === undefined || url === undefined || pageTitle === undefined || embedTitle === undefined || embedDescription === undefined || embedColor === undefined || embedAuthor === undefined || siteTitle === undefined || siteDescription === undefined) {
    res.end("Invalid request");
    return;
  }

  const dataCheck = await (
    await fetch(
      `${process.env.FIREBASE_URL}/redirects/${id}.json`
    )
  ).json();
  if (dataCheck == null) {
    console.log("Not found");
    res.end("Not found");
    return;
  }

  await fetch(
    `${process.env.FIREBASE_URL}/redirects/${id}.json`,
    {
      method: "PATCH",
      body: JSON.stringify({
        url: url,
        pageTitle: pageTitle,
        embedTitle: embedTitle,
        embedDescription: embedDescription,
        embedColor: embedColor,
        embedAuthor: embedAuthor,
        siteTitle: siteTitle,
        siteDescription: siteDescription
      }),
    }
  );

  res.end("Success");
}