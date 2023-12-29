import { Button, Modal } from "react-bootstrap";
import { Inter } from "next/font/google";
const inter = Inter({subsets: ['latin']});
export default function LevelingHelpModal(props: { show: boolean, onHide: () => void}) {

    return <Modal show={props.show} onHide={props.onHide} className={inter.className}>
        <Modal.Header>Leveling</Modal.Header>
        <Modal.Body>
            <h1>About</h1>
            <p>The leveling module allows you to have members level up if they're actively chatting. It's speed is based on the length of the message.</p>
            <h2>Setup</h2>
            <p>This module is activated by default. You can change the level up achivements channel:</p>
            <p>
                <code>/settings leveling channel</code>
            </p>
            <p>You can also add level up rewards:</p>
            <p>
                <code>
                    /settings leveling add-reward
                </code>
            </p>
            <p>
                <code>
                    /settings leveling remove-reward
                </code>
            </p>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
    </Modal>
}
