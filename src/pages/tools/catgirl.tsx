import FinalNavbar from "@/components/NavBar";
import { useState } from "react";
import { Alert, Button, Container, Form, FormControl } from "react-bootstrap";

const actions = [
    "*tilts head*",
    "*twitches ears slightly*",
    "*purrs*",
    "*falls asleep*",
    "*sits on ur keyboard*",
    "*nuzzles*",
    "*stares at u*",
    "*points towards case of monster zero ultra*",
    "*sneezes*",
    "*plays with yarn*",
    "*eats all ur doritos*",
    "*lies down on a random surface*"
]

const catgirlNonsense = [
    "aa",
    "am",
    "an",
    "ao",
    "eo",
    "ew",
    "me",
    "mr",
    "ny",
    "ow",
    "pp",
    "pu",
    "ra",
    "re",
    "rm",
    "rn",
    "ro",
    "rp",
    "rw",
    "ur",
    "wm",
    "wn",
    "wp",
    "wr",
    "ww",
    "ya"
]

type CatgirlSettings = {
    uwu: boolean,
    owo: boolean,
    nyaa: boolean,
    blush: boolean,
    3: boolean,
    actions: boolean,
    keysmash: boolean,
    screaming: boolean,
    scrunkly: boolean
}


function generate(length: number, settings: CatgirlSettings): string {
    let result = "";

    let lastSelection = 0;

    while (result.length < length) {
        let selection = Math.floor(Math.random() * 9);
        if (selection == lastSelection) continue;

        switch (selection) {
            case 0:
                if (settings.uwu) result += "uwu";
                break;
            case 1:
                if (settings.owo) result += "owo";
                break;
            case 2:
                const amountOfA = Math.floor(Math.random() * 5) + 5;
                if (settings.nyaa) result += "nya" + "a".repeat(amountOfA);
                break;
            case 3:
                const amountOfBlush = Math.floor(Math.random() * 5) + 5;
                if (settings.blush) result += ">" + "/".repeat(amountOfBlush) + "<";
                break;
            case 4:
                const amountOf3 = Math.floor(Math.random() * 5) + 1;
                if (settings['3']) result += ":" + "3".repeat(amountOf3);
                break;
            case 5:
                if (settings.actions) result += actions[Math.floor(Math.random() * actions.length)];
                break;
            case 6:
                if (settings.keysmash) {
                    const amountOfKeysmash = Math.floor(Math.random() * 5) + 5;
                    for (let i = 0; i < amountOfKeysmash; i++) {
                        result += catgirlNonsense[Math.floor(Math.random() * catgirlNonsense.length)];
                    }
                }
                break;
            case 7:
                if (settings.screaming) {
                    const amountOfScreaming = Math.floor(Math.random() * 5) + 5;
                    result += "A".repeat(amountOfScreaming);
                }
                break;
            case 8:
                if (settings.scrunkly) {
                    let keysmash = "";
                    for (let i = 0; i < Math.floor(Math.random() * 10) + 5; i++) {
                        keysmash += catgirlNonsense[Math.floor(Math.random() * catgirlNonsense.length)];
                    }
                    result += "aww " + keysmash;
                }
                break;
        }

        result += " ";
    }

    return result;
}


export default function Catgirl() {
    const [length, setLength] = useState(10);
    const [settings, setSettings] = useState({
        'uwu': true,
        'owo': true,
        'nyaa': true,
        'blush': true,
        '3': true,
        'actions': true,
        'keysmash': true,
        'screaming': true,
        'scrunkly': true
    } as CatgirlSettings)
    const [result, setResult] = useState("");

    function generateClicked() {
        setResult(generate(length, settings));
    }

    return (
        <>
            <FinalNavbar />

            <Container>
                <h1>CatGirl speak generator</h1>
                <p>Generates catgirl nonsense for you.</p>
                <span>Amount of catgirl nonsense:</span>
                <Form.Range value={length} onChange={x => setLength(Number(x.currentTarget.value))} min={10} max={50000}></Form.Range>
                <span>{length}</span>

                <h2>Features</h2>
                <Form.Check type="checkbox" label="uwu~" checked={settings.uwu} onChange={x => setSettings({ ...settings, uwu: x.currentTarget.checked })} />
                <Form.Check type="checkbox" label="owo~" checked={settings.owo} onChange={x => setSettings({ ...settings, owo: x.currentTarget.checked })} />
                <Form.Check type="checkbox" label="nyaaaa~" checked={settings.nyaa} onChange={x => setSettings({ ...settings, nyaa: x.currentTarget.checked })} />
                <Form.Check type="checkbox" label=">//////<" checked={settings.blush} onChange={x => setSettings({ ...settings, blush: x.currentTarget.checked })} />
                <Form.Check type="checkbox" label=":3" checked={settings['3']} onChange={x => setSettings({ ...settings, '3': x.currentTarget.checked })} />
                <Form.Check type="checkbox" label="Actions" checked={settings.actions} onChange={x => setSettings({ ...settings, actions: x.currentTarget.checked })} />
                <Form.Check type="checkbox" label="Keysmashing" checked={settings.keysmash} onChange={x => setSettings({ ...settings, keysmash: x.currentTarget.checked })} />
                <Form.Check type="checkbox" label="screaming" checked={settings.screaming} onChange={x => setSettings({ ...settings, screaming: x.currentTarget.checked })} />
                <Form.Check type="checkbox" label="aww the scrunkly" checked={settings.scrunkly} onChange={x => setSettings({ ...settings, scrunkly: x.currentTarget.checked })} />

                <br />
                <p>Your browser might freeze while generating if your length is very long.</p>
                <Button onClick={generateClicked}>Generate</Button>
                <br />
                <br />
                <p>Below you'll see the nonsense generated:</p>
                <p>{result}</p>
            </Container>
        </>
    )
}
