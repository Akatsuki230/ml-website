import { V2_MetaFunction } from "@remix-run/node";
import Navbar from "~/components/Navbar";

export const meta: V2_MetaFunction = () => {
  return [
    {title: "Astolfmale Resource Pack"},
    {name: "title", content: "Astolfmale | mldkyt's Website"},
    {name: "description", content: "Astolfmale is a resource pack for Minecraft which replaces the Cherry wood with Femboy wood."},
    {name: "author", content: "mldkyt"}
  ]
}


export default function Astolfmale() {

  return <>
    <h1 className="text-3xl mx-2">Astolfmale Resource Pack</h1>
    <p className="mx-2">Replaces the Cherry wood with Femboy wood.</p>
    <img className="mx-2" src="/javaw_9vDysy9UtV.png" alt="Astolfmale Resource Pack" />
    <a href="/astolfmaleresourcepack">
      <button className="mx-2 m-1 p-2 px-4 bg-green-500 rounded-md" >
        Download this
      </button>
    </a>

    <Navbar sel="project" />
  </>
}