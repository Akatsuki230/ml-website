import Watermark from '@/components/Watermark'
import { MongoClient } from 'mongodb'
import { GetServerSidePropsContext } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { CSSProperties, useEffect, useRef, useState } from 'react'
import tinycolor from 'tinycolor2'
import NavBar from '../components/NavBar'

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
    const { dl } = ctx.query;
    if (dl && dl === '1') {
        const mongoDB = new MongoClient(process.env.MONGODB_URI || "mongodb+srv://vercel-admin-user:S7pZrZm64HNVcLXo@cluster0.9awq2ww.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
        await mongoDB.connect();
        const db = mongoDB.db('MeshsaveData');
        const collection = db.collection('Data');
        await collection.updateOne({ type: 'downloads'} , { $inc: { downloads: 1 } });
        await mongoDB.close();
        return {
            redirect: {
                destination: 'https://cdn.discordapp.com/attachments/768887055438053476/1074257043759841321/meshsave.txt',
                permanent: false
            }
        }
    }

    return {
        props: {

        }
    }
}

interface Like {
    name: string;
    color: string;
}

const imageParentStyle: CSSProperties = {
    display: 'inline-block'
}

const imageStyle: CSSProperties = {
    margin: '10px'
}

export default function Meshsave() {
    const router = useRouter();
    const [imgWidth, setImgWidth] = useState(0);
    const [peopleLiked, setPeopleLiked] = useState<Like[]>([]);
    const [likedStatus, setLikedStatus] = useState('loading');

    const [likeFormShown, setLikeFormShown] = useState(false);
    const [likeFormName, setLikeFormName] = useState('');
    const [likeFormColor, setLikeFormColor] = useState('#ff0000');
    const [likeFormLoading, setLikeFormLoading] = useState(false);

    const [likeFormError, setLikeFormError] = useState('');

    const hasRan = useRef(false);
    
    useEffect(() => {
        document.addEventListener('resize', function() {
            setImgWidth(window.innerWidth / 4 - 30);
        })
        setImgWidth(window.innerWidth / 4 - 30);

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
            </Head>
            <NavBar />
            <br />
            <h1 className='text-3xl font-bold'>My meshsave</h1>
            <p>In my save, the car looks like it has been through a war zone. The car's body is badly damaged and has been crashed at high speed multiple times. The mesh of the car is severely damaged and it looks like it has been pieced back together. </p>
            
            <div className=''>
                <img className='drop-shadow-lg' style={imageStyle} src='https://media.discordapp.net/attachments/768887055438053476/1042910848529739777/shitsuma1.png'></img>
                <img className='drop-shadow-lg' style={imageStyle} src='https://media.discordapp.net/attachments/768887055438053476/1042910848886259782/shitsuma2.png'></img>
                <img className='drop-shadow-lg' style={imageStyle} src='https://media.discordapp.net/attachments/768887055438053476/1042910849192435812/shitsuma3.png'></img>
                <img className='drop-shadow-lg' style={imageStyle} src='https://media.discordapp.net/attachments/768887055438053476/1042910849477652481/shitsuma4.png'></img>
            </div>
            <button onClick={dl} className="bg-blue-500 m-2 px-4 py-1 rounded-lg drop-shadow-lg border-2 border-black">Download meshsave</button>
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
            <button className='m-2 px-4 py-1 bg-green-500 disabled:bg-gray-500 border-black border-2 rounded-lg drop-shadow-lg' disabled={likedStatus != 'eligible'} onClick={_ => setLikeFormShown(true)}>
                {likedStatus == 'loading' ? (
                    <>Checking if you can like...</>
                ) : (
                    likedStatus == 'eligible' ? (
                        'Like'
                    ) : (
                        'Already liked'
                    )
                )}
            </button>
            <br/>

            <div className={`${likeFormShown ? "" : "hidden"} fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-t from-gray-400 to-gray-500 drop-shadow-lg rounded-lg`}>
                <div style={{padding: '1rem'}}>
                    <button disabled={likeFormLoading} onClick={_ => setLikeFormShown(false)} className="absolute top-2 right-2 bg-red-500 w-7 rounded-lg border-2 border-black drop-shadow-lg">X</button>
                    <h1 className='text-xl font-bold'>Like the meshsave</h1>
                    <p className='text-sm'>You can only like this once per network. Choose your username wisely.</p>
                    <label>Name: </label>
                    <br/>
                    <input value={likeFormName} onChange={x => setLikeFormName(x.currentTarget.value)} />
                    <br/>
                    <label>Color: </label>
                    <br />
                    <input type='color' value={likeFormColor} onChange={x => setLikeFormColor(x.currentTarget.value)} />
                    <br/>
                    <button disabled={likeFormLoading} onClick={submitLike} className="bg-green-500 px-3 py-1 border-2 border-black rounded-lg">{likeFormLoading ? "Loading..." : "Like"}</button>
                </div>
            </div>

            <div className={`${likeFormError == '' ? '' : 'hidden'} fixed left-4 bottom-4`}>
                {likeFormError}
            </div>

            <Watermark />
        </>
    );
}
