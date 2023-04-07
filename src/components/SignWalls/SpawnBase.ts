export async function getSigns() {
    const data = await fetch("/api/signwalls/spawnbase/get");
    return await data.json();
}

export async function addSign(content: string, author: string) {
    const data = await fetch("/api/signwalls/spawnbase/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ content, author })
    });
    return await data.json();
}