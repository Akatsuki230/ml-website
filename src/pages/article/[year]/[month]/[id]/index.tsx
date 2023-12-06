import FinalFooter from "@/components/Footer";
import FinalNavbar from "@/components/NavBar";
import ViewTracker from "@/components/ViewTracker";
import { GetServerSidePropsContext } from "next";
import { Container } from "react-bootstrap";

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

  const { year, month, id } = ctx.params;
  const article = data.find(
    (article) =>
      article.postYear === +year &&
      article.postMonth === +month &&
      article.id === id
  );
  if (!article) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      article,
    },
  };
}

export default function Article(props: { article: ArticleType }) {
  const fullDate = `${props.article.postYear}/${props.article.postMonth}/${props.article.postDay}`;
  return (
    <>
      <FinalNavbar />
      <Container>
        <h1>{props.article.title}</h1>
        <p>
          <small>Posted on {fullDate}</small>
        </p>
        {props.article.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        <br />
        <ViewTracker />
      </Container>
    </>
  );
}
