import Watermark from '@/components/Watermark';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import React, { CSSProperties, useEffect, useRef, useState } from 'react';
import tinycolor from 'tinycolor2';
import kv from '@vercel/kv';
import { motion } from 'framer-motion';

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
    const { dl } = ctx.query;
    if (dl && dl === '1') {
        await kv.incr('meshsaveDownloads');
        return {
            redirect: {
                destination: 'https://cdn.discordapp.com/attachments/768887055438053476/1074257043759841321/meshsave.txt',
                permanent: false
            }
        }
    }

    return { props: {} }
}

interface Like {
    name: string;
    color: string;
}

const imageStyle: CSSProperties = {
    margin: '10px',
    width: 'calc(100% - 20px)',
}

export default function Meshsave() {
    const [peopleLiked, setPeopleLiked] = useState<Like[]>([]);
    const [likedStatus, setLikedStatus] = useState('loading');

    const [likeFormShown, setLikeFormShown] = useState(false);
    const [likeFormName, setLikeFormName] = useState('');
    const [likeFormColor, setLikeFormColor] = useState('#ff0000');
    const [likeFormLoading, setLikeFormLoading] = useState(false);

    const [likeFormError, setLikeFormError] = useState('');

    const hasRan = useRef(false);
    
    useEffect(() => {
        if (!hasRan.current) {
            hasRan.current = true;
            fetch('/api/meshsave/getLiked').then(res => res.json()).then(data => {
                setPeopleLiked(data);
                fetch('/api/meshsave/checkIfLiked').then(res => res.json()).then(data => {
                    setLikedStatus(data.liked);
                });
            });
        }
    });

    function dl() {
        location.href = '/meshsave?dl=1'
    }

    function submitLike() {
        setLikeFormLoading(true);
        fetch('/api/meshsave/addLike', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: likeFormName,
                color: likeFormColor
            })
        }).then(res => res.json()).then(data => {
            if (data.success) {
                location.reload();
            }
            else {
                setLikeFormError(data.reason);
                setLikeFormLoading(false);
            }
        });
    }

    return (
        <>
            <Head>
                <title>mldkyt's website</title>
                <meta name="title" content="mldkyt's meshsave | mldkyt's website" />
                <meta name="description" content="The biggest abomination in My Summer Car, now for download" />
                <meta name="og:image" content="https://media.discordapp.net/attachments/768887055438053476/1042910848529739777/shitsuma1.png" />
                <script async src={process.env.ADS_URL} crossOrigin="anonymous"></script>
            </Head>
            <br />
            <h1 className='text-3xl font-bold ml-2'>My meshsave</h1>
            <p className='ml-4'>In my save, the car looks like it has been through a war zone. The car's body is badly damaged and has been crashed at high speed multiple times. The mesh of the car is severely damaged and it looks like it has been pieced back together. </p>
            
            <div className=''>
                <img className='drop-shadow-lg' style={imageStyle} src='https://media.discordapp.net/attachments/768887055438053476/1042910848529739777/shitsuma1.png'></img>
                <img className='drop-shadow-lg' style={imageStyle} src='https://media.discordapp.net/attachments/768887055438053476/1042910848886259782/shitsuma2.png'></img>
                <img className='drop-shadow-lg' style={imageStyle} src='https://media.discordapp.net/attachments/768887055438053476/1042910849192435812/shitsuma3.png'></img>
                <img className='drop-shadow-lg' style={imageStyle} src='https://media.discordapp.net/attachments/768887055438053476/1042910849477652481/shitsuma4.png'></img>
            </div>
            <h2 className='text-2xl'>People that liked this: </h2>
            {peopleLiked.length == 0 && (
                <>Loading...</>
            )}
            <div className='flex flex-wrap'>
                {peopleLiked.map((like) => {
                    // if the color is dark, make the text white
                    const color = tinycolor(like.color);
                    const textColor = color.isDark() ? '#ffffff' : '#000000';
                    return (
                        <div style={{
                            backgroundColor: like.color,
                            color: textColor,
                        }} className="border-2 border-black m-0.5 rounded-xl drop-shadow-lg">
                            <span className='mx-2'>{like.name}</span>
                        </div>
                    );
                })}
            </div>
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={dl} className="bg-black text-white border-white border-2 rounded-md px-2 py-1 ml-2">Download meshsave</motion.button>
            <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className='bg-black text-white border-white border-2 rounded-md px-2 py-1 ml-2 disabled:bg-gray-300' disabled={likedStatus != 'eligible'} onClick={_ => setLikeFormShown(true)}>
                {likedStatus == 'loading' ? (
                    <>Checking if you can like...</>
                ) : (
                    likedStatus == 'eligible' ? (
                        'Like'
                    ) : (
                        'Already liked'
                    )
                )}
            </motion.button>
            <br/>

            <motion.div 
                initial={{
                    opacity: 0,
                    transform: 'translate(-50%, -50%) scale(0.5)'
                }}
                animate={{
                opacity: likeFormShown ? 1 : 0,
                transform: `translate(-50%, -50%) scale(${likeFormShown ? 1 : 0.5})`
            }} className='fixed left-1/2 top-1/2 bg-black rounded-lg'>
                <div style={{padding: '1rem'}}>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        disabled={likeFormLoading} onClick={_ => setLikeFormShown(false)} className="absolute top-2 right-2 w-7 rounded-lg border-2 border-white">X</motion.button>
                    <h1 className='text-xl font-bold'>Like the meshsave</h1>
                    <label>Name: </label>
                    <br/>
                    <motion.input initial={{padding: '3px 6px'}} whileHover={{padding: '6px 9px'}} whileTap={{padding: '2px 4px'}} className='bg-black text-white border-2 border-white rounded-lg' value={likeFormName} onChange={x => setLikeFormName(x.currentTarget.value)} />
                    <br/>
                    <label>Color: </label>
                    <br />
                    <motion.input whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} className='bg-black w-full' type='color' value={likeFormColor} onChange={x => setLikeFormColor(x.currentTarget.value)} />
                    <br/>
                    <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} disabled={likeFormLoading} onClick={submitLike} className="px-3 py-1 border-2 border-white rounded-lg disabled:bg-gray-300">{likeFormLoading ? "Loading..." : "Like"}</motion.button>
                </div>
            </motion.div>

            <div className={`${likeFormError == '' ? '' : 'hidden'} fixed left-4 bottom-4`}>
                {likeFormError}
            </div>

            <Watermark />
        </>
    );
}
