import FinalNavbar from "@/components/NavBar";
import { GetServerSidePropsContext } from "next";
import process from "process";
import {Inter} from "next/font/google";
import { Button, ButtonGroup, Container } from "react-bootstrap";

const inter = Inter({ subsets: ["latin"] });

/**
 * 
 * @param {GetServerSidePropsContext} ctx 
 * @returns 
 */
export async function getServerSideProps(ctx) {
  const cookies = ctx.req.headers.cookie ?? "";
  if (!cookies.includes(`token=${process.env.ADMIN_PASSWORD}`)) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  }

  const { id } = ctx.params
  if (!id) return ctx.res.writeHead(302, { Location: "/admin/custompages" });

  const {confirm } = ctx.query
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

/**
 * 
 * @param {{id: string}} props 
 * @returns 
 */
export default function AdminCustompagesPageDelete(props) {
  return (
    <div className={inter.className}>

      <FinalNavbar />
      <Container>
        
        <h1 className="text-3xl m-2">
          Are you sure you want to delete "{props.id}"?
        </h1>
        <ButtonGroup>
          <Button as="a" href={`/admin/custompage/${props.id}/delete?confirm=1`} variant="danger">
            Yes
          </Button>
          <Button as="a" href="/admin/custompages" variant="success">
            Cancel
          </Button>
        </ButtonGroup>
      </Container>
    </div>
  );
}
