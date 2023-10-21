import React from "react";

export default function ViewTracker() {
    const [views, setViews] = React.useState('...');
    const hasRan = React.useRef(false);

    React.useEffect(() => {
        if (hasRan.current) {
            return
        }
        hasRan.current = true;
        console.log(location.pathname)
        fetch('/api/pageviews', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "page": location.pathname
            })
        }).then(x => x.json()).then(x => {
            if (x.message) {
                setViews('Error:' + x.message)
                return
            }
            setViews(x.views);
        })
    }, [setViews]);

    return (
        <>
            <p className="text-white">This page was viewed {views} times</p>
        </>
    )

}
