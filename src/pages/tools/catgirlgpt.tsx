import FinalNavbar from "@/components/NavBar";
import { useRef, useState } from "react";
import { Button, Container } from "react-bootstrap";

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

function generateSegment() {
    let result = "";
    let selection = Math.floor(Math.random() * 10);

    switch (selection) {
        case 0:
            result += "uwu";
            break;
        case 1:
            result += "owo";
            break;
        case 2:
            const amountOfA = Math.floor(Math.random() * 5) + 5;
            result += "nya" + "a".repeat(amountOfA);
            break;
        case 3:
            const amountOfBlush = Math.floor(Math.random() * 5) + 5;
            result += ">" + "/".repeat(amountOfBlush) + "<";
            break;
        case 4:
            const amountOf3 = Math.floor(Math.random() * 5) + 1;
            result += ":" + "3".repeat(amountOf3);
            break;
        case 5:
            result += actions[Math.floor(Math.random() * actions.length)];
            break;
        case 6:

            const amountOfKeysmash = Math.floor(Math.random() * 5) + 5;
            for (let i = 0; i < amountOfKeysmash; i++) {
                result += catgirlNonsense[Math.floor(Math.random() * catgirlNonsense.length)];
            }
            break;
        case 7:
            const amountOfScreaming = Math.floor(Math.random() * 5) + 5;
            result += "A".repeat(amountOfScreaming);

            break;
        case 8:
            let keysmash = "";
            for (let i = 0; i < Math.floor(Math.random() * 10) + 5; i++) {
                keysmash += catgirlNonsense[Math.floor(Math.random() * catgirlNonsense.length)];
            }
            result += "aww " + keysmash;

            break;
        case 9:
            result += "ara ara~";
            break;
    }

    return result;
}

export default function CatgirlGPT() {
    const [hasStarted, setHasStarted] = useState(false);
    const [generated, setGenerated] = useState("");

    const generatedRef = useRef("");

    function start() {
        setHasStarted(true);
        setTimeout(function () {
            setInterval(function () {
                generatedRef.current += " " + generateSegment();
                setGenerated(generatedRef.current);
            }, 50);
        }, 1000);
    }

    return (
        <>
            <FinalNavbar />

            <Container>
                <h1>CatgirlGPT</h1>
                {!hasStarted && <Button onClick={start}>Start the AI model</Button>}

                {hasStarted && <>
                    <p>
                        <strong>CatgirlGPT: </strong>
                    </p>
                    <p>{generated}</p>
                </>}
            </Container>
        </>
    )
}