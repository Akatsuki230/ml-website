import FinalNavbar from "@/components/NavBar";
import ViewTracker from "@/components/ViewTracker";
import { useEffect, useRef, useState } from "react";
import { Alert, Button, Card, Container, FormControl, Image, Modal, Nav, Tabs } from "react-bootstrap";

function Description() {
    return <>
        <h2>Description</h2>
        <p>
            This mod adds LGBT pride flags to My Summer Car. It is a mod for the game My Summer Car by Amistech Games.
        </p>
        <p>
            The mod adds the following flags:
        </p>
        <ul>
            <li>Lesbian Flag</li>
            <li>Gay Flag</li>
            <li>Bi Flag</li>
            <li>Trans Flag</li>
            <li>Intersex Flag</li>
            <li>Asexual Flag</li>
            <li>Pansexual Flag</li>
        </ul>
        <p>
            It also has the ability to save the flags and duplicate the flags.
        </p>
    </>
}

function Images() {
    return <>
        <h2>Images</h2>
        <Image src="/lgbtprideflags/all.webp" alt="All the flags :3" style={{
            width: '100%'
        }} />
        <br />
        <Image src="/lgbtprideflags/lesbian.webp" alt="Lesbian flag" style={{
            width: '100%'
        }} />
        <br />
        <Image src="/lgbtprideflags/gay.webp" alt="LGBT/Gay flag" style={{
            width: '100%'
        }} />
        <br />
        <Image src="/lgbtprideflags/bi.webp" alt="Bi Flag" style={{
            width: '100%'
        }} />
        <br />
        <Image src="/lgbtprideflags/trans.webp" alt="Trans Flag" style={{
            width: '100%'
        }} />
        <br />
        <Image src="/lgbtprideflags/intersex.webp" alt="Intersex Flag" style={{
            width: '100%'
        }} />
        <br />
        <Image src="/lgbtprideflags/bi.webp" alt="Bisexual Flag" style={{
            width: '100%'
        }} />
    </>
}

function Comments() {
    const [comments, setComments] = useState([] as {
        name: string,
        comment: string
    }[]);

    const [acknowledged, setAcknowledged] = useState(false);

    const [commandModalOpen, setCommandModalOpen] = useState(false);

    const hasRan = useRef(false)

    useEffect(() => {
        if (hasRan.current) return
        hasRan.current = true

        fetch('/api/msclgbt/getcomments').then(x => {
            x.json().then(y => {
                setComments(y as { name: string, comment: string }[])
            })
        })
    }, []);

    const [commentName, setCommentName] = useState("");
    const [commentComment, setCommentComment] = useState("");
    const [commentAdding, setCommentAdding] = useState(false);

    function leaveComment() {
        setCommentAdding(true)
        fetch('/api/msclgbt/addcomment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                name: commentName,
                comment: commentComment
            })
        }).then(x => {
            setCommandModalOpen(false)
            setCommentAdding(false)
        })
    }

    return <>
        <h2>Comments</h2>
        <p>
            <Button onClick={() => setCommandModalOpen(true)}>Leave a comment</Button>
        </p>
        {comments.map((x, i) => {
            return <Card style={{
                marginBottom: '1em'
            }} key={i}>
                <Card.Header>{x.name}</Card.Header>
                <Card.Body>
                    <Card.Text>{x.comment}</Card.Text>
                </Card.Body>
            </Card>
        })}

        <Modal show={commandModalOpen} onHide={() => setCommandModalOpen(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Leave a comment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <Alert variant="danger">
                        <h1>WARNING</h1>
                        <p>Leaving negative comments <strong>WILL RESULT FROM A BAN FROM THE ENTIRE WEBSITE!</strong></p>
                    </Alert>
                    <Alert variant="info">
                        Your comment will not appear on the website until mldkyt approves it.
                    </Alert>
                </div>
                {acknowledged ? <>
                    <div>
                        <FormControl disabled={commentAdding} type="text" placeholder="Name" value={commentName} onChange={x => setCommentName(x.currentTarget.value)}></FormControl>
                    </div>
                    <div style={{
                        marginTop: '1em'
                    }}>
                        <FormControl disabled={commentAdding} as="textarea" rows={3} placeholder="Comment" value={commentComment} onChange={x => setCommentComment(x.currentTarget.value)}></FormControl>
                    </div>
                </> : <>
                    <h2>I READ THE MESSAGE ABOVE AND WANT TO COMMENT.</h2>
                    <Button onClick={() => setAcknowledged(true)}>I understand</Button>
                    <Button variant="secondary" onClick={() => setCommandModalOpen(false)} style={{
                        marginLeft: '1em'
                    }}>I don't understand</Button>
                </>}
            </Modal.Body>
            <Modal.Footer>
                {acknowledged && <Button disabled={commentAdding} onClick={leaveComment}>Submit comment</Button>}
                <Button variant="secondary" onClick={() => setCommandModalOpen(false)}>Close</Button>
            </Modal.Footer>
        </Modal>
    </>
}

function BugReports() {
    return <>
        <h2>Bug reports are available on Nexus Mods.</h2>
        <Button as="a" href="https://www.nexusmods.com/mysummercar/mods/4581?tab=bugs">Open Nexus Mods</Button>
    </>
}

export default function MSCPrideFlags() {

    const [key, setKey] = useState('description');

    return (
        <>
            <FinalNavbar />
            <Container>
                <h1>LGBT Pride Flags mod</h1>
                <Nav variant="tabs" defaultActiveKey="description" onSelect={x => setKey(x)} activeKey={key}>
                    <Nav.Item>
                        <Nav.Link eventKey="description">Description</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="images">Images</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="comments">Comments</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="bug-reports">Bug Reports / Suggestions</Nav.Link>
                    </Nav.Item>
                </Nav>

                {key === 'description' && <Description />}
                {key === 'images' && <Images />}
                {key === 'comments' && <Comments />}
                {key === 'bug-reports' && <BugReports />}

                <ViewTracker />
            </Container>
        </>
    )
}
