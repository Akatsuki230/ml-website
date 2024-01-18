import { Button, Modal } from "react-bootstrap";


export default function AntiRaidHelpModal(props: { show: boolean, onHide: () => void}) {

    return <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header>Anti-Raid</Modal.Header>
        <Modal.Body>
            <h1>About</h1>
            <p>The Anti-Raid module co-works with the logging module, but instead of logging, it captures high amounts of actions done by one member in a short period of time and attempts to stop them.</p>
            <p>It alerts admins and moderators in the log channel and attempts to time out the admin who's doing these actions for 10 seconds.</p>
            <p>It also comes with anti-spam built-in which is active for everyone and it deletes messages which are spammed, times out the member for 10 seconds and alerts other moderators.</p>
            <h2>Setup</h2>
            <p>To set up the anti-raid module, a log channel has to be set. This can be done using:</p>
            <p>
                <code>
                    /settings logging channel
                </code>
            </p>
            <p>To set up the anti-spam module, you can use these 3 commands:</p>
            <p>
                <code>
                    /settings antiraid spamdelete
                </code>
            </p>
            <p>
                <code>
                    /settings antiraid spamtimeout
                </code>
            </p>
            <p>
                <code>
                    /settings antiraid spamalert
                </code>
            </p>
            <p>And using the combination of these 3 you can make an anti-spam of your liking.</p>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
    </Modal>
}
