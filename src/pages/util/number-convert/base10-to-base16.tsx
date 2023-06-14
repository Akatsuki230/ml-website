import { useState } from 'react';
import Link from 'next/link';

const Base10To16 = () => {
    const [input, setInput] = useState("");

    return ( 
        <div>
            <Link href="/util/number-convert" className='bg-gray-800 p-2 px-4 border-white border-2 rounded-lg m-2'>Back</Link>
            
            <h1 className="text-3xl m-2 mx-4">Base 10 to Base 16 converter</h1>
            <label className="text-xl mx-8" htmlFor="input-convert">Input number</label>
            <br />
            <input type="number" name="input-convert" id="input-convert" value={input} onChange={x => setInput(x.currentTarget.value)}
                className="bg-black border-2 border-white rounded-lg mx-8" />
            <p className="m-4 mx-8 text-2xl">Result: {
                input === "" ? "" : parseInt(input).toString(16)
            }</p>
        </div>
    );
}
 
export default Base10To16;