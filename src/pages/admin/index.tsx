import * as process from "process";
import FinalNavbar from "@/components/NavBar";
import { GetServerSidePropsContext } from "next";
import {Inter} from "next/font/google";
import { Container } from "react-bootstrap";

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
  return {
    props: {},
  };
}

const inter = Inter({ subsets: ["latin"] });

export default function Admin() {
  return (
    <div className={inter.className}>
      <Container>
        <h1 className="text-3xl m-2 font-bold text-white">Welcome to the admin page, mldkyt!</h1>
        <a href="/admin/custompages">
          <button className="bg-blue-600 p-1 m-2 rounded-md text-white">
            Manage custom pages
          </button>
        </a>
        <a href="/admin/tracking">
          <button className="bg-blue-600 p-1 m-2 rounded-md text-white">
            Tracking Information
          </button>
        </a>
        <a href="/admin/pageviews">
          <button className="bg-blue-600 p-1 m-2 rounded-md text-white">
            Page View counts
          </button>
        </a>
      </Container>
    </div>
  );
}
