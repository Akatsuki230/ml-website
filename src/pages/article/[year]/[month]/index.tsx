import FinalNavbar from "@/components/NavBar";
import { GetServerSidePropsContext } from "next";
import { Container, ListGroup, Table } from "react-bootstrap";

interface ArticleType {
  id: string;
  postDay: number;
  postMonth: number;
  postYear: number;
  title: string;
  paragraphs: string[];
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  let data = (await (
    await fetch(`${process.env.FIREBASE_URL}/articles.json`)
  ).json()) as ArticleType[];
  if (!data) {
    data = [];
  }
  let articles = data.filter(
    (x) => x.postYear === +ctx.params.year && x.postMonth === +ctx.params.month
  );

  return {
    props: {
      articles,
      year: ctx.params.year,
      month: ctx.params.month,
    },
  };
}

export default function MonthList(props: {
  articles: ArticleType[];
  year: string;
  month: string;
}) {
  return (
    <>
      <FinalNavbar />

      <Container>
        <h1>
          List of articles for {props.year}/{props.month}
        </h1>
        <ListGroup>
          {props.articles.map((article, index) => (
            <ListGroup.Item key={index}>
              <h3>
                <a
                  href={`/article/${article.postYear}/${article.postMonth}/${article.id}`}
                >
                  {article.title}
                </a>
              </h3>
              <p>
                <small>{article.paragraphs[0].substring(0, 100)}</small>
              </p>
              <p>
                <small>Posted on {article.postYear}/{article.postMonth}/{article.postDay}</small>
              </p>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    </>
  );
}
