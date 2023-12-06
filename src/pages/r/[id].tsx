import { GetServerSidePropsContext } from "next";
import { useEffect, useRef } from "react";

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
    const { id } = ctx.params as { id: string };

    if (!id) {
        return {
            notFound: true
        };
    }

    const redirects = (await (await fetch(`${process.env.FIREBASE_URL}/redirects.json`)).json()) as
        | {
              id: string;
              url: string;
              label: string;
          }[]
        | null;
    if (!redirects) {
        return {
            notFound: true
        };
    }
    const redirect = redirects.find((x) => x.id === id);
    if (!redirect) {
        return {
            notFound: true
        };
    }

    return {
        props: {
            targetURL: redirect.url,
            displayLabel: redirect.label
        }
    };
}

export default function Redirect(props: { targetURL: string; displayLabel: string }) {
    const hasRan = useRef(false);
    useEffect(() => {
        if (hasRan.current) return;
        hasRan.current = true;
        setTimeout(() => {
            location.href = props.targetURL;
        }, 1000);
    });

    return (
        <div>
            <h1>{props.displayLabel}</h1>
            <p>Redirecting shortly...</p>
        </div>
    );
}
