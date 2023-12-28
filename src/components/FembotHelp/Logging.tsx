import { Button, Modal } from "react-bootstrap";

export default function LoggingHelpModal(props: { show: boolean, onHide: () => void}) {

    return <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header>Logging</Modal.Header>
        <Modal.Body>
            <h1>About</h1>
            <p>The logging module allows you to track who does what changes to the server and potentionally eliminate the bad admins.</p>
            <h2>Setup</h2>
            <p>Set the logging channel</p>
            <p>
                <code>/settings logging channel</code>
            </p>
            <p>That's all!</p>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
    </Modal>
}
