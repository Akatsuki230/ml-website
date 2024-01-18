import React from "react";

export default function ViewTracker() {
    const [views, setViews] = React.useState('...');
    const hasRan = React.useRef(false);

    React.useEffect(() => {
        if (hasRan.current) {
            return
        }

        hasRan.current = true;
        (async () => {

            const fetch1 = await fetch(`/api/pageviews`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "page": location.pathname
                })
            })

            if (fetch1.status != 200) {
                const x = await fetch1.json() as { message?: string };
                if (!x.message)
                    x.message = 'Unknown error';
                setViews(`Error:${fetch1.status}: ${x.message}`)
                return
            }

            const fetch1Json = await fetch1.json() as { views: number };
            setViews(fetch1Json.views.toString());
        })()
    }, [setViews]);

    return (
        <>
            <p className="text-white">This page was viewed {views} times</p>
        </>
    )

}
