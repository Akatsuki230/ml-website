import type { V2_MetaFunction } from "@remix-run/node";
import Navbar from "~/components/Navbar";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Asphalt Roads" },
    { name: "title", content: "Asphalt Roads | mldkyt's Website" },
    {
      name: "description",
      content:
        "Asphalt Roads is a mod for My Summer Car which replaces dirt roads with asphalt roads.",
    },
    { name: "author", content: "mldkyt" },
  ];
};

export default function AsphaltRoads() {
  return (
    <div>
      <div className="border-2 border-orange-500 m-2 rounded-lg">
        <p className="text-2xl font-bold ml-2">WARNING</p>
        <p className="mx-4">
          The information you are about to read is for a mod that has been
          deprecated and will only get bug fixes or functionality fixes.
        </p>
      </div>
      <h1 className="text-center text-4xl font-bold">Asphalt Roads</h1>
      <p className="mx-2">
        Asphalt Roads is a mod for My Summer Car which replaces dirt roads with
        asphalt roads.
      </p>
      <img
        className="rounded-lg ml-4"
        src="https://staticdelivery.nexusmods.com/mods/2600/images/3670/3670-1691406498-1770392602.png"
        alt="image i guess"
      />
      <h2 className="ml-2 text-2xl">Download this mod</h2>
      <p className="ml-4">
        You can download it on NexusMods, where is the latest version:
      </p>
      <a
        className="ml-4 px-2 py-1 bg-orange-500 rounded-lg"
        href="https://www.nexusmods.com/mysummercar/mods/3670"
      >
        Download
      </a>
      <p className="ml-4">You can also build it from source on GitHub: </p>
      <a
        className="ml-4 px-2 py-1 bg-black border-2 border-white rounded-lg"
        href="https://github.com/mldkyt/AsphaltRoads/releases"
      >
        Source Code
      </a>
      <br />
      <br />
      <h2 className="ml-2 text-2xl">Contributing</h2>
      <p className="mx-4">
        Since the GitHub repository is archived, you'll have to create a fork,
        then you <code>git clone</code> the repository, add references to My
        Summer Car libraries and modify the code.
      </p>
      <p className="mx-4">
        You push your changes on GitHub, and upload the mod on NexusMods,{" "}
        <u>where you link me as the original author of the mod</u>.
      </p>
      <Navbar sel="project" />
    </div>
  );
}
