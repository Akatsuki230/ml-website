import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";

export function FakeLoad() {
  const [currentAnim, setCurrentAnim] = React.useState('0');
  const hasRan = useRef(false);

  useEffect(function () {
    if (hasRan.current) return;
    hasRan.current = true;
		setTimeout(function () {
			setCurrentAnim("1");
		}, 10);
    setTimeout(function () {
      setCurrentAnim("2");
    }, 310);
  }, []);

  return (
    <motion.div
      className="fixed w-screen left-0 top-0 h-screen bg-black"
      variants={{
        "1": {
          opacity: 1,
        },
        "2": {
          opacity: 0,
          pointerEvents: "none",
        },
      }}
      animate={currentAnim}
      transition={{
        duration: 0.5,
      }}
    >
      <div className="flex flex-col items-center justify-center h-full">
				<img src="/pfp.png" className="w-32 mb-8 rounded-full" />
        <div className="w-96 bg-gray-600 rounded-md">
          <motion.div
            className="h-2 bg-blue-400 rounded-md"
            initial={{ width: "0" }}
            variants={{
              "1": {
                width: "100%",
              },
              "2": {
                width: "100%",
              },
            }}
            animate={currentAnim}
            transition={{
              duration: 0.3,
            }}
          ></motion.div>
        </div>
      </div>
    </motion.div>
  );
}
