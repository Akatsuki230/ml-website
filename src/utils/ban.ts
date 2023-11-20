
export async function banUser(ip: string) {
    let data = await (await fetch(`${process.env.FIREBASE_URL}/apibans.json`)).json() ?? [];
    if (!data) {
        data = [];
    }
    data.push(ip);
    await fetch(`${process.env.FIREBASE_URL}/apibans.json`, {
        method: 'PUT',
        body: JSON.stringify(data)
    })
}

export async function unbanUser(ip: string) {
    let data = await (await fetch(`${process.env.FIREBASE_URL}/apibans.json`)).json() ?? [];
    if (!data) {
        data = [];
    }
    for (let i in data) {
        if (data[i] == ip) {
            data.splice(i, 1);
        }
    }
    await fetch(`${process.env.FIREBASE_URL}/apibans.json`, {
        method: 'PUT',
        body: JSON.stringify(data)
    })
}

export async function isBanned(ip: string): Promise<boolean> {
    let data = await (await fetch(`${process.env.FIREBASE_URL}/apibans.json`)).json() ?? [];
    if (!data) {
        data = [];
    }
    for (let i in data) {
        if (data[i] == ip) {
            return true;
        }
    }
    return false;
}