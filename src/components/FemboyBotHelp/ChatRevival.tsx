import { Button, Modal } from "react-bootstrap";


export default function ChatRevivalHelpModal(props: { show: boolean, onHide: () => void}) {

    return <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header>Chat Revive</Modal.Header>
        <Modal.Body>
            <h1>About</h1>
            <p>The Chat Revive module sends a message after a channel has been inactive for a while.</p>
            <p>The interval can be configured to your liking.</p>
            <h2>Setup</h2>
            <p>To set up this module, you need a role which people who opt in will be alerted with.</p>
            <p>To set the role, use this command:</p>
            <p>
                <code>
                    /settings chatrevive role
                </code>
            </p>
            <p>Then, you can set up as many channels as you want for chat revival.</p>
            <p>To activate this module on a channel:</p>
            <p>
                <code>
                    /settings chatrevive set
                </code>
            </p>
            <p>
                You pass in a parameter with the channel you want to set it to, and a parameter after how many minutes you want the alert to be sent after.
            </p>
            <p>
                To remove a channel for chat reviving:
            </p>
            <p>
                <code>
                    /settings chatrevive remove
                </code>
            </p>
            <p>
                Along with just the channel to remove it's chat revival feature.
            </p>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
    </Modal>
}
