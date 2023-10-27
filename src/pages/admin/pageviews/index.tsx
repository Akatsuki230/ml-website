import FinalNavbar from "@/components/NavBar";
import { GetServerSidePropsContext } from "next";
import { Container, Table } from "react-bootstrap";

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

function flatten(object: object) {
    // if the type is a number, it's a key
    // there will be only numbers in the object
    // if it's object, flatten it
    // flattened = {key}/{subkey}: value
    // do it recursively

    let flattened = {} as { [key: string]: string | string[] };

    for (const key in object) {
        if (typeof object[key] === 'object') {
            const sub = flatten(object[key]);
            for (const subkey in sub) {
                flattened[key + '.' + subkey] = sub[subkey];
            }
        } else {
            flattened[key] = object[key];
        }
    }

    return flattened;
}

export default function PageViews(props: Props) {
    return (
        <>
            <FinalNavbar sel={""} />
            <Container>
                <h1 className='text-white text-3xl m-2'>Page Views</h1>
                <Table className="text-white">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Visits</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(flatten(props.pageViews)).map(([key, value]) => {
                            return (
                                <tr key={key}>
                                    <td>{key}</td>
                                    <td>{value}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Container>
        </>
    )
}