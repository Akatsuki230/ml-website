import { GetServerSidePropsContext } from "next";

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
    const trackingData = await (await fetch(`${process.env.FIREBASE_URL}/track.json`)).json()
    await fetch(`${process.env.FIREBASE_URL}/track.json`, {
        method: 'PATCH', 
        body: JSON.stringify({
            'astolfomoddownloads': trackingData['astolfomoddownloads'] + 1
        })
    })

    return {
        redirect: { 
            destination: 'https://github.com/ProgrammerAstolfo/AstolfoForge/releases/'
        }
    }
}

export default function AstolfoMod() {
    return (
        <></>
    )
}