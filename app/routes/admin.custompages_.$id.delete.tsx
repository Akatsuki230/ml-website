import Navbar from "~/components/Navbar";
import type {ActionFunction, LoaderFunction} from "@remix-run/node";
import { redirect} from "@remix-run/node";
import {useLoaderData} from "@remix-run/react";
import process from "process";

export const loader: LoaderFunction = async ({ params }) => {
  if (!params.id)
    return redirect('/admin/custompages', 302)

  const data = await (await fetch(`${process.env.FIREBASE_URL}/redirects/${params.id}.json`)).json()
  if (!data) {
    return redirect('/admin/custompages', 302)
  }
  data.id = params.id
  return {
    customPage: data
  }
}

export const action: ActionFunction = async ({ params }) => {
  await fetch(`${process.env.FIREBASE_URL}/redirects/${params.id}.json`, {
    method: 'DELETE'
  })
  return redirect('/admin/custompages', 302)
}

export default function AdminCustompagesPageDelete() {
  const data = useLoaderData()
  return (
    <>
      <h1 className='text-3xl m-2'>Are you sure you want to delete "{data.customPage.id}"?</h1>
      <form action={`/admin/custompages/${data.customPage.id}/delete`} method='post'>
        <button className='bg-red-600 p-1 m-2 rounded-md'>Delete</button>
      </form>
      <button className='bg-blue-600 p-1 m-2 rounded-md' onClick={() => window.history.back()}>Cancel</button>
      <Navbar sel='' />
    </>
  )
}