import {sql} from "@vercel/postgres";
import {GetServerSidePropsContext} from "next";
import React, {useRef} from "react";


export async function getServerSideProps(ctx: GetServerSidePropsContext) {
    const token = ctx.req.cookies.token
    if (!token) return {redirect: {destination: '/admin/login', permanent: false}}
    if (token !== process.env.ADMIN_PASSWORD) {
        ctx.res.setHeader('Set-Cookie', `token=; path=/; max-age=0; samesite=strict; secure`)
        return {redirect: {destination: '/admin/login#bad', permanent: false}}
    }

    let redirects = (await sql`SELECT * FROM redirects`)
        .rows
        .map((row: any) => {
            return {
                id: row.id,
                url: row.url,
                label: row.label,
                views: row.views,
                type: row.type
            }
        })
    return {props: {redirects}}
}

interface AdminProps {
    redirects: {
        id: string;
        url: string;
        label: string;
        views: number;
        type: string;
    }[]
}

export default function AdminIndex(props: AdminProps) {
    const search = useRef('')
    const [redirList, setRedirList] = React.useState(props.redirects);
    const [lastSort, setLastSort] = React.useState('id');
    const [flip, setFlip] = React.useState(false);

    function create() {
        window.location.href = '/admin/custompage/create';
    }

    function signOut() {
        document.cookie = `token=; path=/; max-age=0; samesite=strict; secure`;
        window.location.href = '/admin/login';
    }

    function limitString(str: string) {
        if (str.length > 25) {
            return str.substring(0, 22) + '...';
        }
        return str;
    }

    function titleCase(str: string) {
        return str.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
        });
    }

    function sortRedirects(by: string, noFlip: boolean = false) {
        console.log('sortredir called')
        let result = [...props.redirects];

        if (search.current !== '') {
            result = result.filter((redir) => {
                return redir.id.toLowerCase().includes(search.current.toLowerCase()) ||
                    redir.url.toLowerCase().includes(search.current.toLowerCase()) ||
                    redir.label.toLowerCase().includes(search.current.toLowerCase());
            });
        }

        if (by === 'id') {
            if (lastSort === 'id' && !noFlip) {
                setFlip(!flip);
            }
            setLastSort('id')
            result.sort((a, b) => {
                if (flip) {
                    return a.id.localeCompare(b.id);
                }
                return b.id.localeCompare(a.id);
            });
        }
        if (by === 'label') {
            if (lastSort === 'label' && !noFlip) {
                setFlip(!flip);
            }
            setLastSort('label')
            result.sort((a, b) => {
                if (flip) {
                    return a.label.localeCompare(b.label);
                }
                return b.label.localeCompare(a.label);
            });
        }
        if (by === 'views') {
            if (lastSort === 'views' && !noFlip) {
                setFlip(!flip);
            }
            setLastSort('views')
            result.sort((a, b) => {
                if (flip) {
                    return a.views - b.views;
                }
                return b.views - a.views;
            });
        }
        if (by === 'type') {
            if (lastSort === 'type' && !noFlip) {
                setFlip(!flip);
            }
            setLastSort('type')
            result.sort((a, b) => {
                if (flip) {
                    return a.type.localeCompare(b.type);
                }
                return b.type.localeCompare(a.type);
            });
        }

        setRedirList(result);
    }

    return (
        <main>
            <h1 className="ml-4 mt-4 text-3xl font-bold">Admin page</h1>
            <button onClick={create}
                    className="bg-gray-800 hover:bg-gray-600 active:bg-gray-700 px-2 py-1 ml-2 mt-2 rounded-lg">Create a
                redirect
            </button>
            <button onClick={signOut}
                    className="bg-gray-800 hover:bg-gray-600 active:bg-gray-700 px-2 py-1 ml-2 mt-2 rounded-lg">Sign out
            </button>
            <h2 className="text-2xl ml-4 mt-2">List of redirects</h2>

            <span>Search Bar™️: </span>
            <input type='text' className='bg-gray-700 m-2 rounded-2xl' value={search.current}
                   onChange={x => {
                       search.current = x.currentTarget.value;
                       sortRedirects(lastSort, true);
                   }}/>

            <table className="w-full">
                <thead>
                <tr className="bg-gray-900">
                    <th className="w-1/5 py-2" onClick={() => sortRedirects('id')}>ID</th>
                    <th className="w-1/5 py-2" onClick={() => sortRedirects('label')}>Label</th>
                    <th className="w-1/5 py-2" onClick={() => sortRedirects('views')}>Views</th>
                    <th className="w-1/5 py-2" onClick={() => sortRedirects('type')}>Type</th>
                    <th className="w-1/5 py-2">Actions</th>
                </tr>
                </thead>
                <tbody>
                {redirList.map((redirect) => {
                    function openProperties() {
                        window.location.href = `/admin/custompage/properties?id=${redirect.id}`;
                    }

                    function openLink() {
                        window.location.href = redirect.url;
                    }

                    function deleteLink() {
                        window.location.href = `/admin/custompage/delete?id=${redirect.id}`;
                    }

                    return (
                        <tr key={redirect.id}>
                            <td className="py-2 text-center">{limitString(redirect.id)}</td>
                            <td className="py-2 text-center">{limitString(redirect.label)}</td>
                            <td className="py-2 text-center">{redirect.views}</td>
                            <td className="py-2 text-center">{titleCase(redirect.type)}</td>
                            <td className="py-2 text-center">
                                <button onClick={openProperties}
                                        className="m-0.5 bg-gray-800 hover:bg-gray-600 active:bg-gray-700 px-2 py-1 rounded-lg">Properties
                                </button>
                                <button onClick={openLink}
                                        className="m-0.5 bg-gray-800 hover:bg-gray-600 active:bg-gray-700 px-2 py-1 rounded-lg">Open
                                    Link
                                </button>
                                <button onClick={deleteLink}
                                        className="m-0.5 bg-red-800 hover:bg-red-600 active:bg-red-700 px-2 py-1 rounded-lg">Delete
                                </button>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </main>
    )
}