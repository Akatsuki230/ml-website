import Navbar from "@/components/NavBar";
import { GetServerSidePropsContext } from "next";
import process from "process";
import {Inter} from "next/font/google";

// export const loader: LoaderFunction = async ({ params, request }) => {
//   if (!params.id) return redirect("/admin/custompages", 302);

//   const cookies = request.headers.get("Cookie") ?? "";
//   if (!cookies.includes(`token=${process.env.ADMIN_PASSWORD}`)) {
//     return redirect("/admin/login", 302);
//   }

//   const data = await (
//     await fetch(`${process.env.FIREBASE_URL}/redirects/${params.id}.json`)
//   ).json();
//   if (!data) {
//     return redirect("/admin/custompages", 302);
//   }
//   data.id = params.id;
//   return {
//     customPage: data,
//   };
// };

// export const action: ActionFunction = async ({ params }) => {
//   await fetch(`${process.env.FIREBASE_URL}/redirects/${params.id}.json`, {
//     method: "DELETE",
//   });
//   return redirect("/admin/custompages", 302);
// };

const inter = Inter({ subsets: ["latin"] });

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

  const { id } = ctx.params as { id: string };
  if (!id) return ctx.res.writeHead(302, { Location: "/admin/custompages" });

  const {confirm } = ctx.query as { confirm: string };
  if (confirm) {
    await fetch(`${process.env.FIREBASE_URL}/redirects/${id}.json`, {
      method: "DELETE",
    });
    return {
      redirect: {
        destination: "/admin/custompages",
        permanent: false,
      },
    };
  }

  return {
    props: {
      id
    },
  };
}

export default function AdminCustompagesPageDelete(props: { id: string }) {
  return (
    <div className={`${inter.className} text-white`}>
      <h1 className="text-3xl m-2">
        Are you sure you want to delete "{props.id}"?
      </h1>
      <form
        action={`/admin/custompage/${props.id}/delete?confirm=1`}
        method="post"
      >
        <button className="bg-red-600 p-1 m-2 rounded-md">Delete</button>
      </form>
      <button
        className="bg-blue-600 p-1 m-2 rounded-md"
        onClick={() => window.history.back()}
      >
        Cancel
      </button>
      <Navbar sel="" />
    </div>
  );
}
