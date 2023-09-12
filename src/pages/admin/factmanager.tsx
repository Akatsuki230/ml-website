import process from "process";
import Navbar from "@/components/NavBar";
import { useState } from "react";
import { GetServerSidePropsContext } from "next";
import getRawBody from 'raw-body';
import { Inter } from "next/font/google";

// export const loader: LoaderFunction = async ({ request }) => {
//   const cookies = request.headers.get("Cookie") ?? "";
//   if (!cookies.includes(`token=${process.env.ADMIN_PASSWORD};`)) {
//     return redirect("/admin/login", 302);
//   }

//   const facts = await (
//     await fetch(`${process.env.FIREBASE_URL}/facts.json`)
//   ).json();

//   return facts;
// };

// export const action: ActionFunction = async ({ request }) => {
//   if (!request.headers.has("Content-Type")) return null;

//   if (request.headers.get("Content-Type") == "application/json") {
//     const body = await request.json();
//     if (body.action == "delete" && body.id) {
//       await fetch(`${process.env.FIREBASE_URL}/facts/${body.id}.json`, {
//         method: "DELETE",
//       });
//     }
//   }

//   if (
//     request.headers.get("Content-Type") == "application/x-www-form-urlencoded"
//   ) {
//     const formData = await request.formData();
//     if (formData.has("action") && formData.has("fact")) {
//       const action = formData.get("action") as string;
//       const fact = formData.get("fact") as string;
//       if (action == "add") {
//         const facts = await (
//           await fetch(`${process.env.FIREBASE_URL}/facts.json`)
//         ).json();
//         facts.push({ fact });
//         await fetch(`${process.env.FIREBASE_URL}/facts.json`, {
//           method: "PUT",
//           body: JSON.stringify(facts),
//         });
//       }
//     }
//   }

//   return null;
// };

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const cookies = ctx.req.headers.cookie ?? "";
  if (!cookies.includes(`token=${process.env.ADMIN_PASSWORD}`)) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  }

  const facts = await (
    await fetch(`${process.env.FIREBASE_URL}/facts.json`)
  ).json();

  return {
    props: {
      facts
    },
  };
}

const inter = Inter({ subsets: ['latin'] })

export default function FactManager(props: { facts: { fact: string }[] }) {
  const [search, setSearch] = useState("");

  const [createFact, setCreateFact] = useState('');

  const create = () => {
    fetch("/api/factmanager/create", {
      method: "POST",
      body: JSON.stringify({
        fact: createFact,
      }),
    }).then(() => location.reload());
  }

  return (
    <div className={inter.className}>
      <button
        className="bg-blue-600 p-1 px-2 m-1 rounded-md text-white"
        onClick={() => (location.href = "/admin")}
      >
        Back
      </button>
      <h1 className="m-1 text-3xl text-white font-bold">Fact manager</h1>
      <form action="/admin/factmanager" method="POST" className="m-1">
        <label htmlFor="fact">Fact</label>
        <input
          type="text"
          onChange={(x) => setCreateFact(x.currentTarget.value)}
          value={createFact}
          className="block m-1 bg-black text-white"
        />
        <button type="button" onClick={create} className="bg-blue-600 p-1 px-2 m-1 rounded-md text-white">
          Add
        </button>
      </form>

      <label htmlFor="search">Search</label>
      <input
        type="text"
        value={search}
        onChange={(x) => setSearch(x.currentTarget.value)}
        className="bg-black text-white"
        id="search"
      />

      <table>
        <thead>
          <tr>
            <th>Fact</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.facts.map((fact: { fact: string }, i: number) => {
            if (!fact.fact.toLowerCase().includes(search.toLowerCase()))
              return null;

            function deleteFact() {
              fetch("/api/factmanager/delete", {
                method: "POST",
                body: JSON.stringify({
                  id: i,
                }),
              }).then(() => location.reload());
            }

            return (
              <tr key={i}>
                <td>{fact.fact}</td>
                <td>
                  <button
                    className="bg-red-600 p-1 px-2 m-1 rounded-md"
                    onClick={deleteFact}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Navbar sel="" />
    </div>
  );
}
