import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const AddBinary = () => {
    const [firstNum, setFirstNum] = useState("0"); 
    const [secondNum, setSecondNum] = useState("0"); 

    return ( 
        <div>
            <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                <Link href="/util/binary-operations" className="bg-gray-800 p-2 px-4 ml-2 top-4 relative rounded-lg border-2 border-white">
                    Back
                </Link>
            </motion.div>
            <br />
            <br />
            <h1 className="text-3xl m-2 mx-4">Add two binary numbers</h1>
            <label className="text-xl mx-8" htmlFor="input-convert">First number</label>
            <br />
            <input type="text" name="input-convert" id="input-convert" value={firstNum} onChange={x => setFirstNum(x.currentTarget.value)}
                className="bg-black border-2 border-white rounded-lg mx-8" />
            <br />
            <label className="text-xl mx-8" htmlFor="input-convert">Second number</label>
            <br />
            <input type="text" name="input-convert" id="input-convert" value={secondNum} onChange={x => setSecondNum(x.currentTarget.value)}
                className="bg-black border-2 border-white rounded-lg mx-8" />
            <p className="m-4 mx-8 text-2xl">Result: {
                firstNum === "" ? "" : (parseInt(firstNum, 2) + parseInt(secondNum, 2)).toString(2)
            }</p>
        </div>
     );
}
 
export default AddBinary;