import { motion } from "framer-motion";

const BinaryOperations = () => {
    return (
        <div>
            <h1 className="text-3xl m-2 mx-4">Binary operations</h1>
            <p className="text-xl mx-8">This page contains a collection of binary operations.</p>
            <p className="text-xl mx-8">Click on one of the links below to get started.</p>
            <ul className="list-disc list-inside text-xl mx-8">
                <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-max">
                    <a href="/util/binary-operations/add" className="text-blue-500">
                        Add two binary numbers
                    </a>
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-max">
                    <a href="/util/binary-operations/sub" className="text-blue-500">
                        Subtract two binary numbers
                    </a>
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-max">
                    <a href="/util/binary-operations/mul" className="text-blue-500">
                        Multiply two binary numbers
                    </a>
                </motion.li>
            </ul>
        </div>
    );
}

export default BinaryOperations;