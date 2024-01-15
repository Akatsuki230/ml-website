import React from "react";
import ViewTracker from "@/components/ViewTracker";
import FinalNavbar from "@/components/NavBar";
import { Button, Container, Image, Table } from "react-bootstrap";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function FemboyList() {
    const [data, setData] = React.useState(
        [] as {
            name: string;
            description: string;
            imageUrl: string;
            wiki: string;
        }[]
    );
    const [error, setError] = React.useState(false);
    const hasRan = React.useRef(false);

    React.useEffect(() => {
        if (!hasRan.current) {
            hasRan.current = true;
            fetch(`/api/femboy/getlist`)
                .then((response) => response.json())
                .then((responseData) => {
                    if (responseData == null) {
                        responseData = [];
                    }
                    setData(responseData);
                })
                .catch((error) => {
                    setError(true);
                });
        }
    });

    return (
        <div className={inter.className}>
            <FinalNavbar />
            <Container>
                <h1 className="text-3xl">The Femboy List</h1>
                {error && <p>There was an error trying to load data, try again later.</p>}
                {data.length > 0 && (
                    <>
                        <Table className="mx-auto">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Wiki Page</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((dataItem) => {
                                    return (
                                        <tr key={dataItem.name}>
                                            <td>
                                                <Image width={64} height={64} roundedCircle src={dataItem.imageUrl} alt={dataItem.description} className="h-36 rounded-xl" />
                                            </td>
                                            <td>{dataItem.name}</td>
                                            <td>{dataItem.description}</td>
                                            <td>
                                                <a className="underline text-blue-600" href={dataItem.wiki}>
                                                    {dataItem.name}
                                                </a>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                        <p>
                            <small>Descriptions are generated with the help of AI.</small>
                        </p>
                    </>
                )}
                {data.length == 0 && !error && <p>Cute boys are loading~ :3</p>}

                <h2>Missing a femboy?</h2>
                <Button as="a" className="text-blue-600 underline" href="https://forms.gle/gesKa6uGRvVvBMZ39" target="_blank">
                    Click here to suggest a femboy~!
                </Button>
                <br />
                <br />
                <ViewTracker />
            </Container>
        </div>
    );
}
