import { motion } from "framer-motion";
import { useState } from "react"

function booleanListToBinary(booleanList: string): string {
    const booleanArray: boolean[] = booleanList.split(' ').map(val => val === 'true');
    const binaryString: string = booleanArray.map(val => val ? '1' : '0').join('');
    return binaryString;
}

function binaryToBooleanList(binaryString: string): string {
    const binaryArray: string[] = binaryString.split('');
    const booleanList: string = binaryArray.map(val => (val === '1') ? 'true' : 'false').join(' ');
    return booleanList;
}

function textToBooleanArray(text: string): boolean[] {
    const binaryArray: string[] = text.split('').map((char) => char.charCodeAt(0).toString(2).padStart(8, '0'));
    const booleanArray: boolean[] = binaryArray.flatMap((binary) => binary.split('').map((bit) => bit === '1'));
    return booleanArray;
}

function booleanArrayToText(booleanArray: boolean[]): string {
    const binaryArray: string[] = booleanArray.map((boolean) => boolean ? '1' : '0');
    const binaryString: string = binaryArray.join('');
    const charCodes: string[] = [];
    for (let i = 0; i < binaryString.length; i += 8) {
        charCodes.push(binaryString.slice(i, i + 8));
    }
    const charArray: string[] = charCodes.map((charCode) => String.fromCharCode(parseInt(charCode, 2)));
    const text: string = charArray.join('');
    return text;
}

function textToBinary(text: string): string {
    let binaryString = '';
    for (let i = 0; i < text.length; i++) {
        const charCode = text.charCodeAt(i);
        const binaryChar = charCode.toString(2).padStart(8, '0');
        binaryString += binaryChar;
    }
    return binaryString;
}

function binaryToText(binaryString: string): string {
    let text = '';
    for (let i = 0; i < binaryString.length; i += 8) {
        const binaryChar = binaryString.substr(i, 8);
        const charCode = parseInt(binaryChar, 2);
        const char = String.fromCharCode(charCode);
        text += char;
    }
    return text;
}

function convert(input: string, from: 'text' | 'bin' | 'bool', to: 'text' | 'bin' | 'bool'): string {
    if (from === 'text' && to === 'bin') {
        return textToBinary(input);
    } else if (from === 'bin' && to === 'text') {
        return binaryToText(input);
    } else if (from === 'bool' && to === 'bin') {
        return booleanListToBinary(input);
    } else if (from === 'bin' && to === 'bool') {
        return binaryToBooleanList(input);
    } else if (from === 'text' && to === 'bool') {
        return textToBooleanArray(input).map(val => val ? 'true' : 'false').join(' ');
    } else if (from === 'bool' && to === 'text') {
        return booleanArrayToText(input.split(' ').map(val => val === 'true'));
    } else if (from === 'text' && to === 'text') {
        return input;
    } else if (from === 'bin' && to === 'bin') {
        return input;
    } else if (from === 'bool' && to === 'bool') {
        return input;
    } else {
        return input;
    }
}

export default function TextBinaryConverter() {
    const [from, setFrom] = useState('text');
    const [to, setTo] = useState('bin');

    const [input, setInput] = useState('');
    const output = convert(input, from as 'text' | 'bin' | 'bool', to as 'text' | 'bin' | 'bool');

    function flipModes() {
        const temp = from;
        setFrom(to);
        setTo(temp);
    }

    function flipInputs() {
        setInput(output);
    }

    function copy() {
        const output = document.getElementById('output') as HTMLTextAreaElement;
        output.select();
        document.execCommand('copy');
    }

    return (
        <div>
            <h1>
                <select value={from} onChange={x => setFrom(x.currentTarget.value)}
                    className="bg-[#2B0029] rounded-md p-1 m-1">
                    <option value="text">text:ascii</option>
                    <option value="bin">number:binary</option>
                    <option value="bool">number:booleans</option>
                </select>
                <span>to</span>
                <select value={to} onChange={x => setTo(x.currentTarget.value)}
                    className="bg-[#2B0029] rounded-md p-1 m-1">
                    <option value="text">text:ascii</option>
                    <option value="bin">number:binary</option>
                    <option value="bool">number:booleans</option>
                </select>
            </h1>
            <p className="text-xl m-2">Input: </p>
            <textarea name="input" id="input" value={input} onChange={x => setInput(x.currentTarget.value)} className="bg-[#2B0029] rounded-md p-1 m-1" rows={10} cols={50} />
            <p className="text-xl m-2">Output: </p>
            <textarea name="output" id="output" value={convert(input, from as 'text' | 'bin' | 'bool', to as 'text' | 'bin' | 'bool')} readOnly className="bg-[#2B0029] rounded-md p-1 m-1" rows={10} cols={50} />
            <br />
            <motion.button onClick={flipModes} className="bg-gray-950 rounded-md p-1 px-2 m-1"
                whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>Flip Modes</motion.button>
            <motion.button onClick={flipInputs} className="bg-gray-950 rounded-md p-1 px-2 m-1"
                whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>Flip Inputs</motion.button>
            {/* copy button */}
            <motion.button onClick={copy} className="bg-blue-600 rounded-md p-1 px-2 m-1"
                whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>Copy</motion.button>
        </div>
    )
}
