import { Container, Navbar } from "react-bootstrap";

export default function FinalFooter() {
    return (
        <div>
            <Navbar>
                <Container>
                    <Navbar.Collapse>
                        <Navbar.Text>© {new Date().getFullYear()} mldkyt</Navbar.Text>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <small>v20240113</small>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
