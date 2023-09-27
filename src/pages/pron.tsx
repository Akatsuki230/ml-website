import { GetServerSidePropsContext } from "next";


export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  ctx.res.writeHead(301, { Location: "/pron" });
}

export default function Pron() {
  return null;
}