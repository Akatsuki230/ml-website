import FinalNavbar from "@/components/NavBar";
import ViewTracker from "@/components/ViewTracker";
import { ArticleBase } from "@/types/articles";
import { GetServerSidePropsContext } from "next";
import { Inter } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import { Alert, Button, Container, FormControl, Modal } from "react-bootstrap";

interface ArticleResponse {
    id: string;
    postDay: number;
    postMonth: number;
    postYear: number;
    title: string;
    paragraphs: string[];
    likes: number;
}

const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
    let data = (await (await fetch(`${process.env.FIREBASE_URL}/articles.json`)).json()) as ArticleBase[];
    if (!data) {
        data = [];
    }

    const { year, month, id } = ctx.params;
    const article = data.find((article) => article.postYear === +year && article.postMonth === +month && article.id === id);
    if (!article) {
        return {
            notFound: true
        };
    }

    return {
        props: {
            article: {
                id: article.id,
                postDay: article.postDay,
                postMonth: article.postMonth,
                postYear: article.postYear,
                title: article.title,
                paragraphs: article.paragraphs,
                likes: article.likes?.length ?? 0
            } as ArticleResponse
        }
    };
}

export default function Article(props: Readonly<{ article: ArticleResponse }>) {
    const [likeStatus, setLikeStatus] = useState("ready" as "ready" | "liked" | "aleradyliked" | "loading");

    const [comments, setComments] = useState([] as { username: string; comment: string }[]);

    const [commentState, setCommentState] = useState("ready" as "ready" | "readyupdate");
    const [commentLoading, setCommentLoading] = useState(false);
    const [commentModalOpen, setCommentModalOpen] = useState(false);
    const [commentUsername, setCommentUsername] = useState("");
    const [commentText, setCommentText] = useState("");
    const [commentError, setCommentError] = useState("");

    const fullDate = `${props.article.postYear}/${props.article.postMonth}/${props.article.postDay}`;

    const hasRan = useRef(false);

    useEffect(() => {
        if (hasRan.current) return;
        hasRan.current = true;

        fetch(`/api/article/getcomments?postYear=${encodeURIComponent(props.article.postYear)}&postMonth=${encodeURIComponent(props.article.postMonth)}&postID=${encodeURIComponent(props.article.id)}`).then((x) => {
            if (x.status === 200) {
                x.json().then((x) => {
                    setComments(x.comments);
                    setCommentState(x.hasCommented ? "readyupdate" : "ready");
                    if (x.hasCommented) {
                        setCommentText(x.myComment.comment);
                        setCommentUsername(x.myComment.username);
                    }
                });
            }
        });
    }, [hasRan]);

    const likeArticle = async () => {
        const response = await fetch(`/api/article/like`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                postMonth: props.article.postMonth,
                postYear: props.article.postYear,
                postID: props.article.id
            })
        });
        const data = await response.text();
        if (data === "Already liked") {
            setLikeStatus("aleradyliked");
        }
        if (data === "Liked") {
            setLikeStatus("liked");
        }
    };

    const sendComment = async () => {
        setCommentLoading(true);
        setCommentError("");
        const response = await fetch(`/api/article/comment`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                postMonth: props.article.postMonth,
                postYear: props.article.postYear,
                postID: props.article.id,
                username: commentUsername,
                comment: commentText
            })
        });
        const data = await response.text();
        if (data === "Comment submitted" || data === "Comment updated") {
            location.reload();
        } else {
            setCommentError(data);
            setCommentLoading(false);
        }
    };

    const renderLikes = () => {
        switch (likeStatus) {
            case "ready":
                return <Button onClick={likeArticle}>Like the post</Button>;
            case "liked":
                return <Button disabled>Post has been liked</Button>;
            case "aleradyliked":
                return <Button disabled>Post already liked</Button>;
            case "loading":
                return <Button disabled>Loading...</Button>;
        }
    };

    const deleteComment = async () => {
        setCommentLoading(true);
        const response = await fetch(`/api/article/delcomment`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                postMonth: props.article.postMonth,
                postYear: props.article.postYear,
                postID: props.article.id
            })
        });
        const data = await response.text();
        if (data === "Comment deleted") {
            location.reload();
        } else {
            setCommentError(data);
            setCommentLoading(false);
        }
    };

    const renderArticle = () => {
        return (
            <>
                {props.article.paragraphs.map((par, ind) => {
                    if (par.startsWith("h1:")) {
                        return <h1 key={ind}>{par.slice(3)}</h1>;
                    } else if (par.startsWith("h2:")) {
                        return <h2 key={ind}>{par.slice(3)}</h2>;
                    } else if (par.startsWith("h3:")) {
                        return <h3 key={ind}>{par.slice(3)}</h3>;
                    } else if (par.startsWith("h4:")) {
                        return <h4 key={ind}>{par.slice(3)}</h4>;
                    } else if (par.startsWith("h5:")) {
                        return <h5 key={ind}>{par.slice(3)}</h5>;
                    } else if (par.startsWith("h6:")) {
                        return <h6 key={ind}>{par.slice(3)}</h6>;
                    } else if (par.startsWith("ul")) {
                        const elementsUnder = Array.from(props.article.paragraphs);
                        elementsUnder.splice(0, ind + 1);
                        let elements = [];
                        for (const element of elementsUnder) {
                            if (!element.startsWith("li")) break;
                            elements.push(element);
                        }

                        return (
                            <ul>
                                {elements.map((element, index) => {
                                    return <li key={index}>{element.slice(3)}</li>;
                                })}
                            </ul>
                        );
                    } else if (par.startsWith("ol")) {
                        const elementsUnder = Array.from(props.article.paragraphs);
                        elementsUnder.splice(0, ind + 1);
                        let elements = [];
                        for (const element of elementsUnder) {
                            if (!element.startsWith("li")) break;
                            elements.push(element);
                        }

                        return (
                            <ol>
                                {elements.map((element, index) => {
                                    return <li key={index}>{element.slice(3)}</li>;
                                })}
                            </ol>
                        );
                    } else if (par.startsWith("li:")) {
                        return <></>;
                    } else {
                        return <p key={ind}>{par}</p>;
                    }
                })}
            </>
        );
    };

    return (
        <>
            <FinalNavbar />
            <Container className={inter.className}>
                <h1>{props.article.title}</h1>
                <p>
                    <small>Posted on {fullDate}</small>
                </p>
                {renderArticle()}
                <p>Likes: {props.article.likes}</p>
                {renderLikes()}
                <h2>Comments</h2>

                <Button onClick={() => setCommentModalOpen(true)}>{commentState === "ready" ? "Leave a comment" : "Edit your comment"}</Button>
                {commentState === "readyupdate" && (
                    <Button variant="danger" onClick={deleteComment}>
                        Delete my comment
                    </Button>
                )}

                {comments.map((comment, index) => (
                    <div key={index}>
                        <h3>{comment.username}</h3>
                        <p>{comment.comment}</p>
                    </div>
                ))}

                <Modal show={commentModalOpen} onHide={() => setCommentModalOpen(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Comments</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormControl type="text" placeholder="Username" value={commentUsername} onChange={(x) => setCommentUsername(x.currentTarget.value)} />
                        <br />
                        <FormControl as="textarea" placeholder="Comment" value={commentText} onChange={(x) => setCommentText(x.currentTarget.value)} />
                        <br />
                        {commentError === "" || <Alert variant="danger">{commentError}</Alert>}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={() => setCommentModalOpen(false)} disabled={commentLoading}>
                            Close
                        </Button>
                        <Button variant="primary" disabled={commentLoading} onClick={sendComment}>
                            {commentState === "ready" ? "Post" : "Update"}
                        </Button>
                    </Modal.Footer>
                </Modal>

                <br />
                <br />
                <ViewTracker />
            </Container>
        </>
    );
}
