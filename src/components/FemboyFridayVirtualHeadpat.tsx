import { useState } from "react";
import { Alert, Button, CloseButton } from "react-bootstrap";

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
      <Alert>
        <span style={{
          fontSize: '2rem'
        }}>Today is Femboy Friday!</span>
        <CloseButton style={{
          margin: '1rem'
        }} onClick={() => setShow(false)} />
        <br />
        {!sending && !alreadySent && count === 0 && (
          <Button
            onClick={sendVirtualHeadpat}
          >
            Send me a virtual headpat
          </Button>
        )}
        {sending && (
          <span>
            Sending...
          </span>
        )}
        {!sending && alreadySent && (
          <>
            <span>
              You already sent a virtual headpat today :3
            </span>
            <br />
          </>
        )}
        {!sending && count !== 0 && (
          <>
            <span>
              There were {count} sent virtual headpats today :3
            </span>
            <br/>
          </>
        )}
        {!sending && notFridayOnServer && (
          <>
            <span>
              Your PC reports Friday, but the server reports it's not Friday :(
            </span>
            <br/>
          </>
        )}
      </Alert>
    </>
  ) : null;
}
