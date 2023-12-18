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
                                <small style={{marginLeft: '0.4em', color: 'grey', fontSize: '70%'}}>Online services</small>
                                <NavDropdown.Item href="/article/newest">Newest articles</NavDropdown.Item>
                                <NavDropdown.Item href="/fembot">FemBot</NavDropdown.Item>
                                <small style={{marginLeft: '0.4em', color: 'grey', fontSize: '70%'}}>Smaller
                                    projects</small>
                                <NavDropdown.Item href="/project/astolfoiscomingforyou">Astolfo is Coming For
                                    You</NavDropdown.Item>
                                <NavDropdown.Item href="/project/astolfomod">Astolfo Forge Mod</NavDropdown.Item>
                                <NavDropdown.Item href="/project/astolforesourcepack">Astolfo Resource
                                    Pack</NavDropdown.Item>
                                <NavDropdown.Item href="/project/astolfos">AstolfOS</NavDropdown.Item>
                                <NavDropdown.Item href="/project/sharex">ShareX Settings</NavDropdown.Item>
                                <NavDropdown.Item href="/femboy">Femboy List</NavDropdown.Item>
                                <small style={{marginLeft: '0.4em', color: 'grey', fontSize: '70%'}}>Older</small>
                                <NavDropdown.Item href="/project/olderprojects">Older Projects</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/social">Socials</Nav.Link>
                            <Nav.Link href="/discord">Discord</Nav.Link>
                            <Nav.Link href="/pronouns">Pronouns</Nav.Link>
                            <Nav.Link href="/ideas">Send Ideas</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
