import { useEffect, useState } from 'react';

const NumberConverters = () => {
    const [from, setFrom] = useState("16");
    const [to, setTo] = useState("8");
    const [input, setInput] = useState("");

    useEffect(() => {
        // check for from and to in hash style #from=10&to=16
        if (window.location.hash) {
            const hash = window.location.hash.slice(1);
            const hashArr = hash.split("&");
            hashArr.forEach(h => {
                const [key, value] = h.split("=");
                if (key === "from") setFrom(value);
                if (key === "to") setTo(value);
            })
        }
    })

    return ( 
        <div>
            <h1 className="text-3xl m-2 mx-4">Base 
                <select value={from} onChange={e => setFrom(e.target.value)} className="bg-[#2B0029] rounded-lg mx-2">
                    <option value="2">2</option>
                    <option value="8">8</option>
                    <option value="10">10</option>
                    <option value="16">16</option>
                </select> 
                to Base 
                <select value={to} onChange={e => setTo(e.target.value)} className="bg-[#2B0029] rounded-lg mx-2">
                    <option value="2">2</option>
                    <option value="8">8</option>
                    <option value="10">10</option>
                    <option value="16">16</option>
                </select> 
                converter
            </h1>
            <label className="text-xl mx-8" htmlFor="input-convert">Input number</label>
            <br />
            <input type="text" name="input-convert" id="input-convert" value={input} onChange={x => setInput(x.currentTarget.value)}
                className="bg-[#2B0029] rounded-lg mx-8" />
            <p className="m-4 mx-8 text-2xl">Result: {
                input === "" ? "" : parseInt(input, parseInt(from, 10)).toString(parseInt(to, 10))
            }</p>
        </div>
    );
}
export default NumberConverters;