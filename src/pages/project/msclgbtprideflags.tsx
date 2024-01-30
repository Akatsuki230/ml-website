import FinalNavbar from "@/components/NavBar";
import Head from "next/head";
import ViewTracker from "@/components/ViewTracker";
import { useEffect, useRef, useState } from "react";
import { Alert, Button, Card, Container, FormControl, Image, Modal, Nav } from "react-bootstrap";
import styles from '@/styles/msclgbtprideflags.module.css';

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
            <li>(added in 1.1) Pansexual Flag</li>
            <li>(added in 1.2) Nonbinary Flag</li>
            <li>(added in 1.3) Aromantic Flag</li>
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
        }} className={styles.image} />
        <br />
        <Image src="/lgbtprideflags/lesbian.webp" alt="Lesbian flag" style={{
            width: '100%'
        }} className={styles.image} />
        <br />
        <Image src="/lgbtprideflags/gay.webp" alt="LGBT/Gay flag" style={{
            width: '100%'
        }} className={styles.image} />
        <br />
        <Image src="/lgbtprideflags/bi.webp" alt="Bi Flag" style={{
            width: '100%'
        }} className={styles.image} />
        <br />
        <Image src="/lgbtprideflags/trans.webp" alt="Trans Flag" style={{
            width: '100%'
        }} className={styles.image} />
        <br />
        <Image src="/lgbtprideflags/intersex.webp" alt="Intersex Flag" style={{
            width: '100%'
        }} className={styles.image} />
        <br />
        <Image src="/lgbtprideflags/bi.webp" alt="Bisexual Flag" style={{
            width: '100%'
        }} className={styles.image} />
        <Image src="/lgbtprideflags/pansexual.webp" alt="Pansexual Flag" style={{
            width: '100%'
        }} className={styles.image} />
        <Image src="/lgbtprideflags/nonbinary.webp" alt="Nonbinary Flag" style={{
            width: '100%'
        }} className={styles.image} />
        <Image src="/lgbtprideflags/aromantic.webp" alt="Aromantic Flag" style={{
            width: '100%'
        }} className={styles.image} />
    </>
}

function Comments() {
    const [comments, setComments] = useState([] as {
        name: string,
        comment: string
    }[]);

    const [commentModalRulesOpen, setCommentModalRulesOpen] = useState(false);
    const [commentModalPrivacyOpen, setCommentModalPrivacyOpen] = useState(false);
    const [commentModalOpen, setCommentModalOpen] = useState(false);

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
    const [commentError, setCommentError] = useState("");

    function leaveComment() {
        setCommentAdding(true)
        fetch('https://api.ipify.org').then(x => {
            if (!x.ok) {
                alert('Internal error, cannot comment right now.');
                setCommentModalOpen(false);
                setCommentAdding(false);
                return
            }

            x.text().then(y => {
                fetch('/api/msclgbt/addcomment', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: commentName,
                        comment: commentComment,
                        ip: y.trim()
                    })
                }).then(x => {
                    if (!x.ok) {
                        x.json().then(z => {
                            setCommentError(z.error)
                            setCommentAdding(false)
                        })
                        return
                    }
                    setCommentModalOpen(false)
                    setCommentAdding(false)
                })
            })
        })
    }

    function acceptRules() {
        setCommentModalRulesOpen(false)
        setCommentModalPrivacyOpen(true)
    }

    function acceptPrivacy() {
        setCommentModalPrivacyOpen(false)
        setCommentModalOpen(true)
    }

    return <>
        <h2>Comments</h2>
        <p>
            <Alert>
                <p>Comments are available on NexusMods as well.</p>
                <Button as="a" href="https://www.nexusmods.com/mysummercar/mods/4581?tab=posts" target="_blank">View on NexusMods</Button>
            </Alert>
        </p>
        <p>
            <Button onClick={() => setCommentModalRulesOpen(true)}>Leave a comment</Button>
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

        <Modal show={commentModalRulesOpen} onHide={() => setCommentModalRulesOpen(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Comment Rules</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    Please follow the following rules while commenting:
                </p>
                <ul>
                    <li>No homophobia/transphobia</li>
                    <li>No toxicity</li>
                    <li>If you hate this mod, simply don't download it</li>
                </ul>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={acceptRules}>I agree</Button>
                <Button variant="secondary" onClick={() => setCommentModalRulesOpen(false)}>Close</Button>
            </Modal.Footer>
        </Modal>

        <Modal show={commentModalPrivacyOpen} onHide={() => setCommentModalPrivacyOpen(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Comment Rules</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h2>Your privacy when submitting this form</h2>
                <p>By submitting this form, you agree that mldkyt is going to be able to read your comment and your username, before the comment gets approved. Your IP will be associated with the request to prevent spam. The IP will be deleted from mldkyt's database if the comment gets approved, or it will be used to block you off the website if your comment is negative. Your comment might not get published and no action towards banning will be taken if your comment is not negative, but not good to post on the website.</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={acceptPrivacy}>I agree</Button>
                <Button variant="secondary" onClick={() => setCommentModalRulesOpen(false)}>Close</Button>
            </Modal.Footer>
        </Modal>

        <Modal show={commentModalOpen} onHide={() => setCommentModalOpen(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Leave a comment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <FormControl disabled={commentAdding} type="text" placeholder="Name" value={commentName} onChange={x => setCommentName(x.currentTarget.value)}></FormControl>
                </div>
                <div style={{
                    marginTop: '1em'
                }}>
                    <FormControl disabled={commentAdding} as="textarea" rows={3} placeholder="Comment" value={commentComment} onChange={x => setCommentComment(x.currentTarget.value)}></FormControl>
                </div>
                {commentError && <Alert style={{
                    marginTop: '1em'
                }} variant="danger">{commentError}</Alert>}
            </Modal.Body>
            <Modal.Footer>
                <Button disabled={commentAdding} onClick={leaveComment}>Submit comment</Button>
                <Button variant="secondary" onClick={() => setCommentModalOpen(false)}>Close</Button>
            </Modal.Footer>
        </Modal>
    </>
}

function Downloads() {
    return (
        <>
            <h1>Downloads</h1>
            <p>You can download this mod on NexusMods</p>
            <Button href="https://www.nexusmods.com/mysummercar/mods/4581?tab=files">Download</Button>
            <p>You can also build it from source on GitLab</p>
            <Button href="https://gitlab.com/MySummerCarPrideFlags">Get started</Button>
            <p>You'll need to build both the asset bundle and the mod itself for this to work.</p>
        </>
    )
}

export default function MSCPrideFlags() {

    const [key, setKey] = useState('description');

    return (
        <>
            <FinalNavbar />
            <Container>
                <Head>
                    <title>My Summer Car LGBT Pride Flags mod</title>
                    <meta name="og:title" content="LGBT Pride Flags mod for My Summer Car"></meta>
                    <meta name="description" content="This mod adds LGBT pride flags to My Summer Car. It is a mod for the game My Summer Car by..." />
                    <meta name="author" content="mldkyt" />
                    <meta name="theme-color" content="#FF77FF" />
                    <script async
                        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4021488147419187"
                        crossOrigin="anonymous"></script>
                </Head>

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
                        <Nav.Link eventKey="downloads">Downloads</Nav.Link>
                    </Nav.Item>
                </Nav>

                {key === 'description' && <Description />}
                {key === 'images' && <Images />}
                {key === 'comments' && <Comments />}
                {key === 'downloads' && <Downloads />}

                <ViewTracker />
            </Container>
        </>
    )
}
