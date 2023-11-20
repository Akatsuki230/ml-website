import { useState } from "react";
import { Alert, Button, CloseButton } from "react-bootstrap";

export default function FemboyFridayVirtualHeadpat() {
  const isFriday = new Date().getUTCDay() === 5;

  const [show, setShow] = useState(isFriday);
  const [sending, setSending] = useState(false);
  const [notFridayOnServer, setNotFridayOnServer] = useState(false);
  const [count, setCount] = useState(0);

  const sendVirtualHeadpat = () => {
    setSending(true);
    (async() => {
      const a = await fetch(`/api/headpats/send`, {
        method: "POST",
      })
      if (a.status != 200) {
        const x = await a.json() as { error?: string };
        if (!x.error)
          x.error = 'Unknown error';
        setNotFridayOnServer(true);
        setSending(false);
        return
      }
      const b = await a.json() as { headpats: number };
      setCount(b.headpats);
      setSending(false);
    })
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
        {!sending && !notFridayOnServer && count === 0 && (
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
