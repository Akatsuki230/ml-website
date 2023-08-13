import {sql} from "@vercel/postgres"
import {GetServerSidePropsContext} from "next"
import React from "react"

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
    const token = ctx.req.cookies.token
    if (!token) return {redirect: {destination: '/admin/login', permanent: false}}
    if (token !== process.env.ADMIN_PASSWORD) {
        ctx.res.setHeader('Set-Cookie', `token=; path=/; max-age=0; samesite=strict; secure`)
        return {redirect: {destination: '/admin/login#bad', permanent: false}}
    }

    const {id} = ctx.query as { id: string }
    if (!id) return {redirect: {destination: '/admin', permanent: false}}
    const redirect = (await sql`SELECT *
                                FROM redirects
                                WHERE id = ${id}`).rows[0]
    if (!redirect) return {redirect: {destination: '/admin', permanent: false}}
    return {
        props: {
            redirect: {
                id: redirect.id,
                url: redirect.url,
                label: redirect.label,
                views: redirect.views,
                type: redirect.type
            }
        }
    }
}

interface AdminPropertiesProps {
    redirect: {
        id: string
        url: string
        label: string
        views: number,
        type: string
    }
}

export default function AdminProperties(props: AdminPropertiesProps) {
    const [id, setId] = React.useState(props.redirect.id)
    const [url, setUrl] = React.useState(props.redirect.url)
    const [label, setLabel] = React.useState(props.redirect.label)
    const [type, setType] = React.useState(props.redirect.type)

    const [notification, setNotification] = React.useState('')

    const discardNotificationAfter = (seconds: number) => {
        setTimeout(() => {
            setNotification('')
        }, seconds * 1000)
    }

    const save = async (e: any) => {
        e.preventDefault()
        const response = await fetch('/api/redirect/save', {
            body: JSON.stringify({
                id: props.redirect.id,
                newId: id,
                url,
                label,
                type
            }),
            method: 'POST'
        })
        const json = await response.json()
        if (json.error) {
            setNotification(`ERROR ${json.error}`)
            discardNotificationAfter(5)
            return
        }
        setNotification('Saved!')
        discardNotificationAfter(2)
    }

    const deleteRedirect = () => {
        window.location.href = `/admin/delete?id=${props.redirect.id}`
    }

    const back = () => {
        window.location.href = '/admin'
    }

    return (
        <main className="max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Editing {props.redirect.label}</h1>
            <form className="space-y-4">

                <label htmlFor="url" className="block">
                    <span className="font-bold">ID</span>
                    <input type="url" id="id" value={id} onChange={e => setId(e.target.value)}
                           className="block w-full mt-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-black"/>
                </label>

                <label htmlFor="url" className="block">
                    <span className="font-bold">URL</span>
                    <input type="url" id="url" value={url} onChange={e => setUrl(e.target.value)}
                           className="block w-full mt-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-black"/>
                </label>

                <label htmlFor="label" className="block">
                    <span className="font-bold">Label</span>
                    <input type="text" id="label" value={label} onChange={e => setLabel(e.target.value)}
                           className="block w-full mt-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-black"/>
                </label>
                
                <label htmlFor="type" className="block">
                    <span className="font-bold">Type</span>
                    <select id="type" value={type} onChange={x => setType(x.currentTarget.value)} className="block w-full mt-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-black">
                        <option value="redirect">Redirect</option>
                        <option value="image">Image</option>
                        <option value="file">File</option>
                    </select>
                </label>


                <button onClick={back} type="button"
                        className="bg-gray-800 hover:bg-gray-500 active:bg-gray-700 px-2 py-1 rounded-lg">
                    <span>Back</span>
                </button>
                <button onClick={save} type="submit"
                        className="ml-2 bg-gray-800 hover:bg-gray-500 active:bg-gray-700 px-2 py-1 rounded-lg">
                    <span>Save</span>
                </button>
                <button onClick={deleteRedirect} type="button"
                        className="ml-2 bg-red-700 hover:bg-red-500 active:bg-red-700 px-2 py-1 rounded-lg">
                    <span>Delete</span>
                </button>
            </form>
            {
                notification && (
                    <div className="mt-4 p-2 bg-gray-800 rounded-lg">
                        <span>{notification}</span>
                    </div>
                )
            }
        </main>
    )
}