import FinalNavbar from "@/components/NavBar";
import { useState, useRef, useEffect } from "react";
import ViewTracker from "@/components/ViewTracker";
import Head from "next/head";
import { Inter } from "next/font/google";
import { Alert, Container, Image, Table } from "react-bootstrap";

const inter = Inter({ subsets: ["latin"] });

export default function CutePointsLeaderBoard() {
    const [data, setData] = useState([] as {name: string, avatar: string, cutepoints: number, user_id: number}[]);
    const hasRan = useRef(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!hasRan.current) {
            hasRan.current = true;
            const fetchData = async () => {
                try {
                    const response = await fetch(`/api/discord/cutepoints`);
                    if (response.ok) {
                        const data = await response.json();
                        setData(data);
                    } else {
                        setError(true);
                    }
                } catch (error) {
                    setError(true);
                }
            };
            fetchData();
        }
    }, []);

    return (
        <div className={inter.className}>
            <Head>
                <meta name="description" content="The cutepoint leaderboard for mldkyt's Discord server" />
                <meta name="author" content="mldkyt" />
                <meta name="theme-color" content="#FF77FF" />
                <title>The Cutepoint Leaderboard</title>
            </Head>
            <FinalNavbar />
            <Container>
                <h1 className="text-3xl font-bold">The Cutepoint Leaderboard</h1>
                <a href="/discord">
                    <p className="text-blue-600 underline">Return back to the Discord page</p>
                </a>
                <Table className="relative left-[50%] -translate-x-1/2">
                    <thead>
                        <tr>
                            <th className="px-4"></th>
                            <th className="px-4">Name</th>
                            <th className="px-4">Cutepoints</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((x) => (
                            <tr key={x.user_id}>
                                <td className="px-4">
                                    <Image roundedCircle width={64} height={64} src={x.avatar} alt={`avatar of ${x.name}`} />
                                </td>
                                <td className="px-4">{x.name}</td>
                                <td className="px-4">{x.cutepoints}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                {error && (
                    <Alert variant="danger">
                        <Alert.Heading>There was an error loading the leaderboard</Alert.Heading>
                    </Alert>
                )}
                <p>
                    It can take upwards of 24 hours for this leaderboard to update. If you changed your nickname, it will update within 24 hours on the leaderboard.
                </p>
                <ViewTracker />
            </Container>
        </div>
    )

}
