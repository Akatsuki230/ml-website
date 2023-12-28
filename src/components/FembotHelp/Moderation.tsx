import { Button, Modal } from "react-bootstrap";

export default function ModerationHelpModal(props: { show: boolean, onHide: () => void}) {

    return <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header>Moderation</Modal.Header>
        <Modal.Body>
            <h1>About</h1>
            <p>The moderation module helps with moderation. It adds the usual commands like <code>/ban</code>, <code>/kick</code>, <code>/timeout</code>, <code>/remove-timeout</code>.</p>
            <p>These commands send the victim a direct message containing the reason so they know what happened.</p>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
    </Modal>
}
