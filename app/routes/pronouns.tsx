import { motion } from "framer-motion";
import type { V2_MetaFunction } from "@remix-run/node";
import Navbar from "~/components/Navbar";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "mldkyt's pronouns" },
    { name: "title", content: "mldkyt's pronouns | mldkyt's website" },
    {
      name: "description",
      content:
        "Pronouns that mldkyt uses. Quick summary: \nhe/him\nCalling: mld, mldkyt, astolfo, mldk\nAddressing: cute, love, lover, patootie, honey, sweetie, baby, babe, cutie",
    },
    {
      name: "og:image",
      content:
        "https://media.discordapp.net/attachments/768887055438053476/1042910848529739777/shitsuma1.png",
    },
    { name: 'theme-color', content: '#FF77FF'}
  ];
};

export default function Pronouns() {
  return (
    <>
      <h1 className="text-3xl m-2 mx-4 font-bold">mldkyt's pronouns</h1>
      <h2 className="text-2xl m-1 mx-6 font-bold">Calling me</h2>
      <p className="m-1 mx-8">&bull; ❤️ mld</p>
      <p className="m-1 mx-8">&bull; 👍 astolfo</p>
      <p className="m-1 mx-8">&bull; 👍 mldkyt</p>
      <h2 className="text-2xl m-1 mx-6 font-bold">Pronouns</h2>
      <p className="m-1 mx-8">&bull; ❤️ he/him</p>
      <p className="m-1 mx-8">&bull; 👍 they/them</p>
      <h2 className="text-2xl m-1 mx-6 font-bold">
        Addressing (Any concentration of the below options)
      </h2>
      <p className="m-1 mx-8">&bull; ❤️ cutie</p>
      <p className="m-1 mx-8">&bull; ❤️ love</p>
      <p className="m-1 mx-8">&bull; ❤️ lover</p>
      <p className="m-1 mx-8">&bull; ❤️ honey</p>
      <p className="m-1 mx-8">&bull; ❤️ sweetie</p>
      <p className="m-1 mx-8">&bull; ❤️ baby</p>
      <p className="m-1 mx-8">&bull; ❤️ babe</p>
      <p className="m-1 mx-8">&bull; ❤️ cutie</p>
      <p className="m-1 mx-8">&bull; ❤️ pookie</p>
      <p className="m-1 mx-8">&bull; ❤️ femboy</p>

      <h2 className="text-3xl m-2 mx-4 font-bold">Meaning of these icons: </h2>

      <div className="flex ml-4">
        <div className="m-2 bg-[#3C0041] rounded-md p-1">
          <p className="text-2xl font-bold">❤️</p>
          <p>PLEASE USE THIS MASTER</p>
        </div>
        <div className="m-2 bg-[#3C0041] rounded-md p-1">
          <p className="text-2xl font-bold">👍</p>
          <p>Yuh uh</p>
        </div>
        <div className="m-2 bg-[#3C0041] rounded-md p-1">
          <p className="text-2xl font-bold">👎</p>
          <p>Nuh uh</p>
        </div>
      </div>

      <h2 className="text-3xl m-2 mx-4 font-bold">Explore this website: </h2>
      <div className="flex">
        <div className="ml-8 text-center w-40 h-48 bg-gradient-to-b from-[#3C0041] to-[#111] rounded-md relative">
          <p className="text-xl font-bold">Homepage</p>
          <p>This is the homepage of this website.</p>
          <a href="/" className="bottom-2 absolute left-1/2 -translate-x-1/2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-blue-700 rounded-xl p-2 px-4 mr-2"
            >
              Explore
            </motion.button>
          </a>
        </div>

        <div className="ml-8 text-center w-40 h-48 bg-gradient-to-b from-[#3C0041] to-[#111] rounded-md relative">
          <p className="text-xl font-bold">Projects</p>
          <p>This is a list of my projects</p>
          <a
            href="/projects"
            className="bottom-2 absolute left-1/2 -translate-x-1/2"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-blue-700 rounded-xl p-2 px-4 mr-2"
            >
              Explore
            </motion.button>
          </a>
        </div>

        <div className="ml-8 text-center w-40 h-48 bg-gradient-to-b from-[#3C0041] to-[#111] rounded-md relative">
          <p className="text-xl font-bold">Socials</p>
          <p>A list of my social links</p>
          <a
            href="/socials"
            className="bottom-2 absolute left-1/2 -translate-x-1/2"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-blue-700 rounded-xl p-2 px-4 mr-2"
            >
              Explore
            </motion.button>
          </a>
        </div>
      </div>
      <Navbar sel="pronouns" />
    </>
  );
}
