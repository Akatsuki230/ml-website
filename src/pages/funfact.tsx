import {GetServerSidePropsContext} from "next";
import {sql} from "@vercel/postgres";
import Head from "next/head";
import { motion } from "framer-motion";

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
    const funFacts = await sql`SELECT * FROM funfacts`;
    const funFact = funFacts.rows[Math.floor(Math.random() * funFacts.rows.length)];
    return {
        props: {
            fact: funFact.fact
        }
    }
}

export default function FunFact(props: {fact: string}) {
    return (
        <>
            <Head>
                <title>Fun fact about mldkyt</title>
                <meta name="title" content='Random fun fact about mldkyt' />
                <meta name="theme-color" content="#2B0029" />
            </Head>
            <div className='text-center'>
                <h1 className='text-5xl'>Fun fact about mldkyt</h1>
                <p className='absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 text-3xl w-max'>{props.fact}</p>
                <br/>
                <div className='absolute left-1/2 -translate-x-1/2 bottom-4 w-screen'>
                    <motion.button
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                        className='bg-blue-600 px-8 py-2 rounded-md' onClick={() => location.reload()}>next fact</motion.button>
                    <a href='/'>
                        <motion.button
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                            className='ml-4 bg-blue-600 px-8 py-2 rounded-md'>visit main site</motion.button>
                    </a>
                    <a href='/social'>
                        <motion.button
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                            className='ml-4 bg-blue-600 px-8 py-2 rounded-md'>visit social links</motion.button>
                    </a>
                    <a href="/pronouns">
                        <motion.button
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                            className='ml-4 bg-blue-600 px-8 py-2 rounded-md'>visit pronouns</motion.button>
                    </a>
                </div>
            </div>
        </>
    )
}