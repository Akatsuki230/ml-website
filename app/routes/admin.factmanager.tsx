import { ActionFunction, LoaderFunction, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import process from "process";
import Navbar from "~/components/Navbar";
import { useState } from "react";

export const loader: LoaderFunction = async ({ request }) => {
  const cookies = request.headers.get("Cookie") ?? "";
  if (!cookies.includes(`token=${process.env.ADMIN_PASSWORD};`)) {
    return redirect("/admin/login", 302);
  }

  const facts = await (
    await fetch(`${process.env.FIREBASE_URL}/facts.json`)
  ).json();

  return facts;
};

export const action: ActionFunction = async ({ request }) => {
  if (!request.headers.has("Content-Type")) return null;

  if (request.headers.get("Content-Type") == "application/json") {
    const body = await request.json();
    if (body.action == "delete" && body.id) {
      await fetch(`${process.env.FIREBASE_URL}/facts/${body.id}.json`, {
        method: "DELETE",
      });
    }
  }

  if (
    request.headers.get("Content-Type") == "application/x-www-form-urlencoded"
  ) {
    const formData = await request.formData();
    if (formData.has("action") && formData.has("fact")) {
      const action = formData.get("action") as string;
      const fact = formData.get("fact") as string;
      if (action == "add") {
        const facts = await (
          await fetch(`${process.env.FIREBASE_URL}/facts.json`)
        ).json();
        facts.push({ fact });
        await fetch(`${process.env.FIREBASE_URL}/facts.json`, {
          method: "PUT",
          body: JSON.stringify(facts),
        });
      }
    }
  }

  return null;
};

export default function FactManager() {
  const [search, setSearch] = useState("");
  const data = useLoaderData() as { fact: string }[];

  return (
    <>
      <button
        className="bg-blue-600 p-1 px-2 m-1 rounded-md"
        onClick={() => (location.href = "/admin")}
      >
        Back
      </button>
      <h1 className="m-1 text-3xl">Fact manager</h1>
      <form action="/admin/factmanager" method="POST" className="m-1">
        <input type="hidden" name="action" value="add" />
        <label htmlFor="fact">Fact</label>
        <input
          type="text"
          name="fact"
          id="fact"
          className="block m-1 bg-black"
        />
        <button type="submit" className="bg-blue-600 p-1 px-2 m-1 rounded-md">
          Add
        </button>
      </form>

      <label htmlFor="search">Search</label>
      <input
        type="text"
        value={search}
        onChange={(x) => setSearch(x.currentTarget.value)}
        className="bg-black"
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
          {data.map((fact: { fact: string }, i: number) => {
            if (!fact.fact.toLowerCase().includes(search.toLowerCase()))
              return null;

            function deleteFact() {
              fetch("/admin/factmanager", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  action: "delete",
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
    </>
  );
}
