import FinalNavbar from "@/components/NavBar";
import { GetServerSidePropsContext } from "next";
import process from "process";
import {Inter} from "next/font/google";
import { Button, ButtonGroup, Container, Table } from "react-bootstrap";

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

  const data = await (
    await fetch(`${process.env.FIREBASE_URL}/redirects.json`)
  ).json();

  let customPages = [];
  for (const i in data) {
    customPages.push({...data[i], id: i});
  }
  return {
    props: {
      customPages,
    },
  };
}

const inter = Inter({ subsets: ["latin"] });

export default function AdminCustompages(props) {

  /**
   * 
   * @param {string} text 
   * @returns {string}
   */
  function renderShortened(text) {
    if (!text) return ""
    if (text.length > 30) {
      return text.substring(0, 27) + "...";
    } else {
      return text;
    }
  }

  return (
    <div className={inter.className}>
      <FinalNavbar />
      <Container>
        <ButtonGroup>
          <Button as="a" href="/admin">
            Back
          </Button>
          <Button as="a" href="/admin/custompage/create" variant="success">
            Create
          </Button>
        </ButtonGroup>
        <h1>Custom page manager</h1>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Label</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {props.customPages.map((page, i) => {
              return (
                <tr key={i}>
                  <td className='text-white'>{renderShortened(page.id)}</td>
                  <td className='text-white'>{renderShortened(page.pageTitle)}</td>
                  <td>
                    <a href={`/admin/custompage/${page.id}/properties`}>
                      <Button className="bg-blue-600 p-1 m-2 rounded-md text-white">
                        Edit
                      </Button>
                    </a>
                    <a href={`/admin/custompage/${page.id}/delete`}>
                      <Button className="bg-red-600 p-1 m-2 rounded-md text-white">
                        Delete
                      </Button>
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
