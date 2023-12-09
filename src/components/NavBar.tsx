import { Inter } from "next/font/google";
import React from "react";
import { Container, Nav, NavDropdown, Navbar, Image } from "react-bootstrap";

const inter = Inter({ subsets: ["latin"] });

export default function FinalNavbar() {
    return (
        <div className={inter.className}>
            <Navbar>
                <Container>
                    <Navbar.Brand href="/">
                        <Image src="/pfp.webp" width="30" height="30" className="d-inline-block align-top" style={{ borderRadius: "50%" }} alt="Astolfo's PFP" />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav className="me-auto">
                            <Nav.Link href="/meshsave">Meshsave</Nav.Link>
                            <NavDropdown title="Projects">
                                <NavDropdown.Item href="/fembot">FemBot</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/femboy">Femboy List</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/project/astolfoiscomingforyou">Astolfo is Coming For You</NavDropdown.Item>
                                <NavDropdown.Item href="/project/astolfomod">Astolfo Forge Mod</NavDropdown.Item>
                                <NavDropdown.Item href="/project/astolforesourcepack">Astolfo Resource Pack</NavDropdown.Item>
                                <NavDropdown.Item href="/project/astolfos">AstolfOS</NavDropdown.Item>
                                <NavDropdown.Item href="/project/sharex">ShareX Settings</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/project/olderprojects">Older Projects</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/social">Socials</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
