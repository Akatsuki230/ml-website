import React from "react";
import { Container, Nav, NavDropdown, Navbar, Image } from "react-bootstrap";

export default function FinalNavbar(props: { sel: string }) {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>
            <Image
              src="/pfp.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              style={{ borderRadius: "50%", marginRight: '1rem' }}
              alt="Astolfo's PFP"
            />
            mldkyt
          </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
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
            </NavDropdown>
            <Nav.Link href="/social">Socials</Nav.Link>
            <Nav.Link href="/discord">Discord</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
