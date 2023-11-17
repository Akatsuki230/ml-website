import FinalNavbar from '@/components/NavBar';
import { Container } from 'react-bootstrap';

export default function Error() {
    return (
        <>
            <FinalNavbar />
            <Container>
                <h1>This website has moved</h1>
                <p>Please change all your bookmarks to point to <a href="https://programmerastolfo.github.io">https://programmerastolfo.github.io</a> and notify Programmer Astolfo about any forgotten links.</p>
                <p>This website will dissapear on 10/2024</p>
            </Container>
        </>
    )
}