import {GetServerSidePropsContext} from "next";
import React from "react";
import {kv} from "@vercel/kv";

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
    const token = ctx.req.cookies.token
    if (!token) return {redirect: {destination: '/admin/login', permanent: false}}
    if (token !== process.env.ADMIN_PASSWORD) {
        ctx.res.setHeader('Set-Cookie', `token=; path=/; max-age=0; samesite=strict; secure`)
        return {redirect: {destination: '/admin/login#bad', permanent: false}}
    }

    console.log(await kv.get('live'))

    return {
        props: {
            isLive: await kv.get('live') == 'true',
            link: await kv.get('live_link')
        }
    }
}

export default function Admin(props: { isLive: boolean, link: string }) {
    const [isLive, setIsLive] = React.useState(props.isLive)
    const [isLiveSuccessCheck, setIsLiveSuccessCheck] = React.useState(false)

    const [liveLink, setLiveLink] = React.useState(props.link)
    const [liveLinkSuccessCheck, setLiveLinkSuccessCheck] = React.useState(false)

    function setLive() {
        fetch('/api/live/set').then(x => x.json()).then(x => {
            if (x.success) {
                setIsLive(x.live)
                setIsLiveSuccessCheck(true)
                setTimeout(() => {
                    setIsLiveSuccessCheck(false)
                }, 1000);
            }
        })
    }

    function setLink() {
        fetch('/api/live/setlink', {
            method: 'POST',
            body: JSON.stringify({
                link: liveLink
            })
        }).then(x => x.json()).then(x => {
            if (x.success) {
                setLiveLinkSuccessCheck(true)
                setTimeout(() => {
                    setLiveLinkSuccessCheck(false)
                }, 1000);
            }
        })
    }

    return (
        <div>
            <h1 className='text-5xl m-2'>mldkyt.com administration</h1>
            <a href="/admin/custompage">
                <button className='m-1 ml-4 p-1 bg-blue-600 rounded-md'>Custom Page Manager</button>
            </a>
            <a href="/admin/funfactmgr">
                <button className='m-1 ml-4 p-1 bg-blue-600 rounded-md'>Fun fact manager</button>
            </a>
            <h2 className='text-2xl m-2'>Live status</h2>
            <input type="checkbox" className='m-2 p-1 rounded-md' checked={isLive} onChange={setLive}/>
            <label className='m-2'>Is live</label>
            {isLiveSuccessCheck && <span className='text-green-600'>Saved!</span>}
            <br/>
            <label className='m-2'>Live link</label>
            <input type="text" className='m-2 p-1 rounded-md bg-black' value={liveLink} onChange={x => setLiveLink(x.currentTarget.value)}/>
            <button className='m-2 p-1 bg-blue-600 rounded-md' onClick={setLink}>Save</button>
            {liveLinkSuccessCheck && <span className='text-green-600'>Saved!</span>}
        </div>
    )
}