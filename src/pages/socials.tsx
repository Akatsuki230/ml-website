import { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next";

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  ctx.res.writeHead(301, { Location: "/social" });
}

export default function Socials(){
  return null;
}