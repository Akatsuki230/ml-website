import { Inter } from "next/font/google";
import { Container, Nav, NavDropdown, Navbar, Image } from "react-bootstrap";

const inter = Inter({ subsets: ["latin"] });

export default function FinalFooter() {
  return (
    <div className={inter.className}>
      <Navbar>
        <Container>
          <Navbar.Collapse>
            <Navbar.Text>© {new Date().getFullYear()} mldkyt</Navbar.Text>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <small>v102923</small>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
