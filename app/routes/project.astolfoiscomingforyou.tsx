import { V2_MetaFunction } from "@remix-run/node";
import Navbar from "~/components/Navbar";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Astolfo Is Coming For You" },
    { name: "title", content: "Astolfo Is Coming For You | mldkyt's Website" },
    {
      name: "description",
      content:
        "Astolfo Is Coming For You is a program that if you run on your PC, Astolfo will come to your house, or turn your PC off, depending on the variant.",
    },
    { name: "author", content: "mldkyt" },
  ];
};

export default function AstolfoIsComingForYou() {
  return (
    <>
      <h1 className="text-3xl mx-2">Astolfo Is Coming For You</h1>
      <h2 className="text-xl mx-2">1. The safe variant</h2>
      <p className="mx-2">
        The safe variant has a countdown from 100 to 0 and then Astolfo gives
        you a lot of compliments ❤️.
      </p>
      <img
        className="mx-2 rounded-md"
        src="/VirtualBoxVM_lCURwn9Xdd.png"
        alt="Astolfo Is Coming For You Countdown"
      />
      <img
        className="mx-2 rounded-md"
        src="/VirtualBoxVM_y4yGiQAs1A.png"
        alt="Astolfo Is Coming For You Compliments"
      />

      <h2 className="text-xl mx-2">2. The unsafe variant</h2>
      <p className="mx-2">
        The unsafe variant has a countdown from 100 to 0 and then Astolfo gets
        angry at you and turns your PC off.
      </p>
      <img
        className="mx-2 rounded-md"
        src="/VirtualBoxVM_R7Oo1N36h9.png"
        alt="Astolfo Is Coming For You Evil Countdown"
      />
      <img
        className="mx-2 rounded-md"
        src="/VirtualBoxVM_cRDIvd1bG6.png"
        alt="Astolfo Is Coming For You Evil Shutdown"
      />
      <a href="https://github.com/Astolph0/AstolfoIsComingForYou/releases/">
        <button className="mx-2 m-1 p-2 px-4 bg-green-500 rounded-md">
          Download
        </button>
      </a>

      <Navbar sel="project" />
    </>
  );
}
