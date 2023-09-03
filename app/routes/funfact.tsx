import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Navbar from "~/components/Navbar";

export const loader: LoaderFunction = async () => {
  const facts = await (
    await fetch(`${process.env.FIREBASE_URL}/facts.json`)
  ).json();
  // select random from array
  return facts[Math.floor(Math.random() * facts.length)];
};

export default function FunFact() {
  const data = useLoaderData();

  return (
    <>
      <h1 className="text-3xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {data.fact}
      </h1>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <button
          className="bg-blue-600 p-2 px-4 m-2 rounded-lg"
          onClick={() => location.reload()}
        >
          Next Fact
        </button>
        <button
          className="bg-blue-600 p-2 px-4 m-2 rounded-lg"
          onClick={() => (location.href = "/")}
        >
          Home Page
        </button>
      </div>
      <Navbar sel="" />
    </>
  );
}
