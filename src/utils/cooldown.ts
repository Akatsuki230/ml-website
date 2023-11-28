export async function registerRequest(id: string, ip: string, expiry: number) {
    if (!expiry) {
        expiry = 60000;
    }
    const now = Date.now();
    let data = await (await fetch(`${process.env.FIREBASE_URL}/cooldowns.json`)).json();
    if (!data) {
        data = [];
    }
    for (let i = data.length - 1; i >= 0; i--) {
        if (new Date(data[i]["expiry"]) < new Date()) {
            data.splice(i, 1);
        }
    }

    data.push({
        id,
        ip,
        expiry: new Date(now + expiry)
    });

    await fetch(`${process.env.FIREBASE_URL}/cooldowns.json`, {
        method: "PUT",
        body: JSON.stringify(data)
    });
}

export async function checkRequest(id: string, ip: string) {
    let data = (await (await fetch(`${process.env.FIREBASE_URL}/cooldowns.json`)).json()) ?? [];
    if (!data) {
        data = [];
    }
    for (let i in data) {
        const j = data[i];
        if (new Date(j["expiry"]) < new Date()) {
            data.splice(i, 1);
            continue;
        }

        if (j["ip"] == ip && j["id"] == id) {
            return true;
        }
    }
    await fetch(`${process.env.FIREBASE_URL}/cooldowns.json`, {
        method: "PUT",
        body: JSON.stringify(data)
    });

    return false;
}
