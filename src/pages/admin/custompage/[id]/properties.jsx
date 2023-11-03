import { GetServerSidePropsContext } from "next";
import React from "react";
import { Inter } from "next/font/google";
import { Container, Form, Button, ButtonGroup, InputGroup } from "react-bootstrap";
import FinalNavbar from "@/components/NavBar";

/**
 * 
 * @param {GetServerSidePropsContext} ctx 
 * @returns 
 */
export async function getServerSideProps(ctx) {
  if (!ctx.params?.id)
    return {
      redirect: { destination: "/admin/custompages", permanent: false },
    };
  const cookies = ctx.req.headers.cookie ?? "";
  if (!cookies.includes(`token=${process.env.ADMIN_PASSWORD}`)) {
    return { redirect: { destination: "/admin/login", permanent: false } };
  }

  const data = await (
    await fetch(`${process.env.FIREBASE_URL}/redirects/${ctx.params.id}.json`)
  ).json();
  data.id = ctx.params.id;
  return {
    props: {
      customPage: data,
    },
  };
}

const inter = Inter({ subsets: ["latin"] });

export default function AdminCustompagesIdProperties(props) {
  const [url, setUrl] = React.useState(props.customPage.url);

  const [pageTitle, setPageTitle] = React.useState(props.customPage.pageTitle ?? "Not set");
  const [embedTitle, setEmbedTitle] = React.useState(props.customPage.embedTitle ?? "Not set");
  const [embedDescription, setEmbedDescription] = React.useState(props.customPage.embedDescription ?? "Not set");
  const [embedColor, setEmbedColor] = React.useState(props.customPage.embedColor ?? "#000000");
  const [embedAuthor, setEmbedAuthor] = React.useState(props.customPage.embedAuthor ?? "Not set");
  
  const [siteTitle, setSiteTitle] = React.useState(props.customPage.siteTitle ?? "Not set");
  const [siteDescription, setSiteDescription] = React.useState(props.customPage.siteDescription ?? "Not set");

  const save = () => {
    fetch(`/api/custompages/update`, {
      method: "POST",
      body: JSON.stringify({
        id: props.customPage.id,
        url,
        pageTitle,
        embedTitle,
        embedDescription,
        embedColor,
        embedAuthor,
        siteTitle,
        siteDescription
      }),
    })
      .then((x) => x.text())
      .then((x) => {
        alert(x)
        location.reload();
      });
  };

  return (
    <div className={inter.className}>
      <FinalNavbar />
      <Container>
      <h1 className="text-3xl m-2">Properties of {props.customPage.id}</h1>
      <h2 className="text-2xl m-2">General settings</h2>
      <InputGroup>
        <InputGroup.Text>ID</InputGroup.Text>
        <Form.Control
          type="text"
          defaultValue={props.customPage.id}
          disabled
        />
      </InputGroup>
      <InputGroup>
        <InputGroup.Text>URL</InputGroup.Text>
        <Form.Control
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </InputGroup>
      <br />
      <h3>Browser</h3>
      <InputGroup>
        <InputGroup.Text>Page title</InputGroup.Text>
        <Form.Control
          type="text"
          value={pageTitle}
          onChange={(e) => setPageTitle(e.target.value)}
        />
      </InputGroup>
      <br />

      <h3>Link embed</h3>

      <InputGroup>
        <InputGroup.Text>Embed title</InputGroup.Text>
        <Form.Control
          type="text"
          value={embedTitle}
          onChange={(e) => setEmbedTitle(e.target.value)}
        />
      </InputGroup>
      <InputGroup>
        <InputGroup.Text>Embed description</InputGroup.Text>
        <Form.Control
          type="text"
          value={embedDescription}
          onChange={(e) => setEmbedDescription(e.target.value)}
        />
      </InputGroup>
      <InputGroup>
        <InputGroup.Text>Embed color</InputGroup.Text>
        <Form.Control
          type="text"
          value={embedColor}
          onChange={(e) => setEmbedColor(e.target.value)}
        />
      </InputGroup>
      <InputGroup>
        <InputGroup.Text>Embed author</InputGroup.Text>
        <Form.Control
          type="text"
          value={embedAuthor}
          onChange={(e) => setEmbedAuthor(e.target.value)}
        />
      </InputGroup>

      <br />
      <h3>Site content</h3>
      
      <InputGroup>
        <InputGroup.Text>Site title</InputGroup.Text>
        <Form.Control
          type="text"
          value={siteTitle}
          onChange={(e) => setSiteTitle(e.target.value)}
        />
      </InputGroup>
      <InputGroup>
        <InputGroup.Text>Site description</InputGroup.Text>
        <Form.Control
          as="textarea"
          value={siteDescription}
          onChange={(e) => setSiteDescription(e.target.value)}
        />
      </InputGroup>

      <br />

      <ButtonGroup>
        <Button onClick={save} variant="success">
          Save
        </Button>

        <Button as="a" href="/admin/custompages" variant="danger">
          Return
        </Button>
      </ButtonGroup>
      </Container>
    </div>
  );
}
