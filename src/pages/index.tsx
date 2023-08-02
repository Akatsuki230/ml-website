import Head from 'next/head'
import {useState} from 'react';
import {useEffect} from 'react';
import {useRef} from 'react';
import Watermark from '@/components/Watermark';
import {motion} from 'framer-motion';
import Link from 'next/link';
import Script from 'next/script';
import YouTube from '@/components/Social/YouTube';
import Twitter from '@/components/Social/Twitter';
import TikTok from '@/components/Social/TikTok';

const Home = () => {
    const [visits, setVisits] = useState('loading ');
    const hasLoaded = useRef(false);

    useEffect(() => {
        if (!hasLoaded.current) {
            fetch(`/api/getVisits`)
                .then(res => res.json())
                .then(data => {
                    setVisits(data.visits);
                });
            hasLoaded.current = true;
        }
    }, [])

    return (
        <div>
            <Head>
                <title>mldkyt's website</title>
                <meta name="title" content="mldkyt's website"/>
                <meta name="description" content="Welcome to mldkyt's website!"/>
                <meta name="author" content="mldkyt"/>
                <Script async src={process.env.ADS_URL} crossOrigin="anonymous"></Script>
            </Head>
            <h1 className='text-4xl mx-2 my-4 font-bold text-center'>Welcome to mldkyt's website!</h1>
            <p className='mx-4'>{visits} visits</p>
            <div className='text-center h-11 bg-gray-900 text-white py-2 px-0.5 rounded-lg m-2'>
                <span className='float-left ml-4'>Projects</span>
                <motion.div className='float-right'
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}>
                    <Link href='/projects'
                          className='p-2 px-3 mr-2 bg-gray-900 rounded-lg border-2 border-white'>Show</Link>
                </motion.div>
            </div>
            <div className='text-center h-11 bg-gray-900 text-white py-2 px-0.5 rounded-lg m-2'>
                <span className='float-left ml-4'>Social links</span>
                <motion.div className='float-right'
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}>
                    <Link href='/social' className='p-2 px-3 mr-2 bg-gray-900 rounded-lg border-2 border-white'>Show</Link>
                </motion.div>
            </div>
            <h2 className='text-2xl mx-2 font-bold'>About me</h2>
            <div className='mx-1 flex flex-row flex-wrap'>Hello, I'm mldkyt! I'm available
                on <YouTube/>, <Twitter/> and <TikTok /></div>
            <span className='italic mx-1'>Click on any of the tags to go to my profile on them</span>
            <div className='mx-1'>I have experience in C#, C++, C, Python, Java, Kotlin, JavaScript, TypeScript, HTML and CSS.</div>
            <Watermark/>
        </div>
    )
}

export default Home
