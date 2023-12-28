import { Button, Modal } from "react-bootstrap";

export default function ChatSummaryHelpModal(props: { show: boolean, onHide: () => void}) {

    return <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header>Chat Summary</Modal.Header>
        <Modal.Body>
            <h1>About</h1>
            <p>The Chat Summary module sends a message every midnight into the channels it has been set up to send the message to with the statistics of the channel.</p>
            <p>The statistics include:</p>
            <ul>   
                <li>Today's messages sent</li>
                <li>Instances of UwU</li>
                <li>Instances of :3</li>
                <li>Instances of meow</li>
                <li>Top 5 chatters</li>
            </ul>
            <p>The system works in UTC time for universal functionality.</p>
            <h2>Setup</h2>
            <p>To set up this module, simply add the channels into the chat summary module:</p>
            <p>
                <code>
                    /settings chatsummary add-channel
                </code>
            </p>
            <p>Note that the command starts counting from the point it's ran. So it won't count all messages from today.</p>
            <p>To remove a channel:</p>
            <p>
                <code>
                    /settings chatsummary remove-channel
                </code>
            </p>
            <p>Removing a channel makes the bot forget how many messages were sent in that channel so if you re-add it it won't have the message counts anymore.</p>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
    </Modal>
}
