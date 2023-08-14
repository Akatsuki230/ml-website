
export default function OldCarSounds() {
    return (
        <div>
            <div className="border-2 border-orange-500 m-2 rounded-lg">
                <p className="text-2xl font-bold ml-2">WARNING</p>
                <p className="mx-4">The information you are about to read is for a mod that has been deprecated and will only get bug fixes or functionality fixes.</p>
            </div>
            <h1 className="text-center text-4xl font-bold">OldCarSounds</h1>
            <p className="mx-2">OldCarSounds (also OCS, Old Car Sounds) is a mod for My Summer Car which returns old sounds from old builds of My Summer Car and puts them in the newest version of the game.</p>
            <h2 className="ml-2 text-2xl">Download this mod</h2>
            <p className="ml-4">You can download it on NexusMods, where is the latest version:</p>
            <a className="ml-4 px-2 py-1 bg-orange-500 rounded-lg" href="https://www.nexusmods.com/mysummercar/mods/3666">Download</a>
            <p className="ml-4">Or you can download an older release from the GitHub repository:</p>
            <a className="ml-4 px-2 py-1 bg-black border-2 border-white rounded-lg" href="https://www.github.com/mldkyt/OldCarSounds/releases">Releases</a>
            <br/>
            <br/>
            <h2 className="ml-2 text-2xl">Contributing</h2>
            <p className="mx-4">Since the GitHub repository is archived, you'll have to create a fork, then you <code>git clone</code> the repository, add references to My Summer Car libraries and modify the code.</p>
            <p className="mx-4">You push your changes on GitHub, and upload the mod on NexusMods, <u>where you link me as the original author of the mod</u>.</p>
        </div>
    )
}