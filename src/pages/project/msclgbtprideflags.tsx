import FinalNavbar from "@/components/NavBar";
import { useState } from "react";
import { Container, Image, Nav, Tabs } from "react-bootstrap";

function Description() {
    return <>
        <h2>Description</h2>
        <p>
            This mod adds LGBT pride flags to My Summer Car. It is a mod for the game My Summer Car by Amistech Games.
        </p>
        <p>
            The mod adds the following flags:
        </p>
        <ul>
            <li>Lesbian Flag</li>
            <li>Gay Flag</li>
            <li>Bi Flag</li>
            <li>Trans Flag</li>
            <li>Intersex Flag</li>
            <li>Asexual Flag</li>
            <li>Pansexual Flag</li>
        </ul>
        <p>
            It also has the ability to save the flags and duplicate the flags.
        </p>
    </>
}

function Images() {
    return <>
        <h2>Images</h2>
        <Image src="/lgbtprideflags/all.webp" alt="All the flags :3" style={{
            width: '100%'
        }} />
        <br />
        <Image src="/lgbtprideflags/lesbian.webp" alt="Lesbian flag" style={{
            width: '100%'
        }} />
        <br />
        <Image src="/lgbtprideflags/gay.webp" alt="LGBT/Gay flag" style={{
            width: '100%'
        }} />
        <br />
        <Image src="/lgbtprideflags/bi.webp" alt="Bi Flag" style={{
            width: '100%'
        }} />
        <br />
        <Image src="/lgbtprideflags/trans.webp" alt="Trans Flag" style={{
            width: '100%'
        }} />
        <br />
        <Image src="/lgbtprideflags/intersex.webp" alt="Intersex Flag" style={{
            width: '100%'
        }} />
        <br />
        <Image src="/lgbtprideflags/bi.webp" alt="Bisexual Flag" style={{
            width: '100%'
        }} />
    </>
}

export default function MSCPrideFlags() {

    const [key, setKey] = useState('description');

    return (
        <>
            <FinalNavbar />
            <Container>
                <h1>LGBT Pride Flags mod</h1>
                <Nav variant="tabs" defaultActiveKey="description" onSelect={x => setKey(x)} activeKey={key}>
                    <Nav.Item>
                        <Nav.Link eventKey="description">Description</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="images">Images</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="comments">Comments</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="bug-reports">Bug Reports</Nav.Link>
                    </Nav.Item>
                </Nav>

                {key === 'description' && <Description />}
                {key === 'images' && <Images />}
            </Container>
        </>
    )
}
