import Navbar from "@/components/NavBar";
import { useState } from "react";



export default function AdminCustompages_Create() {
  const [createID, setCreateID] = useState("");
  const [createLabel, setCreateLabel] = useState("");
  const [createURL, setCreateURL] = useState("");
  const [createType, setCreateType] = useState("redirect");
  const [createBgType, setCreateBgType] = useState("colour");
  const [createBgColour, setCreateBgColour] = useState("#000000");
  const [createBgImage, setCreateBgImage] = useState("");
  const [createTextColour, setCreateTextColour] = useState("#ffffff");
  const [createTextBgColour, setCreateTextBgColour] = useState("#000000");
  const [createTextBgColourOpacity, setCreateTextBgColourOpacity] = useState(0);

  const create = () => {
    fetch('/api/custompages/create', {
      method: 'POST',
      body: JSON.stringify({
        id: createID,
        label: createLabel,
        url: createURL,
        type: createType,
        bgType: createBgType,
        bgColour: createBgType == 'colour' ? createBgColour : createBgImage,
        textColour: createTextColour,
        textBgColour: createTextBgColour,
        textBgOpacity: createTextBgColourOpacity
      })
    }).then(x => x.text()).then(x => {
      alert(x);
      location.href = '/admin/custompages';
    })
  }

  return (
    <>
      <a href="/admin/custompages">
        <button className="bg-blue-600 p-1 px-2 m-1 rounded-md">Back</button>
      </a>
      <h2 className="text-2xl m-2">General settings</h2>
      <label className="m-1" htmlFor="id">
        ID
      </label>
      <input className="bg-black" type="text" name="id" id="id" value={createID} onChange={x=>setCreateID(x.currentTarget.value)} />
      <br />
      <label className="m-1" htmlFor="label">
        Label
      </label>
      <input className="bg-black" type="text" name="label" id="label" value={createLabel} onChange={x=>setCreateLabel(x.currentTarget.value)} />
      <br />
      <label className="m-1" htmlFor="url">
        URL
      </label>
      <input className="bg-black" type="text" name="url" id="url" value={createURL} onChange={x=>setCreateURL(x.currentTarget.value)} />
      <br />
      <label className="m-1" htmlFor="type">
        Type
      </label>
      <select className="bg-black" name="type" id="type" value={createType} onChange={x=>setCreateType(x.currentTarget.value)}>
        <option value="redirect">Redirect</option>
        <option value="image">Image</option>
        <option value="file">File</option>
      </select>
      <h2 className="text-2xl m-2">Theme settings</h2>
      <label className="m-1" htmlFor="bgType">
        Background Type
      </label>
      <select name="bgType" id="bgType" className="bg-black" value={createBgType} onChange={x=>setCreateBgType(x.currentTarget.value)}>
        <option value="colour">Colour</option>
        <option value="imageStretch">Image</option>
      </select>
      <br />
      <>
        <label className="m-1" htmlFor="bgColour">
          Background Colour
        </label>
        <input
          className="bg-black"
          type="color"
          name="bgColour"
          id="bgColour"
          value={createBgColour}
          onChange={x=>setCreateBgColour(x.currentTarget.value)}
        />
      </>
      <>
        <label className="m-1" htmlFor="bgImage">
          Background Image
        </label>
        <input className="bg-black" type="url" name="bgImage" id="bgImage" value={createBgImage} onChange={x=>setCreateBgImage(x.currentTarget.value)} />
      </>
      <br />
      <label className="m-1" htmlFor="textColour">
        Text Colour
      </label>
      <input
        className="bg-black"
        type="color"
        name="textColour"
        id="textColour"
        defaultValue="#ffffff"
        value={createTextColour}
        onChange={x=>setCreateTextColour(x.currentTarget.value)}
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
        defaultValue="#000000"
        value={createTextBgColour}
        onChange={x=>setCreateTextBgColour(x.currentTarget.value)}
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
        defaultValue="255"
        value={createTextBgColourOpacity}
        onChange={x=>setCreateTextBgColourOpacity(Number(x.currentTarget.value))}
      />
      <br />
      <button className="bg-blue-600 p-1 m-2 rounded-md" onClick={create}>Create</button>
      <Navbar sel="" />
    </>
  );
}
