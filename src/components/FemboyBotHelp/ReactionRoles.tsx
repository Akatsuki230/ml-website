import { Button, Modal } from "react-bootstrap";
export default function ReactionRolesHelpModal(props: { show: boolean, onHide: () => void}) {

    return <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header>Reaction Roles</Modal.Header>
        <Modal.Body>
            <h1>About</h1>
            <p>The Reaction Roles module adds, well reaction roles.</p>
            <p>You can add up to 9 roles into one reaction role, and you can create as many reaction roles as you want in one server.</p>
            <p>There are multiple types of reaction roles you can add. Here is a list:</p>
            <ul>
                <li>
                    <h3>Normal</h3>
                    <p>Normal reaction roles behave like toggles. Clicking a button will add a role, and clicking it again will remove a role.</p>
                    <p>To create a normal reaction role:</p>
                    <p>
                        <code>
                            /settings reactionroles new
                        </code>
                    </p>
                    <p>and during the setup process, select the <code>normal</code> mode.</p>
                </li>
                <li>
                    <h3>Add</h3>
                    <p>Add only reaction roles allow the member to only give themselves the role.</p>
                    <p>To create an add only reaction role:</p>
                    <p>
                        <code>
                            /settings reactionroles new
                        </code>
                    </p>
                    <p>and during the setup process, select the <code>add</code> mode.</p>
                </li>
                <li>
                    <h3>Remove</h3>
                    <p>Remove only reaction roles allow the member to only remove themselves from a role.</p>
                    <p>To create an add only reaction role:</p>
                    <p>
                        <code>
                            /settings reactionroles new
                        </code>
                    </p>
                    <p>and during the setup process, select the <code>remove</code> mode.</p>
                </li>
                <li>
                    <h3>Single</h3>
                    <p>Single reaction roles allow selecting only one role from a bigger selection of roles.</p>
                    <p>To create a single reaction role:</p>
                    <p>
                        <code>
                            /settings reactionroles new
                        </code>
                    </p>
                    <p>and during the setup process, select the <code>single</code> mode.</p>
                </li>
            </ul>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
    </Modal>
}
