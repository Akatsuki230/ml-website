import type {LoaderFunction} from "@remix-run/node";
import { redirect} from "@remix-run/node";
import * as process from "process";
import Navbar from "~/components/Navbar";

export const loader: LoaderFunction = async ({ request }) => {
  const cookies = request.headers.get('Cookie') ?? ''
  if (!cookies.includes(`token=${process.env.ADMIN_PASSWORD}`)) {
    return redirect('/admin/login', 302)
  }
  return {}
}

export default function Admin() {
  return (
    <div>
      <h1 className='text-3xl m-2'>Welcome to the admin page, mldkyt!</h1>
      <a href='/admin/custompages'>
        <button className='bg-blue-600 p-1 m-2 rounded-md'>Manage custom pages</button>
      </a>
      <a href='/admin/factmanager'>
        <button className='bg-blue-600 p-1 m-2 rounded-md'>Manage fun facts</button>
      </a>
      <Navbar sel="" />
    </div>
  )
}