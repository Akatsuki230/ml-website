
export async function globalRegisterRequest(id: string, expiry: number) {
    if (!expiry) {
        expiry = 1000;
    }
    const now = Date.now();
    let data = await (await fetch(`${process.env.FIREBASE_URL}/cooldowns.json`)).json();
    if (!data) {
        data = [];
    }
    for (let i in data) {
        if (new Date(i['expiry']) < new Date()) {
            delete data[i];
        }
    }

    data.push({
        id,
        expiry: new Date(now + expiry)
    })

    await fetch(`${process.env.FIREBASE_URL}/cooldowns.json`, {
        method: 'PUT',
        body: JSON.stringify(data)
    })
}

export async function globalCheckRequest(id: string) {
    let data = await (await fetch(`${process.env.FIREBASE_URL}/cooldowns.json`)).json() ?? [];
    if (!data) {
        data = [];
    }
    for (let i in data) {
        const j = data[i];
        if (new Date(j['expiry']) < new Date()) {
            data.splice(i, 1)
            continue
        }
        
        if (j['id'] == id) {
            return true;
        }
    }
    await fetch(`${process.env.FIREBASE_URL}/cooldowns.json`, {
        method: 'PUT',
        body: JSON.stringify(data)
    })

    return false;
}
