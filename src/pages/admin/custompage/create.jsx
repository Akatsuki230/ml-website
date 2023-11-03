import FinalNavbar from "@/components/NavBar";
import { useState } from "react";
import { Inter } from "next/font/google";
import { Button, Container, InputGroup, Form } from "react-bootstrap";

const inter = Inter({ subsets: ["latin"] });

export default function AdminCustompages_Create() {
  const [id, setID] = useState("");
  const [url, setUrl] = useState("");

  const [pageTitle, setPageTitle] = useState("");
  const [embedTitle, setEmbedTitle] = useState("");
  const [embedDescription, setEmbedDescription] = useState("");
  const [embedColor, setEmbedColor] = useState("#FF77FF");
  const [embedAuthor, setEmbedAuthor] = useState("");

  const [siteTitle, setSiteTitle] = useState("");
  const [siteDescription, setSiteDescription] = useState("");

  const create = () => {
    if (id === "") return alert("ID cannot be empty");
    if (url === "") return alert("URL cannot be empty");
    if (pageTitle === "") return alert("Page title cannot be empty");
    if (embedTitle === "") return alert("Embed title cannot be empty");
    if (embedDescription === "") return alert("Embed description cannot be empty");
    if (embedColor === "") return alert("Embed color cannot be empty");
    if (embedAuthor === "") return alert("Embed author cannot be empty");
    if (siteTitle === "") return alert("Site title cannot be empty");
    if (siteDescription === "") return alert("Site description cannot be empty");

    if (!url.match(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/))
      return alert("URL is not valid");

    fetch("/api/custompages/create", {
      method: "POST",
      body: JSON.stringify({
        id,
        url,
        pageTitle,
        embedTitle,
        embedDescription,
        embedColor,
        embedAuthor,
        siteTitle,
        siteDescription,
      }),
    })
      .then((x) => x.text())
      .then((x) => {
        alert(x);
        location.href = "/admin/custompages";
      });
  };

  return (
    <div className={inter.className}>
      <FinalNavbar />
      <Container>
        <Button as="a" href="/admin/custompages">
          Back
        </Button>

        <h1>Create a new page</h1>
        <h2 className="text-2xl m-2">General settings</h2>
        <InputGroup>
          <InputGroup.Text>ID</InputGroup.Text>
          <Form.Control
            type="text"
            value={id}
            onChange={(e) => setID(e.target.value)}
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

        <Button onClick={create} variant="success">
          Create
        </Button>
      </Container>
    </div>
  );
}
