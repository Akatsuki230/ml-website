import NavBar from "@/components/NavBar";
import { Container, ListGroup, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import { ArticleExtended } from "@/types/articles";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Newest() {
    const [articles, setArticles] = useState([] as ArticleExtended[]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const res1 = await fetch("/api/article/latest");
            const res1Body = await res1.json();
            setArticles(res1Body);
            setLoading(false);
        })();
    }, [setArticles]);

    function makeListGroup(articles: ArticleExtended[]) {
        return (
            <ListGroup>
                {articles.map((x, i) => {
                    return (
                        <ListGroup.Item key={i}>
                            <h3>
                                <a href={`/article/${x.postYear}/${x.postMonth}/${x.id}`}>{x.title}</a>
                            </h3>
                            <p>
                                <small>{x.paragraphs[0].substring(0, 100)}</small>
                            </p>
                            <p>
                                <small>
                                    Posted on {x.postYear}/{x.postMonth}/{x.postDay}
                                </small>
                            </p>
                        </ListGroup.Item>
                    );
                })}
            </ListGroup>
        );
    }

    function generateTheList() {
        let janItems = <></>;
        let febItems = <></>;
        let marItems = <></>;
        let aprItems = <></>;
        let mayItems = <></>;
        let junItems = <></>;
        let julItems = <></>;
        let augItems = <></>;
        let sepItems = <></>;
        let octItems = <></>;
        let novItems = <></>;
        let decItems = <></>;

        if (articles.findIndex((x) => x.postMonth === 1) !== -1) {
            janItems = (
                <>
                    <h2>January</h2>
                    {makeListGroup(articles.filter((x) => x.postMonth === 1))}
                </>
            );
        }
        if (articles.findIndex((x) => x.postMonth === 2) !== -1) {
            febItems = (
                <>
                    <h2>February</h2>
                    {makeListGroup(articles.filter((x) => x.postMonth === 2))}
                </>
            );
        }
        if (articles.findIndex((x) => x.postMonth === 3) !== -1) {
            marItems = (
                <>
                    <h2>March</h2>
                    {makeListGroup(articles.filter((x) => x.postMonth === 3))}
                </>
            );
        }
        if (articles.findIndex((x) => x.postMonth === 4) !== -1) {
            aprItems = (
                <>
                    <h2>April</h2>
                    {makeListGroup(articles.filter((x) => x.postMonth === 4))}
                </>
            );
        }
        if (articles.findIndex((x) => x.postMonth === 5) !== -1) {
            mayItems = (
                <>
                    <h2>May</h2>
                    {makeListGroup(articles.filter((x) => x.postMonth === 5))}
                </>
            );
        }
        if (articles.findIndex((x) => x.postMonth === 6) !== -1) {
            junItems = (
                <>
                    <h2>June</h2>
                    {makeListGroup(articles.filter((x) => x.postMonth === 6))}
                </>
            );
        }
        if (articles.findIndex((x) => x.postMonth === 7) !== -1) {
            julItems = (
                <>
                    <h2>July</h2>
                    {makeListGroup(articles.filter((x) => x.postMonth === 7))}
                </>
            );
        }
        if (articles.findIndex((x) => x.postMonth === 8) !== -1) {
            augItems = (
                <>
                    <h2>August</h2>
                    {makeListGroup(articles.filter((x) => x.postMonth === 8))}
                </>
            );
        }
        if (articles.findIndex((x) => x.postMonth === 9) !== -1) {
            sepItems = (
                <>
                    <h2>September</h2>
                    {makeListGroup(articles.filter((x) => x.postMonth === 9))}
                </>
            );
        }
        if (articles.findIndex((x) => x.postMonth === 10) !== -1) {
            octItems = (
                <>
                    <h2>October</h2>
                    {makeListGroup(articles.filter((x) => x.postMonth === 10))}
                </>
            );
        }
        if (articles.findIndex((x) => x.postMonth === 11) !== -1) {
            novItems = (
                <>
                    <h2>November</h2>
                    {makeListGroup(articles.filter((x) => x.postMonth === 11))}
                </>
            );
        }
        if (articles.findIndex((x) => x.postMonth === 12) !== -1) {
            decItems = (
                <>
                    <h2>December</h2>
                    {makeListGroup(articles.filter((x) => x.postMonth === 12))}
                </>
            );
        }

        return (
            <>
                {decItems}
                {novItems}
                {octItems}
                {sepItems}
                {augItems}
                {julItems}
                {junItems}
                {mayItems}
                {aprItems}
                {marItems}
                {febItems}
                {janItems}
            </>
        );
    }

    return (
        <>
            <NavBar />
            <Container className={inter.className}>
                <h1>Newest articles</h1>
                {loading ? (
                    <>
                        <Spinner animation="border" />
                        <span style={{ marginLeft: "1em" }}>Newest articles are loading, please wait...</span>
                    </>
                ) : (
                    <>{generateTheList()}</>
                )}
            </Container>
        </>
    );
}
