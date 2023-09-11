import Navbar from "@/components/NavBar";
import { GetServerSidePropsContext } from "next";
import process from "process";

// export const loader: LoaderFunction = async ({ request }) => {
//   const cookies = request.headers.get("Cookie") ?? "";
//   if (!cookies.includes(`token=${process.env.ADMIN_PASSWORD}`)) {
//     return redirect("/admin/login", 302);
//   }

//   const data = await (
//     await fetch(`${process.env.FIREBASE_URL}/redirects.json`)
//   ).json();
//   let customPages: any[] = [];
//   for (const i in data) {
//     const page = data[i];
//     customPages.push({
//       id: i,
//       label: page.label,
//       type: page.type,
//     });
//   }
//   return {
//     customPages,
//   };
// };

interface CustomPageWithID {
  id: string;
  label: string;
  themeBgValue: string;
  themeTextBgColor: string;
  themeTextColor: string;
  themeType: string;
  type: string;
  url: string;
  views: number;
}


interface CustomPage {
  label: string;
  themeBgValue: string;
  themeTextBgColor: string;
  themeTextColor: string;
  themeType: string;
  type: string;
  url: string;
  views: number;
}

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

  const data = await (
    await fetch(`${process.env.FIREBASE_URL}/redirects.json`)
  ).json() as { [key: string]: CustomPage };

  let customPages: CustomPageWithID[] = [];
  for (const i in data) {
    customPages.push({...data[i], id: i});
  }
  return {
    props: {
      customPages,
    },
  };
}

export default function AdminCustompages(props: { customPages: CustomPageWithID[] }) {
  function renderShortened(text: string): string {
    if (text.length > 30) {
      return text.substring(0, 27) + "...";
    } else {
      return text;
    }
  }

  return (
    <>
      <button
        className="bg-blue-600 p-1 px-2 m-1 rounded-md"
        onClick={() => (location.href = "/admin")}
      >
        Back
      </button>
      <a href="/admin/custompage/create">
        <button className="bg-blue-600 p-1 px-2 m-1 rounded-md">Create</button>
      </a>
      <h1 className="text-3xl m-2">Custom page manager</h1>
      <table className="w-screen">
        <thead>
          <tr>
            <th>ID</th>
            <th>Label</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.customPages.map((page: any, i: number) => {
            return (
              <tr key={i}>
                <td>{renderShortened(page.id)}</td>
                <td>{renderShortened(page.label)}</td>
                <td>{page.type}</td>
                <td>
                  <a href={`/admin/custompage/${page.id}/properties`}>
                    <button className="bg-blue-600 p-1 m-2 rounded-md">
                      Edit
                    </button>
                  </a>
                  <a href={`/admin/custompage/${page.id}/delete`}>
                    <button className="bg-red-600 p-1 m-2 rounded-md">
                      Delete
                    </button>
                  </a>
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
