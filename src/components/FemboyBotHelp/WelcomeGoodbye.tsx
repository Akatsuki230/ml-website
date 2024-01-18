import { Button, Modal } from "react-bootstrap";
export default function WelcomeGoodbyeHelpModal(props: { show: boolean; onHide: () => void }) {
    return (
        <Modal show={props.show} onHide={props.onHide}>
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
                    <code>/settings welcome name</code>
                </p>
                <p>
                    <code>/settings goodbye name</code>
                </p>
                <h2>Advanced configuration</h2>
                <p>Additionally, the message can be configured to your liking.</p>
                <p>The commands</p>
                <p>
                    <code>/settings welcome embed-title</code>
                </p>
                <p>
                    <code>/settings welcome embed-message</code>
                </p>
                <p>
                    <code>/settings goodbye embed-title</code>
                </p>
                <p>
                    <code>/settings goodbye embed-message</code>
                </p>
                <p>
                    <code>/settings goodbye embed-message-kick</code>
                </p>
                <p>
                    <code>/settings goodbye embed-message-ban</code>
                </p>
                <p>
                    can be used to configure the message for joining and leaving, and for when a member is kicked or banned. If the message for kicking/banning is needed to be the same, run the <code>/settings goodbye embed-message-kick</code> command and pass the same format as for{" "}
                    <code>/settings goodbye embed-message</code>. And the same for <code>embed-message-ban</code>.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
