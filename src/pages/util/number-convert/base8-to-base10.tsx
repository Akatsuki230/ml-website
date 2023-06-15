import Watermark from '@/components/Watermark';
import { useState } from 'react';

const Base8To10 = () => {
    const [input, setInput] = useState("");
    return (
        <div>
            <h1 className="text-3xl m-2 mx-4">Base 8 to Base 10 converter</h1>
            <label className="text-xl mx-8" htmlFor="input-convert">Input number</label>
            <br />
            <input type="text" name="input-convert" id="input-convert" value={input} onChange={x => setInput(x.currentTarget.value)}
                className="bg-black border-2 border-white rounded-lg mx-8" />
            <p className="m-4 mx-8 text-2xl">Result: {
                input === "" ? "" : parseInt(input, 8).toString(10)
            }</p>
            <Watermark />
        </div>
    );
}
 
export default Base8To10;