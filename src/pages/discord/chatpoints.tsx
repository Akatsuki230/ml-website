import FinalNavbar from "@/components/NavBar";
import { useState, useRef, useEffect } from "react";
import ViewTracker from "@/components/ViewTracker";
import Head from "next/head";
import { Container, Image, Table } from "react-bootstrap";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function ChatPointsLeaderBoard() {
    const [data, setData] = useState([] as { name: string, avatar: string, chatpoints: number, user_id: number }[]);
    const hasRan = useRef(false);

    useEffect(() => {
        if (!hasRan.current) {
            hasRan.current = true
            fetch('/api/discord/chatpoints').then(x => x.json()).then(data => {
                setData(data)
            }).catch(x => {
                alert('Error fetching chatpoints: ' + x)
                location.reload()
            })
        }
    })

    return (
        <div className={inter.className}>
            <Head>
                <meta name="description" content="The chatpoint leaderboard for mldkyt's Discord server" />
                <meta name="author" content="mldkyt" />
                <meta name="theme-color" content="#FF77FF" />
                <title>The Chatpoint Leaderboard</title>
                <script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4021488147419187"
                    crossOrigin="anonymous"
                ></script>
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
                <p>
                    It can take upwards of 24 hours for this leaderboard to update. If you changed your nickname, it will update within 24 hours on the leaderboard.
                </p>
                <ViewTracker />
            </Container>

        </div>
    )

}