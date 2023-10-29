import FinalNavbar from "@/components/NavBar";
import { GetServerSidePropsContext } from "next";
import React from "react";
import { Inter } from "next/font/google";

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  if (!ctx.params?.id)
    return {
      redirect: { destination: "/admin/custompages", permanent: false },
    };
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
    },
  };
}

const inter = Inter({ subsets: ["latin"] });

export default function AdminCustompagesIdProperties(props: {
  customPage: any;
  textBg: string;
  textBgOpacity: number;
}) {
  const [label, setLabel] = React.useState(props.customPage.label);
  const [url, setUrl] = React.useState(props.customPage.url);
  const [type, setType] = React.useState(props.customPage.type);

  const save = () => {
    fetch(`/api/custompages/update`, {
      method: "POST",
      body: JSON.stringify({
        id: props.customPage.id,
        label,
        url,
        type,
      }),
    })
      .then((x) => x.text())
      .then((x) => {
        if (x !== "Success") {
          alert(x);
        }
        location.reload();
      });
  };

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

      <br />
      <button onClick={save} className="bg-blue-600 p-1 m-2 rounded-md">
        Save
      </button>

      <button
        className="bg-blue-600 p-1 m-2 rounded-md"
        onClick={() => (location.href = "/admin/custompages")}
      >
        Return
      </button>
    </div>
  );
}
