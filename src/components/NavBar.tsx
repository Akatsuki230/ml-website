import { Inter } from "next/font/google";
import React from "react";
import { Container, Nav, NavDropdown, Navbar, Image, Badge } from "react-bootstrap";

const inter = Inter({ subsets: ["latin"] });

export default function FinalNavbar() {
    return (
        <>
            {/*trans flag*/}
            <div style={{
                height: '20px',
                background: 'linear-gradient(to bottom, #5BCEFA 0% 20%, #F5A9B8 20% 40%, white 40% 60%, #F5A9B8 60% 80%, #5BCEFA 80% 100%)',
            }}>

            </div>
            <div className={inter.className}>
                <Navbar>
                    <Container>
                        <Navbar.Brand href="/">
                            <Image src="/pfp.webp" width="30" height="30" className="d-inline-block align-top"
                                style={{ borderRadius: "50%" }} alt="mldkyt's PFP" />
                        </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse>
                            <Nav className="me-auto">
                                <NavDropdown title="Projects">
                                    <small style={{ marginLeft: '0.4em', color: 'grey', fontSize: '70%' }}>Online
                                        services</small>
                                    <NavDropdown.Item href="/article/newest">Newest articles</NavDropdown.Item>
                                    <NavDropdown.Item href="/fembot">FemBot</NavDropdown.Item>
                                    <small style={{ marginLeft: '0.4em', color: 'grey', fontSize: '70%' }}>Smaller
                                        projects</small>
                                    <NavDropdown.Item href="/project/astolfoiscomingforyou">Astolfo is Coming For
                                        You</NavDropdown.Item>
                                    <NavDropdown.Item href="/project/astolfos">AstolfOS</NavDropdown.Item>
                                    <NavDropdown.Item href="/femboy">Femboy List</NavDropdown.Item>
                                    <small style={{ marginLeft: '0.4em', color: 'grey', fontSize: '70%' }}>Older</small>
                                    <NavDropdown.Item href="/project/astolfomod">
                                        Astolfo Forge Mod
                                        <Badge bg="warning">Archive</Badge>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/project/astolforesourcepack">Astolfo Resource
                                        Pack
                                        <Badge bg="warning">Archive</Badge>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/project/olderprojects">Older Projects</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="More">
                                    <NavDropdown.Item href="/meshsave">Meshsave</NavDropdown.Item>
                                    <NavDropdown.Item href="/social">Socials</NavDropdown.Item>
                                    <NavDropdown.Item href="/discord">Discord</NavDropdown.Item>
                                    <NavDropdown.Item href="/pronouns">Pronouns</NavDropdown.Item>
                                    <NavDropdown.Item href="/ideas">Send Ideas</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    );
}
