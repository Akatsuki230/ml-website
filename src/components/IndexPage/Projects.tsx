import { Card, Button } from "react-bootstrap";
import styles from '@/styles/projects.module.scss';

export default function Projects() {
    return (
        <>
            <h1>Projects</h1>

            <Card>
                <Card.Body>
                    <h2>FemboyBot</h2>
                    <p>This is a Discord bot made by mldkyt.</p>
                    <Button as="a" href="/femboybot">Invite, more information and feature suggestion here!</Button>
                </Card.Body>
            </Card>

            <Card className={styles.cardspace}>
                <Card.Body>
                    <h2>Astolfo is coming for you</h2>
                    <p>A program where Astolfo comes for you.</p>
                    <Button as="a" href="/project/astolfoiscomingforyou">Download here!</Button>
                </Card.Body>
            </Card>

            <Card className={styles.cardspace}>
                <Card.Body>
                    <h2>AstolfOS</h2>
                    <p>An operating system with Astolfo in a lot of places.</p>
                    <Button as="a" href="/project/astolfos">Download here!</Button>
                </Card.Body>
            </Card>

            <Card className={styles.cardspace}>
                <Card.Body>
                    <h2>Femboy List</h2>
                    <p>A femboy list.</p>
                    <Button as="a" href="/femboy">View it here</Button>
                </Card.Body>
            </Card>

            <Card className={styles.cardspace}>
                <Card.Body>
                    <h2>LGBTQ Pride Flags</h2>
                    <p>LGBTQ Pride Flags for a game named My Summer Car.</p>
                    <Button as="a" href="/project/msclgbtprideflags">View them here</Button>
                </Card.Body>
            </Card>

            <Card className={styles.cardspace}>
                <Card.Body>
                    <h2>OldCarSounds</h2>
                    <p>A mod for My Summer Car that adds old sounds to the Satsuma.</p>
                    <Button as="a" href="/project/oldcarsounds">View it here</Button>
                </Card.Body>
            </Card>

            <Card className={styles.cardspace}>
                <Card.Body>
                    <h2>Old Hayosiko</h2>
                    <p>A mod for My Summer Car that adds old sounds to the Hayosiko.</p>
                    <Button as="a" href="/project/oldhayosiko">View it here</Button>
                </Card.Body>
            </Card>

            <Card className={styles.cardspace}>
                <Card.Body>
                    <h2>Old Truck Sounds</h2>
                    <p>A mod for My Summer Car that adds old sounds to the Truck.</p>
                    <Button as="a" href="/project/oldtruck">View it here</Button>
                </Card.Body>
            </Card>

            <Card className={styles.cardspace}>
                <Card.Body>
                    <h2>Asphalt Roads</h2>
                    <p>A mod for My Summer Car that adds asphalt roads to the game.</p>
                    <Button as="a" href="/project/asphaltroads">View it here</Button>
                </Card.Body>
            </Card>

            <Card className={styles.cardspace}>
                <Card.Body>
                    <h2>Kekmet More Gears</h2>
                    <p>A deprecated mod for My Summer Car that adds more gears to the Kekmet.</p>
                    <Button as="a" href="/project/kekmetmoregears">View it here</Button>
                </Card.Body>
            </Card>
        </>
    )
}