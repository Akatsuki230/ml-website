import { GetServerSidePropsContext } from "next";
import { useState } from "react";

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
    const token = ctx.req.cookies.token;
    if (!token) return { redirect: { destination: '/', permanent: false } };
    if (token !== process.env.ADMIN_PASSWORD) {
        ctx.res.setHeader('Set-Cookie', `token=; path=/; max-age=0; samesite=strict; secure`);
        return { redirect: { destination: '/admin/login#bad', permanent: false } };
    }

    return { props: {} };
}

export default function AdminCreate() {
    const [id, setId] = useState('');
    const [label, setLabel] = useState('');
    const [url, setUrl] = useState('');
    const [type, setType] = useState('');

    const [notification, setNotification] = useState('');

    const discardNotificationAfter = (seconds: number) => {
        setTimeout(() => {
            setNotification('');
        }, seconds * 1000);
    }

    const add = async (e: any) => {
        e.preventDefault();
        const request = await fetch('/api/redirect/create', {
            method: 'POST',
            body: JSON.stringify({ id, label, url, type })
        });
        const response = await request.json();
        if (response.error) {
            setNotification(`ERROR ${response.error}`);
            discardNotificationAfter(5);
        }
        else {
            window.location.href = `/admin/custompage/properties?id=${id}`;
        }
    }

    return (
        <main>
            <button onClick={() => window.location.href = '/admin/custompage'} className="ml-4 mt-4 bg-gray-800 hover:bg-gray-500 active:bg-gray-700 px-2 py-1 rounded-lg">Back</button>
            <h1 className="ml-4 mt-4 text-3xl font-bold">Create a redirect</h1>
            <form className="ml-4 mt-4">
                <label className="block">
                    <span className="text-gray-700">ID</span>
                    <input value={id} onChange={x => setId(x.currentTarget.value)} className="form-input mt-1 block bg-black" placeholder="mldkyt" />
                </label>
                <label className="block">
                    <span className="text-gray-700">Label</span>
                    <input value={label} onChange={x => setLabel(x.currentTarget.value)} className="form-input mt-1 block bg-black" placeholder="mldkyt" />
                </label>
                <label className="block">
                    <span className="text-gray-700">URL</span>
                    <input value={url} onChange={x => setUrl(x.currentTarget.value)} className="form-input mt-1 block bg-black" placeholder="https://mldkyt.com" />
                </label>
                <label className='block'>
                    <span className="text-gray-700">Type</span>
                    <select value={type} onChange={x => setType(x.currentTarget.value)} className="form-select mt-1 block bg-black">
                        <option value="">[none]</option>
                        <option value="redirect">Redirect</option>
                        <option value="image">Image</option>
                        <option value="file">File</option>
                    </select>
                </label>
                <button onClick={add} className="mt-2 bg-gray-800 hover:bg-gray-500 active:bg-gray-700 px-2 py-1 rounded-lg">Create</button>
            </form>
            {
                notification && (
                    <div className="ml-4 mt-4 bg-gray-800 rounded-lg p-2">
                        {notification}
                    </div>
                )
            }
        </main>
    )
}