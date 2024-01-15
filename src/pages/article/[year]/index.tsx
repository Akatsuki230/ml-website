import FinalNavbar from "@/components/NavBar";
import { GetServerSidePropsContext } from "next";
import { Inter } from "next/font/google";
import { Container, ListGroup } from "react-bootstrap";

interface ArticleType {
    id: string;
    postDay: number;
    postMonth: number;
    postYear: number;
    title: string;
    paragraphs: string[];
}

const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
    if (isNaN(Number(ctx.params.year))) {
        return {
            props: {
                notFound: true
            }
        };
    }
    let data = (await (await fetch(`${process.env.FIREBASE_URL}/articles.json`)).json()) as ArticleType[];
    if (!data) {
        data = [];
    }
    let articles = data.filter((x) => x.postYear === +ctx.params.year);

    return {
        props: {
            articles,
            year: ctx.params.year
        }
    };
}

export default function YearList(props: { articles: ArticleType[]; year: string }) {
    return (
        <>
            <FinalNavbar />

            <Container className={inter.className}>
                <h1>List of articles for {props.year}</h1>
                <ListGroup>
                    {props.articles.map((article, index) => (
                        <ListGroup.Item key={index}>
                            <h3>
                                <a href={`/article/${article.postYear}/${article.postMonth}/${article.id}`}>{article.title}</a>
                            </h3>
                            <p>
                                <small>{article.paragraphs[0].substring(0, 100)}</small>
                            </p>
                            <p>
                                <small>
                                    Posted on {article.postYear}/{article.postMonth}/{article.postDay}
                                </small>
                            </p>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Container>
        </>
    );
}
