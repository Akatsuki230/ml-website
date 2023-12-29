import { Button, Modal } from "react-bootstrap";
import { Inter } from "next/font/google";
const inter = Inter({subsets: ['latin']});

export default function ChatStreaksHelpModal(props: { show: boolean, onHide: () => void}) {

    return <Modal show={props.show} onHide={props.onHide} className={inter.className}>
        <Modal.Header>Chat Streaks</Modal.Header>
        <Modal.Body>
            <h1>About</h1>
            <p>The Chat Streaks module counts how many days a person has sent a message in Discord over how many days consencutively</p>
            <p>If they skip one day, their streak is reset back to 1.</p>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
    </Modal>
}
