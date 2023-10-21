import Navbar from "@/components/NavBar";
import { GetServerSidePropsContext } from "next";

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
    const cookies = ctx.req.headers.cookie ?? "";
    if (!cookies.includes(`token=${process.env.ADMIN_PASSWORD}`)) {
        return {
            redirect: {
                destination: "/admin/login",
                permanent: false,
            },
        };
    }

    const pageViews = await (await fetch(`${process.env.FIREBASE_URL}/visits.json`)).json();

    return {
        props: {
            pageViews
        },
    };
}

interface Props {
    pageViews: { [key: string]: string[] }
}

export default function PageViews(props: Props) {
    return (
        <>
            <h1 className='text-white text-3xl m-2'>Page Views</h1>
            <table className="text-white">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Visits</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(props.pageViews).map(key => {
                        return (
                            <tr>
                                <td>{key}</td>
                                <td>{props.pageViews[key]}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <Navbar sel={""} />
        </>
    )
}