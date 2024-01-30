import styles from '@/styles/aboutme.module.scss';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

export default function AboutMe() {
    const [showHistory, setShowHistory] = useState(false);

    return (
        <>
            <h1 className={styles.headingfirst}>About me</h1>
            <p>
                Mldkyt is a trans girl programmer that writes code in many languages, such as C#, C++, HTML, CSS,
                JavaScript, Python, Rust, Go, Batch, Bash, PHP, Lua (ComputerCraft).
            </p>
            {showHistory || <Button onClick={() => setShowHistory(true)}>Read more...</Button>}
            {showHistory && (
                <>
                    <h1 className={styles.heading}>History</h1>
                    <p>
                        Mldkyt's first appearance is on <a href="https://www.youtube.com/watch?v=pil1bYc7foI">YouTube</a>,
                        dating back to 11/26/2019. She started posting content on YouTube primarily about My Summer Car. In
                        2021, she expanded to making My Summer Car mods as well, alongside posting videos about existing
                        mods.
                    </p>
                    <p>
                        Her first mod was <a href="https://www.nexusmods.com/mysummercar/mods/3666">posted on
                            NexusMods <i>(weupload)</i></a> on 30th December 2020. The mod was coded so well that its first
                        version would work in the latest version of My Summer Car. She has updated this mod many times,
                        adding more features to the mod, such as: Assembly sounds, sound improvements, old dashboard,
                        disable door sounds, walking sounds and knob sounds, just like in the old versions of My Summer Car.
                    </p>
                    <p>
                        Her most successful mod as of now is Asphalt roads, getting over 10k downloads within the first week
                        and having over 30k downloads till this day. The mod had one update, improving the behaviour of the
                        roads, as well as adding the ability to convert more roads to asphalt.
                    </p>
                </>
            )}
        </>
    )
}
