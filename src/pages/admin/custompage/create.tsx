import FinalNavbar from "@/components/NavBar";
import { useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function AdminCustompages_Create() {
  const [createID, setCreateID] = useState("");
  const [createLabel, setCreateLabel] = useState("");
  const [createURL, setCreateURL] = useState("");
  const [createType, setCreateType] = useState("redirect");

  const create = () => {
    fetch("/api/custompages/create", {
      method: "POST",
      body: JSON.stringify({
        id: createID,
        label: createLabel,
        url: createURL,
        type: createType,
      }),
    })
      .then((x) => x.text())
      .then((x) => {
        alert(x);
        location.href = "/admin/custompages";
      });
  };

  return (
    <div className={`${inter.className} text-white`}>
      <a href="/admin/custompages">
        <button className="bg-blue-600 p-1 px-2 m-1 rounded-md">Back</button>
      </a>
      <h2 className="text-2xl m-2">General settings</h2>
      <label className="m-1" htmlFor="id">
        ID
      </label>
      <input
        className="bg-black"
        type="text"
        name="id"
        id="id"
        value={createID}
        onChange={(x) => setCreateID(x.currentTarget.value)}
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
        value={createLabel}
        onChange={(x) => setCreateLabel(x.currentTarget.value)}
      />
      <br />
      <label className="m-1" htmlFor="url">
        URL
      </label>
      <input
        className="bg-black"
        type="text"
        name="url"
        id="url"
        value={createURL}
        onChange={(x) => setCreateURL(x.currentTarget.value)}
      />
      <br />
      <label className="m-1" htmlFor="type">
        Type
      </label>
      <select
        className="bg-black"
        name="type"
        id="type"
        value={createType}
        onChange={(x) => setCreateType(x.currentTarget.value)}
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
      <button className="bg-blue-600 p-1 m-2 rounded-md" onClick={create}>
        Create
      </button>
      <FinalNavbar sel="" />
    </div>
  );
}
