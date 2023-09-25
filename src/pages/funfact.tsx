import FemboyFridayVirtualHeadpat from "@/components/FemboyFridayVirtualHeadpat";
import Navbar from "@/components/NavBar";
import { GetServerSidePropsContext } from "next";
import { Inter } from "next/font/google";

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const funFacts = (await (
    await fetch(`${process.env.FIREBASE_URL}/facts.json`)
  ).json()) as { fact: string }[];
  const funFact = funFacts[Math.floor(Math.random() * funFacts.length)];
  return { props: { funFact } };
}

const inter = Inter({ subsets: ["latin"] });

export default function FunFact(props: { funFact: { fact: string } }) {
  return (
    <div className={inter.className}>
      <h1 className="text-2xl ml-4 mt-2 font-bold">
        Random fact about Programmer Astolfo:
      </h1>
      <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-lg w-max">
        {props.funFact.fact}
      </p>

      <FemboyFridayVirtualHeadpat />
      <Navbar sel="" />
    </div>
  );
}
