import type {V2_MetaFunction} from "@remix-run/node";
import Navbar from "~/components/Navbar";

export const meta: V2_MetaFunction = () => {
  return [
    {title: 'MSC Tweaks'},
    {name: 'title', content: 'MSC Tweaks | mldkyt\'s website'},
    {name: 'description', content: 'MSC Tweaks is a mod for My Summer Car which adds a few tweaks, such as always open console, fall damage (though buggy) and more.'},
    {name: 'author', content: 'mldkyt'}
  ]
}

export default function MSCTweaks() {
  return (
    <div>
      <div className="border-2 border-orange-500 m-2 rounded-lg">
        <p className="text-2xl font-bold ml-2">WARNING</p>
        <p className="mx-4">The information you are about to read is for a mod that has been deprecated and will only get bug fixes or functionality fixes.</p>
      </div>
      <h1 className="text-center text-4xl font-bold">MSC Tweaks</h1>
      <p className="mx-2">MSC Tweaks (also My Summer Car Tweaks) is a mod for My Summer Car which adds a few tweaks, such as always open console, fall damage (though buggy) and more.</p>
      <h2 className="ml-2 text-2xl">Download this mod</h2>
      <p className="ml-4">You can download it on NexusMods, where is the latest version:</p>
      <a className="ml-4 px-2 py-1 bg-orange-500 rounded-lg" href="https://www.nexusmods.com/mysummercar/mods/3665">Download</a>
      <Navbar sel="project" />
    </div>
  )
}