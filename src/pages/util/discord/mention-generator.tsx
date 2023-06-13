import Head from "next/head";
import { useState } from "react";

function genPing(type:string, id: string) {
    switch (type) {
        case "User":
            return `<@${id}>`;
        case "Role":
            return `<@&${id}>`;
        case "Channel":
            return `<#${id}>`;
        default:
            return "An error occurred."
    }
}

const MentionGenerator = () => {
    const [type, setType] = useState("User");
    const [id, setID] = useState("");

    return ( 
        <div>
            <Head>
                <title>Mention Generator</title>
            </Head>
            <h1 className="text-3xl my-2 mx-4">Mention Generator</h1>
            <label className="text-xl ml-8" htmlFor="type">Select mention type:</label>
            <br />
            <select name="type" id="type" className="ml-8 bg-black border-2 border-white rounded-lg w-56" value={type} onChange={x => setType(x.currentTarget.value)}>
                <option value="User">User</option>
                <option value="Role">Role</option>
                <option value="Channel">Channel</option>
            </select>

            <br />
            <label className="ml-8 text-xl" htmlFor="id">{type} ID: </label>
            <br />
            <input type="text" name="id" id="id" className="border-2 border-white bg-black ml-8 rounded-lg" value={id} onChange={x => setID(x.currentTarget.value)} />
            <br />
            <p className="text-2xl ml-8">The ping will look like this: {genPing(type, id)}</p>
            
            <hr className="my-4"/>

            <h1 className="text-2xl ml-4">How do I get a User ID?</h1>
            <p className="ml-2 mr-2">To get a user ID, you need to enable Developer Mode in Discord. You can do this by going to Settings &rarr; Appearance &rarr; Advanced &rarr; Developer Mode.</p>
            <p className="ml-2 mr-2">After that, you can right click on a user and click "Copy ID".</p>
            
            <hr className="my-4" />
            
            <h1 className="text-2xl ml-4">How do I get a Role ID?</h1>
            <p className="ml-2 mr-2">To get a role ID, you need to enable Developer Mode in Discord. You can do this by going to Settings &rarr; Appearance &rarr; Advanced &rarr; Developer Mode.</p>
            <p className="ml-2 mr-2">Go into a server and go to Server Settings &rarr; Roles.</p>
            <p className="ml-2 mr-2">You will need the <code>Manage Roles</code> permission to do this.</p>
            <p className="ml-2 mr-2">After that, you can right click on a role and click "Copy ID".</p>
            
            <hr className="my-4" />
            
            <h1 className="text-2xl ml-4">How do I get a Channel ID?</h1>
            <p className="ml-2 mr-2">To get a channel ID, you need to enable Developer Mode in Discord. You can do this by going to Settings &rarr; Appearance &rarr; Advanced &rarr; Developer Mode.</p>
            <p className="ml-2 mr-2">Right Click on a channel and click "Copy ID".</p>
        </div>
     );
}
 
export default MentionGenerator;