import Head from "next/head";
import { useState } from "react";
import NavBar from "../../components/NavBar";

export default function OCS() {
    const [changesVisible, setChangesVisible] = useState(false)

    function toggleChangesVisibility() {
        setChangesVisible(!changesVisible)
    }

    function renderChangeLog() {
        if (changesVisible) {
            return (
                <div className={"border-4 rounded-3xl m-4"}>
                    <h3 className="text-2xl m-2">Version 1.5.4</h3>
                    <p className="m-2">&bull; Fix for HealthMod requirement</p>

                    <h3 className="text-2xl m-2">Version 1.5.3</h3>
                    <p className="m-2">&bull; Fixed a bug with loading that if you did not change at least one setting, the mod won't work.</p>

                    <h3 className="text-2xl m-2">Version 1.5.2</h3>
                    <p className="m-2">&bull; Fixed radio is being heard all around the map.</p>
                    <p className="m-2">&bull; Fixed the lag when playing the radio. If not fixed, then it is unfixable.</p>
                    <p className="m-2">&bull; Added infinite health, if you have health mod installed.</p>

                    <h3 className="text-2xl m-2">Version 1.5</h3>
                    <p className="m-2">&bull; Ripped off the values from the 165 build. it should sound perfect now.</p>
                    <p className="m-2">&bull; Changed the exhaust sound back. It sounded terrible so I fixed it.</p>
                    <p className="m-2">&bull; Fixed pink textures. It was a bug with shaders.</p>
                    <p className="m-2">&bull; Removed no engine overrev and changeable screw size. They did not work and it is not easy to change the RPM of the vehicle.</p>
                    <p className="m-2">&bull; Added a new song to the radio. The song is from the 165 build, and it is played in the what is it all about video by the developer.</p>
                    
                    <h3 className="text-2xl m-2">Version 1.4.1</h3>
                    <p className="m-2">&bull; Fixed a lot of bugs.</p>
                    
                    <h3 className="text-2xl m-2">Version 1.4</h3>
                    <p className="m-2">&bull; New car sound</p>
                    <p className="m-2">&bull; Some of the textures are revamped</p>
                    <p className="m-2">&bull; The selection texture now glows</p>
                    <p className="m-2">&bull; Much more! (i forgor 💀)</p>

                    <h3 className="text-2xl m-2">Version 1.3</h3>
                    <p className="m-2">&bull; Adjusted GUIs</p>
                    <p className="m-2">&bull; Added old radio, can be turned off</p>
                    <p className="m-2">&bull; Added the ability to use old textures</p>
                    <p className="m-2">&bull; Added a selection system; allows you to change how selection works</p>
                    <p className="m-2">&bull; Added information text, shows the lake time from old builds, your framerate and wrench size</p>
                    <p className="m-2">&bull; Added key sounds adjustments, you can disable or edit keysounds</p>
                    <p className="m-2">&bull; Added the ability to remove the knob sounds when you click on a knob</p>

                    <h3 className="text-2xl m-2">Version 1.2</h3>
                    <p className="m-2">&bull; Adjusted pitches and volumes of some sounds</p>
                    <p className="m-2">&bull; Made it so you can disable the assemble sounds</p>
                    <p className="m-2">&bull; You can make shift delay virtually none</p>
                    <p className="m-2">&bull; You can make shift delay older (from build 172)</p>
                    <p className="m-2">&bull; Settings can be adjusted using a menu in the main menu</p>

                    <h3 className="text-2xl m-2">Version 1.1</h3>
                    <p className="m-2">&bull; Renamed mod (from AudioLoader to OldCarSounds)</p>
                    <p className="m-2">&bull; Adjusted pitches of the car noise</p>
                    <p className="m-2">&bull; Disassembly and assembly sounds</p>
                    <p className="m-2">&bull; GitHub</p>
                    
                    <h3 className="text-2xl m-2">Version 1.0</h3>
                    <p className="m-2">&bull; Initial upload</p>
                </div>
            )
        }
        return (<></>)
    }

    return (
        <>
            <Head>
                <title>MLDKYT's website</title>
            </Head>
            <NavBar selected={""}/>
            <div className="bg-gray-900 text-white min-h-screen">
                <div className="absolute right-8 top-16">
                    <a href="https://www.nexusmods.com/mysummercar/mods/464">
                        <button className="bg-orange-400 rounded-lg p-2 px-4 m-2 drop-shadow-lg">NexusMods page</button>
                    </a>
                    <br/>
                    <a href="https://www.nexusmods.com/mysummercar/mods/2467">
                    <button className="bg-green-500 rounded-lg p-2 px-4 m-2 drop-shadow-lg">Replaced by GoodOldMSC</button>
                    </a>
                </div>
                <h1 className="p-8 text-5xl text-center">OldCarSounds mod</h1>
                <p>
                    There is a lot of videos about old builds of My Summer Car. This mod takes the engine sound of Satsuma from very old builds of My Summer Car and puts it in the newest update of My Summer Car.
                </p>
                <p className="text-3xl">Latest changes: 
                </p>
                <button
                    className="bg-indigo-400 rounded-lg p-2 px-4 m-2 drop-shadow-lg"
                    onClick={toggleChangesVisibility}>
                        {changesVisible ? "Hide" : "Show"} changes
                </button>

                {renderChangeLog()}
            </div>
        </>
    )
}