import FinalNavbar from "@/components/NavBar";
import { useState, useRef, useEffect } from "react";
import ViewTracker from "@/components/ViewTracker";
import Head from "next/head";
import { Alert, Container, Image, Table } from "react-bootstrap";

export default function ChatPointsLeaderBoard() {
    const [data, setData] = useState([] as { name: string; avatar: string; chatpoints: number; user_id: number }[]);
    const hasRan = useRef(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            if (!hasRan.current) {
                hasRan.current = true;
                try {
                    const response = await fetch(`/api/discord/chatpoints`);
                    if (response.ok) {
                        const data = await response.json();
                        setData(data);
                    } else {
                        setError(true);
                    }
                } catch (error) {
                    setError(true);
                }
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <Head>
                <meta name="description" content="The chatpoint leaderboard for mldkyt's Discord server" />
                <meta name="author" content="mldkyt" />
                <meta name="theme-color" content="#FF77FF" />
                <title>The Chatpoint Leaderboard</title>
            </Head>

            <FinalNavbar />
            <Container>
                <h1 className="text-3xl font-bold">The Chatpoint Leaderboard</h1>
                <a href="/discord">
                    <p className="text-blue-600 underline">Return back to the Discord page</p>
                </a>
                <Table className="relative left-[50%] -translate-x-1/2">
                    <thead>
                    <tr>
                        <th className="px-4"></th>
                        <th className="px-4">Name</th>
                        <th className="px-4">Chatpoints</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((x) => (
                        <tr key={x.user_id}>
                            <td className="px-4">
                                <Image roundedCircle className="rounded-full" width={64} height={64} src={x.avatar} alt={`avatar of ${x.name}`} />
                            </td>
                            <td className="px-4">{x.name}</td>
                            <td className="px-4">{x.chatpoints}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
                {error && (
                    <Alert variant="danger">
                        <Alert.Heading>There was an error loading the leaderboard</Alert.Heading>
                    </Alert>
                )}
                <p>It can take upwards of 24 hours for this leaderboard to update. If you changed your nickname, it will update within 24 hours on the leaderboard.</p>
                <ViewTracker />
            </Container>
        </div>
    );
}