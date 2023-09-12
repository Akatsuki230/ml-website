// import { useLoaderData } from "@remix-run/react";
// import type { ActionFunction, LoaderFunction } from "@remix-run/node";
// import { redirect } from "@remix-run/node";
import Navbar from "@/components/NavBar";
import { GetServerSidePropsContext } from "next";
import React from "react";
import {Inter} from "next/font/google";

// export const loader: LoaderFunction = async ({ params, request }) => {
//   if (!params.id) return redirect("/admin/custompages", 302);

//   const cookies = request.headers.get("Cookie") ?? "";
//   if (!cookies.includes(`token=${process.env.ADMIN_PASSWORD}`)) {
//     return redirect("/admin/login", 302);
//   }

//   const data = await (
//     await fetch(`${process.env.FIREBASE_URL}/redirects/${params.id}.json`)
//   ).json();
//   data.id = params.id;
//   return {
//     customPage: data,
//     textBg: `#${data.themeTextBgColor.substring(3)}`,
//     textBgOpacity: parseInt(data.themeTextBgColor.substring(1, 3), 16),
//   };
// };

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  if (!ctx.params?.id) return { redirect: { destination: "/admin/custompages", permanent: false } };
  const cookies = ctx.req.headers.cookie ?? "";
  if (!cookies.includes(`token=${process.env.ADMIN_PASSWORD}`)) {
    return { redirect: { destination: "/admin/login", permanent: false } };
  }

  const data = await (
    await fetch(`${process.env.FIREBASE_URL}/redirects/${ctx.params.id}.json`)
  ).json();
  data.id = ctx.params.id;
  return {
    props: {
      customPage: data,
      textBg: `#${data.themeTextBgColor.substring(3)}`,
      textBgOpacity: parseInt(data.themeTextBgColor.substring(1, 3), 16),
    },
  };
}

// export const action: ActionFunction = async ({ params, request }) => {
//   const body = await request.formData();
//   if (
//     !body.has("id") ||
//     !body.has("label") ||
//     !body.has("type") ||
//     !body.has("bgType") ||
//     !body.has("bgColour") ||
//     !body.has("textColour") ||
//     !body.has("textBgColour") ||
//     !body.has("textBgOpacity")
//   )
//     return redirect(`/admin/custompages/${params.id}/properties`, 302);
//   const themeType: string = body.get("bgType")!.toString();
//   let themeBgColor: string;
//   if (themeType == "colour") {
//     themeBgColor = body.get("bgColour")!.toString();
//   } else {
//     themeBgColor = body.get("bgImage")!.toString();
//   }

//   const original = await (
//     await fetch(`${process.env.FIREBASE_URL}/redirects/${params.id}.json`)
//   ).json();

//   await fetch(`${process.env.FIREBASE_URL}/redirects/${params.id}.json`, {
//     method: "DELETE",
//   });

//   let textBgOpacityStr = Number(body.get("textBgOpacity")!.toString()).toString(
//     16
//   );
//   if (textBgOpacityStr.length == 1) textBgOpacityStr = "0" + textBgOpacityStr;

//   await fetch(
//     `${process.env.FIREBASE_URL}/redirects/${body.get("id")!.toString()}.json`,
//     {
//       method: "PUT",
//       body: JSON.stringify({
//         label: body.get("label")!.toString(),
//         type: body.get("type")!.toString(),
//         url: body.get("url")!.toString(),
//         themeType: themeType,
//         themeTextBgColor: `#${textBgOpacityStr}${body
//           .get("textBgColour")!
//           .toString()
//           .substring(1)}`,
//         themeTextColor: body.get("textColour")!.toString(),
//         themeBgValue: themeBgColor,
//         views: original.views,
//       }),
//     }
//   );
//   return redirect(
//     `/admin/custompages/${body.get("id")!.toString()}/properties`,
//     302
//   );
// };

const inter = Inter({ subsets: ["latin"] });

export default function AdminCustompagesIdProperties(props: { customPage: any; textBg: string; textBgOpacity: number }) {
  const [label, setLabel] = React.useState(props.customPage.label);
  const [url, setUrl] = React.useState(props.customPage.url);
  const [type, setType] = React.useState(props.customPage.type);
  const [bgType, setBgType] = React.useState(props.customPage.themeType);
  const [bgColour, setBgColour] = React.useState(props.customPage.themeBgValue);
  const [textColour, setTextColour] = React.useState(props.customPage.themeTextColor);
  const [textBgColour, setTextBgColour] = React.useState(props.textBg);
  const [textBgOpacity, setTextBgOpacity] = React.useState(props.textBgOpacity);

  const save = () => {
    fetch(`/api/custompages/update`, {
      method: "POST",
      body: JSON.stringify({
        id: props.customPage.id,
        label,
        url,
        type,
        bgType,
        bgColour,
        textColour,
        textBgColour,
        textBgOpacity,
      }),
    }).then(x => x.text()).then(x => {
      if (x !== "Success") {
        alert(x);
      }
      location.reload();
    });
  }

  return (
    <div className={`${inter.className} text-white`}>
      <h1 className="text-3xl m-2">Properties of {props.customPage.id}</h1>
      <h2 className="text-2xl m-2">General settings</h2>
      <label className="m-1" htmlFor="id">
        ID
      </label>
      <input
        className="bg-black"
        type="text"
        name="id"
        id="id"
        defaultValue={props.customPage.id}
        disabled
      />
      <br />
      <label className="m-1" htmlFor="label">
        Label
      </label>
      <input
        className="bg-black"
        type="text"
        name="label"
        id="label"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
      />
      <br />
      <label className="m-1" htmlFor="url">
        URL
      </label>
      <input
        className="bg-black"
        type="url"
        name="url"
        id="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <br />
      <label className="m-1" htmlFor="type">
        Type
      </label>
      <select
        className="bg-black"
        name="type"
        id="type"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="redirect">Redirect</option>
        <option value="image">Image</option>
        <option value="file">File</option>
      </select>
      <h2 className="text-2xl m-2">Theme settings</h2>
      <label className="m-1" htmlFor="bgType">
        Background Type
      </label>
      <select
        name="bgType"
        id="bgType"
        className="bg-black"
        value={bgType}
        onChange={(e) => setBgType(e.target.value)}
      >
        <option value="colour">Colour</option>
        <option value="imageStretch">Image</option>
      </select>
      <br />
      {props.customPage.themeType == "colour" && (
        <>
          <label className="m-1" htmlFor="bgColour">
            Background Colour
          </label>
          <input
            className="bg-black"
            type="color"
            name="bgColour"
            id="bgColour"
            value={bgColour}
            onChange={(e) => setBgColour(e.target.value)}
          />
        </>
      )}
      {props.customPage.themeType == "imageStretch" && (
        <>
          <label className="m-1" htmlFor="bgImage">
            Background Image
          </label>
          <input
            className="bg-black"
            type="url"
            name="bgImage"
            id="bgImage"
            value={bgColour}
            onChange={(e) => setBgColour(e.target.value)}
          />
        </>
      )}
      <br />
      <label className="m-1" htmlFor="textColour">
        Text Colour
      </label>
      <input
        className="bg-black"
        type="color"
        name="textColour"
        id="textColour"
        value={textColour}
        onChange={(e) => setTextColour(e.target.value)}
      />
      <br />
      <label className="m-1" htmlFor="textBgColour">
        Text Background Colour
      </label>
      <input
        className="bg-black"
        type="color"
        name="textBgColour"
        id="textBgColour"
        value={textBgColour}
        onChange={(e) => setTextBgColour(e.target.value)}
      />
      <br />
      <label className="m-1" htmlFor="textBgOpacity">
        Text Background Opacity
      </label>
      <input
        className="bg-black"
        type="range"
        name="textBgOpacity"
        id="textBgOpacity"
        min="0"
        max="255"
        value={textBgOpacity}
        onChange={(e) => setTextBgOpacity(parseInt(e.target.value))}
      />
      <br />
      <button onClick={save} className="bg-blue-600 p-1 m-2 rounded-md">Save</button>

      <button
        className="bg-blue-600 p-1 m-2 rounded-md"
        onClick={() => (location.href = "/admin/custompages")}
      >
        Return
      </button>
      <Navbar sel="" />
    </div>
  );
}
