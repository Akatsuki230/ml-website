import React from "react";
import { useEffect, useRef, useState } from "react";
import Astolfo from '@/components/Astolfo'
import FemboyFridayVirtualHeadpat from "@/components/FemboyFridayVirtualHeadpat";
import Navbar from "@/components/NavBar";
import ViewTracker from "@/components/ViewTracker";

export default function FemboyList() {
    const [data, setData] = useState([] as { name: string, description: string, imageUrl: string, wiki: string }[]);
    const [error, setError] = useState(false);
    const hasRan = useRef(false);

    useEffect(() => {
        if (!hasRan.current) {
            hasRan.current = true;
            fetch('/api/femboy/getlist').then((response) => response.json()).then((responseData) => {
                setData(responseData);
            }).catch((error) => {
                setError(true);
            })
        }
    });

    return (
        <div className="text-center text-white">
            <h1 className="text-3xl">The Femboy List</h1>
            {error && <p>There was an error trying to load data, try again later.</p>}
            {data.length > 0 &&
                <table className="mx-auto">
                    <thead>
                        <tr>
                            <th className="w-96"></th>
                            <th className="w-48 font-bold">Name</th>
                            <th className="font-bold">Description</th>
                            <th className="w-48 font-bold">Wiki Page</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((dataItem) => {
                            return <tr>
                                <td>
                                    <img src={dataItem.imageUrl} alt={dataItem.description} className="h-36 rounded-xl" />
                                </td>
                                <td>
                                    {dataItem.name}
                                </td>
                                <td>
                                    {dataItem.description}
                                </td>
                                <td>
                                    <a className="underline text-blue-600" href={dataItem.wiki}>{dataItem.name}</a>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            }
            {data.length == 0 && <p>Cute boys are loading~ :3</p>}

            <h2>Missing a femboy?</h2>
            <a className="text-blue-600 underline" href="https://forms.gle/gesKa6uGRvVvBMZ39" target="_blank">Click here to suggest a femboy~!</a>

            <ViewTracker />
            <Astolfo />
            <FemboyFridayVirtualHeadpat />
            <Navbar sel="" />
        </div>
    )

}