import { Button, Modal } from "react-bootstrap";

export default function WelcomeGoodbyeHelpModal(props: { show: boolean, onHide: () => void}) {

    return <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header>Welcome & Goodbye</Modal.Header>
        <Modal.Body>
            <h1>About</h1>
            <p>The welcome and goodbye module(s) welcome new members after they join your server and say goodbye to members that leave your server.</p>
            <h2>Setup</h2>
            <p>To set up the module, you just need to set the channel. To do that: </p>
            <p>
                <code>/settings welcome channel</code>
            </p>
            <p>
                <code>/settings goodbye channel</code>
            </p>
            <p>and it's set up! You can also change the bot to prefer usernames over nicknames using</p>
            <p>
                <code>
                    /settings welcome name
                </code>
            </p>
            <p>
                <code>
                    /settings goodbye name
                </code>
            </p>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
    </Modal>
}
