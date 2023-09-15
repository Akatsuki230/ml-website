import { motion } from "framer-motion";
import { useState } from "react";

export default function FemboyFridayVirtualHeadpat() {
  const isFriday = new Date().getDay() === 5;

  const [show, setShow] = useState(isFriday);
  const [sending, setSending] = useState(false);
  const [alreadySent, setAlreadySent] = useState(false);
  const [notFridayOnServer, setNotFridayOnServer] = useState(false);
  const [count, setCount] = useState(0);

  const sendVirtualHeadpat = () => {
    setSending(true);
    fetch("/api/headpats/send", {
      method: "POST",
    })
      .then((x) => x.json())
      .then((x) => {
        setSending(false);
        setCount(x.count);
        if (!x.success) {
          if (x.message == 'Not friday') {
            setNotFridayOnServer(true);
          }
          if (x.message == 'Already voted') {
            setAlreadySent(true);
          }
        }
      });
  };

  return show ? (
    <>
      <div className="fixed top-14 w-max right-2 text-white border-2 border-blue-600 rounded-lg">
        <span className="m-2 text-lg font-bold">Today is Femboy Friday :3</span>
        <span className="mx-0.5 text-lg text-red-500 cursor-pointer" onClick={() =>setShow(false)}>Close</span>
        <br />
        {!sending && !alreadySent && count === 0 && (
          <motion.button
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="m-2 bg-blue-600 px-2 py-1 rounded-lg cursor-pointer"
            onClick={sendVirtualHeadpat}
          >
            Send me a virtual headpat
          </motion.button>
        )}
        {sending && (
          <motion.p
            className="m-2"
            initial={{ color: "#444" }}
            animate={{ color: "#666" }}
            transition={{ repeat: Infinity, repeatType: "mirror", duration: 0.5 }}
          >
            Sending...
          </motion.p>
        )}
        {!sending && alreadySent && (
          <p className="m-2">
            You already sent a virtual headpat today :3
          </p>
        )}
        {!sending && count !== 0 && (
          <p className="m-2">
            There were {count} sent virtual headpats today :3
          </p>
        )}
        {!sending && notFridayOnServer && (
          <p className="m-2">
            Your PC reports Friday, but the server reports it's not Friday :(
          </p>
        )}
      </div>
    </>
  ) : null;
}
