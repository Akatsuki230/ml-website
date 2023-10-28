import React from "react";
import { Container, Nav, NavDropdown, Navbar, Image } from "react-bootstrap";

export default function FinalNavbar(props: { sel: string }) {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="/">
            <Image
              src="/pfp.webp"
              width="30"
              height="30"
              className="d-inline-block align-top"
              style={{ borderRadius: "50%" }}
              alt="Astolfo's PFP"
            />
          </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link href="/meshsave">Meshsave</Nav.Link>
            <NavDropdown title='Projects'>
              <NavDropdown.Item href="/project/astolfoiscomingforyou">
                Astolfo is Coming For You
                </NavDropdown.Item>
              <NavDropdown.Item href="/project/astolfomod">
                Astolfo Forge Mod
              </NavDropdown.Item>
              <NavDropdown.Item href="/project/astolforesourcepack">
                Astolfo Resource Pack
              </NavDropdown.Item>
              <NavDropdown.Item href="/project/astolfos">
                AstolfOS
              </NavDropdown.Item>
              <NavDropdown.Item href="/project/sharex">
                ShareX Settings
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/project/olderprojects">
                Older Projects
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/social">Socials</Nav.Link>
            <Nav.Link href="/discord">Discord</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <small>b10282023</small>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
