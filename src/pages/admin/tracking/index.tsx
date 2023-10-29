import FinalNavbar from "@/components/NavBar";
import { useEffect, useState } from "react";

export default function Tracking() {
    const [data, setData] = useState({} as any)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/tracking/getall').then(x => x.json()).then(x => {
            setData(x)
            setLoading(false)
        })
    }, [setData])

    return (
        <>
            <a href="/admin">
                <button className="bg-blue-600 p-1 px-2 m-1 rounded-md text-white">Back</button>
            </a>
            <h1 className="text-xl font-bold">Tracking data</h1>

            {loading && <span className="text-xl font-bold">Data is loading, please wait...</span>}

            <table className="text-white">
                <thead>
                    <tr>
                        <th>Key</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(data).map((k) => {
                        return (
                            <tr>
                                <td>{k}</td>
                                <td>{data[k]}</td>
                            </tr>
                        )    
                    })}
                </tbody>
            </table>

        </>
    )
}