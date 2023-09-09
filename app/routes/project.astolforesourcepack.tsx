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

      <p>Installer version: 1.0</p>
      <a href="https://github.com/Astolph0/AstolfoResourcePackInstaller/releases/download/release-1.0/AstolfoResourcePackInstaller.exe">
        <button className="mx-2 m-1 p-2 px-4 bg-blue-500 rounded-md">
          Download installer (recommended!)
        </button>
      </a>
      <a href="https://github.com/Astolph0/AstolfoResourcePack/releases/tag/releases">
        <button className="mx-2 m-1 p-2 px-4 bg-gray-500 rounded-md">
          Manual download and installation instructions
        </button>
      </a>

      
      {hideImages || (
        <>
          <img
            className="mx-2 rounded-md"
            src="/javaw_XU7cPPUNy2.png"
            alt="Astolfo Resource Pack"
          />
          <img
            className="mx-2 rounded-md"
            src="/javaw_9CTZlO2WlC.png"
            alt="Astolfo Resource Pack"
          />
          <img
            className="mx-2 rounded-md"
            src="/javaw_fcqiaAZDlS.png"
            alt="Astolfo Resource Pack"
          />
        </>
      )}

      
      <p>Installer version: 1.0</p>
      <a href="https://github.com/Astolph0/AstolfoResourcePackInstaller/releases/download/release-1.0/AstolfoResourcePackInstaller.exe">
        <button className="mx-2 m-1 p-2 px-4 bg-blue-500 rounded-md">
          Download installer (recommended!)
        </button>
      </a>
      <a href="https://github.com/Astolph0/AstolfoResourcePack/releases/tag/releases">
        <button className="mx-2 m-1 p-2 px-4 bg-gray-500 rounded-md">
          Manual download and installation instructions
        </button>
      </a>

      <Navbar sel="project" />
    </>
  );
}
