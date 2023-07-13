import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import {useState} from 'react';
import {useEffect} from 'react';
import {useRef} from 'react';
import Watermark from '@/components/Watermark';
import {motion} from 'framer-motion';
import Link from 'next/link';
import Script from 'next/script';
import YouTube from '@/components/Social/YouTube';
import Twitter from '@/components/Social/Twitter';
import Instagram from '@/components/Social/Instagram';

const Home = () => {
    const [visits, setVisits] = useState('loading ');
    const hasLoaded = useRef(false);

    useEffect(() => {
        if (!hasLoaded.current) {
            fetch('/api/getVisits')
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
            <div className='text-center h-11 bg-black border-2 border-white text-white py-2 px-0.5 rounded-lg m-2'>
                <span className='float-left ml-4'>Projects</span>
                <motion.div className='float-right'
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}>
                    <Link href='/projects'
                          className='p-2 px-3 mr-2 bg-black rounded-lg border-2 border-white'>Show</Link>
                </motion.div>
            </div>
            <div className='text-center h-11 bg-black border-2 border-white text-white py-2 px-0.5 rounded-lg m-2'>
                <span className='float-left ml-4'>Social links</span>
                <motion.div className='float-right'
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}>
                    <Link href='/social' className='p-2 px-3 mr-2 bg-black rounded-lg border-2 border-white'>Show</Link>
                </motion.div>
            </div>
            <div className='p-2 m-2 rounded-lg'>
                <h1 className='text-2xl'>Currently featured My Summer Car mod</h1>
                <h2 className='text-xl'>Asphalt Roads</h2>
                <p className='text-gray-400 text-sm'>Version 1.2 &bull; 20 465 views &bull; 8 409 downloads &bull; Info
                    last updated 13/7/2023</p>
                <p>Asphalt roads is a mod that replaces dirt roads with asphalt roads in My Summer Car.</p>
                <motion.div className='mt-2 mb-1.5 w-max'
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}>
                    <Link href='/project/asphaltroads' className='p-2 px-3 bg-black rounded-lg border-2 border-white'>Open
                        mod page</Link>
                </motion.div>
            </div>
            <h2 className='text-2xl mx-2 font-bold'>About me</h2>
            <div className='mx-1 flex flex-row flex-wrap'>Hello, I'm mldkyt! I'm available
                on <YouTube/>, <Twitter/> and <Instagram/></div>
            <Watermark/>
            <span className='italic'>Click on any of the tags to go to my profile on them</span>
        </div>
    )
}

export default Home
