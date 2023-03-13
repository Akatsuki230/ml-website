import { Button, Chip, CircularProgress, Dialog, Skeleton, Snackbar, SnackbarContent, TextField, Typography } from '@mui/material'
import { MongoClient } from 'mongodb'
import { MuiColorInput } from 'mui-color-input'
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
                <meta name="title" content="mldkyt's meshsave" />
                <meta name="description" content="The biggest abomination in My Summer Car, now for download" />
                <meta name="image" content="https://media.discordapp.net/attachments/768887055438053476/1042910848529739777/shitsuma1.png" />
            </Head>
            <NavBar selected="meshsave"/>
            <Typography variant='h3'>My meshsave</Typography>
            <Typography>In my save, the car looks like it has been through a war zone. The car's body is badly damaged and has been crashed at high speed multiple times. The mesh of the car is severely damaged and it looks like it has been pieced back together. </Typography>
            
            <div style={imageParentStyle}>
                <img width={imgWidth} style={imageStyle} src='https://media.discordapp.net/attachments/768887055438053476/1042910848529739777/shitsuma1.png'></img>
                <img width={imgWidth} style={imageStyle} src='https://media.discordapp.net/attachments/768887055438053476/1042910848886259782/shitsuma2.png'></img>
                <img width={imgWidth} style={imageStyle} src='https://media.discordapp.net/attachments/768887055438053476/1042910849192435812/shitsuma3.png'></img>
                <img width={imgWidth} style={imageStyle} src='https://media.discordapp.net/attachments/768887055438053476/1042910849477652481/shitsuma4.png'></img>
            </div>
            <Typography>People that liked this: </Typography>
            {peopleLiked.length == 0 && (
                <div style={{display: 'inline-flex'}}>
                    <Skeleton sx={{width: '100px', margin: '4px'}} variant='rounded' />
                    <Skeleton sx={{width: '100px', margin: '4px'}} variant='rounded' />
                    <Skeleton sx={{width: '100px', margin: '4px'}} variant='rounded' />
                    <Skeleton sx={{width: '100px', margin: '4px'}} variant='rounded' />
                    <Skeleton sx={{width: '100px', margin: '4px'}} variant='rounded' />
                    <Skeleton sx={{width: '100px', margin: '4px'}} variant='rounded' />
                </div>
            )}
            {peopleLiked.map((like) => {
                // if the color is dark, make the text white
                const color = tinycolor(like.color);
                const textColor = color.isDark() ? '#ffffff' : '#000000';
                return (
                    <Chip label={like.name} sx={{backgroundColor: like.color, color: textColor}} />
                );
            })}
            <br/>
            <br/>
            <Button disabled={likedStatus != 'eligible'} variant='contained' onClick={_ => setLikeFormShown(true)}>
                {likedStatus == 'loading' ? (
                    <><CircularProgress /> <Typography sx={{marginLeft: '1rem'}}>Checking if you liked the meshsave</Typography></>
                ) : (
                    likedStatus == 'eligible' ? (
                        'Like'
                    ) : (
                        'Already Liked'
                    )
                )}
            </Button>
            <br/>
            <br/>
            <Button variant='contained' onClick={dl}>Download meshsave</Button>

            <Dialog open={likeFormShown}>
                <div style={{padding: '1rem'}}>
                    <Typography variant='h5'>Like the meshsave</Typography>
                    <Typography variant='body2'>You can only like this once per network. Choose your username wisely.</Typography>
                    <br/>
                    <TextField label='Name' value={likeFormName} onChange={x => setLikeFormName(x.currentTarget.value)} />
                    <br/>
                    <br/>
                    <MuiColorInput value={likeFormColor} onChange={(_, x) => setLikeFormColor(x.hex)} />
                    <br/>
                    <br/>
                    <Button variant='contained' disabled={likeFormLoading} onClick={submitLike}>{likeFormLoading ? <CircularProgress /> : "Like"}</Button>
                    <Button sx={{marginLeft: '1rem'}} variant='contained' color='error' disabled={likeFormLoading} onClick={_ => setLikeFormShown(false)}>Close</Button>
                </div>
            </Dialog>

            <Snackbar 
                autoHideDuration={1000} 
                open={likeFormError != ''} 
                onClose={_ => setLikeFormError('')} 
                message={`Error: ${likeFormError}`} />
        </>
    );
}
