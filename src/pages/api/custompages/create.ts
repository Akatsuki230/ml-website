import { NextApiRequest, NextApiResponse } from "next";
// export const action: ActionFunction = async ({ request }) => {
//   const formData = await request.formData();
//   if (
//     !formData.has("id") ||
//     !formData.has("label") ||
//     !formData.has("url") ||
//     !formData.has("type") ||
//     !formData.has("bgType") ||
//     !formData.has("textColour") ||
//     !formData.has("textBgColour") ||
//     !formData.has("textBgOpacity")
//   )
//     return redirect(`/admin/custompages/create`, 302);
//   const bgType = formData.get("bgType")!.toString();
//   let bgValue = "";
//   if (bgType == "colour") {
//     bgValue = formData.get("bgColour")!.toString();
//   } else if (bgType == "imageStretch") {
//     bgValue = formData.get("bgImage")!.toString();
//   } else {
//     console.log("Invalid bgType");
//     return redirect(`/admin/custompages/create`, 302);
//   }

//   const dataCheck = await (
//     await fetch(
//       `${process.env.FIREBASE_URL}/redirects/${formData
//         .get("id")!
//         .toString()}.json`
//     )
//   ).json();
//   if (dataCheck != null) {
//     console.log("Already exists");
//     return redirect(`/admin/custompages/create`, 302);
//   }

//   const textBgColour = `#${Number(
//     formData.get("textBgOpacity")!.toString()
//   ).toString(16)}${formData.get("textBgColour")!.toString().substring(1)}`;

//   await fetch(
//     `${process.env.FIREBASE_URL}/redirects/${formData
//       .get("id")!
//       .toString()}.json`,
//     {
//       method: "PUT",
//       body: JSON.stringify({
//         url: formData.get("url")!.toString(),
//         label: formData.get("label")!.toString(),
//         views: 0,
//         type: formData.get("type")!.toString(),
//         themeType: formData.get("bgType")!.toString(),
//         themeBgValue: bgValue,
//         themeTextColor: formData.get("textColour")!.toString(),
//         themeTextBgColor: textBgColour,
//       }),
//     }
//   );

//   return redirect(`/admin/custompages`, 302);
// };

export default async function handler(req: NextApiRequest, res: NextApiResponse){
  const cookies = req.headers.cookie ?? "";
  if (!cookies.includes(`token=${process.env.ADMIN_PASSWORD}`)) {
    res.end("Unauthorized");
    return;
  }

  const { id, label, url, type, bgType, bgColour, textColour, textBgColour, textBgOpacity } = JSON.parse(req.body) as {id: string, label: string, url: string, type: string, bgType: string, bgColour: string, textColour: string, textBgColour: string, textBgOpacity: string};
  if (id === undefined || label === undefined || url === undefined || type === undefined || bgType === undefined || bgColour === undefined || textColour === undefined || textBgColour === undefined || textBgOpacity === undefined){
    res.end("Invalid request");
    return;
  }

  let bgValue = "";
  if (bgType == "colour" || bgType == "imageStretch") {
    bgValue = textBgColour;
  } else {
    console.log("Invalid bgType");
    res.end("Invalid request");
    return;
  }

  const textBgColourFull = `#${Number(
    textBgOpacity
  ).toString(16)}${textBgColour.substring(1)}`;

  const dataCheck = await (
    await fetch(
      `${process.env.FIREBASE_URL}/redirects/${id}.json`
    )
  ).json();
  if (dataCheck != null) {
    console.log("Already exists");
    res.end("Already exists");
    return;
  }

  await fetch(
    `${process.env.FIREBASE_URL}/redirects/${id}.json`,
    {
      method: "PUT",
      body: JSON.stringify({
        url: url,
        label: label,
        views: 0,
        type: type,
        themeType: bgType,
        themeBgValue: bgValue,
        themeTextColor: textColour,
        themeTextBgColor: textBgColourFull,
      }),
    }
  );

  res.end("Success");
}