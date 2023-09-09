import { V2_MetaFunction } from "@remix-run/node";
import { useState } from "react";
import Navbar from "~/components/Navbar";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Astolfo Resource Pack" },
    { name: "title", content: "Astolfo Resource Pack | mldkyt's Website" },
    {
      name: "description",
      content:
        "Astolfo Resource Pack is a resource pack for Minecraft which replaces the loading screen, logo and ending screen to be more Astolfo themed.",
    },
    { name: "author", content: "mldkyt" },
    { name: "theme-color", content: "#2B0029" },
  ];
};

export default function Astolfo() {
  const [hideImages, setHideImages] = useState(false);

  const toggleImages = () => setHideImages(!hideImages);

  return (
    <>
      <h1 className="text-3xl mx-2">Astolfo Resource Pack</h1>
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
            alt="Astolfo Resource Pack"
          />
          <img
            className="mx-2 rounded-md"
            src="/javaw_Milpgk01lr.png"
            alt="Astolfo Resource Pack"
          />
          <img
            className="mx-2 rounded-md"
            src="/javaw_6NRIG1In28.png"
            alt="Astolfo Resource Pack"
          />
        </>
      )}

      <button className="mx-2 m-1 p-2 px-4 bg-gray-500 rounded-md" disabled>
        Download installer (coming sooooon)
      </button>
      <a href="https://github.com/Astolph0/AstolfoResourcePack/releases/tag/releases">
        <button className="mx-2 m-1 p-2 px-4 bg-green-500 rounded-md">
          Download and installation instructions
        </button>
      </a>

      <Navbar sel="project" />
    </>
  );
}
