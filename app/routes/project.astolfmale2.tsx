import { V2_MetaFunction } from "@remix-run/node";
import { useState } from "react";
import Navbar from "~/components/Navbar";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Astolfmale2 Resource Pack" },
    { name: "title", content: "Astolfmale2 | mldkyt's Website" },
    {
      name: "description",
      content:
        "Astolfmale2 is a resource pack for Minecraft which replaces the loading screen, logo and ending screen to be more Astolfo themed.",
    },
    { name: "author", content: "mldkyt" },
  ];
};

export default function Astolfmale() {
  const [hideImages, setHideImages] = useState(false);

  const toggleImages = () => setHideImages(!hideImages);

  return (
    <>
      <h1 className="text-3xl mx-2">Astolfmale2 Resource Pack</h1>
      <p className="mx-2">MINECRAFT: :3 EDITION LETS GOOOO</p>
      <p className="mx-2">
        This resource pack changes the Minecraft loading screen, logo and ending
        screen to be more Astolfo themed.
      </p>
      <h2 className="text-xl mx-2">
        Images{" "}
        <button className="text-blue-500 cursor-pointer" onClick={toggleImages}>
          {hideImages ? "show" : "hide"}
        </button>
      </h2>
      {hideImages || (
        <>
          <img
            className="mx-2 rounded-md"
            src="/javaw_ULMDv1zpSI.png"
            alt="Astolfmale2 Resource Pack"
          />
          <img
            className="mx-2 rounded-md"
            src="/javaw_Milpgk01lr.png"
            alt="Astolfmale2 Resource Pack"
          />
          <img
            className="mx-2 rounded-md"
            src="/javaw_6NRIG1In28.png"
            alt="Astolfmale2 Resource Pack"
          />
        </>
      )}

      <a href="https://github.com/Astolph0/Astolfmale2/releases/tag/releases">
        <button className="mx-2 m-1 p-2 px-4 bg-green-500 rounded-md">
          Download and installation instructions
        </button>
      </a>

      <Navbar sel="project" />
    </>
  );
}
