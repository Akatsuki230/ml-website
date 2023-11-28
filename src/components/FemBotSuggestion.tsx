import { useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function FemBotSuggestion() {
    const [disabled, setDisabled] = useState(false);
    const [suggestion, setSuggestion] = useState("");
    const [status, setStatus] = useState("" as "" | "success" | "error");

    const sendSuggestion = async () => {
        setDisabled(true);
        const response = await fetch("/api/fembot/suggest", {
            method: "POST",
            body: JSON.stringify({
                suggestion
            })
        });
        if (response.status === 200) {
            setStatus("success");
        } else {
            setStatus("error");
        }

        setDisabled(false);
    };

    return (
        <>
            <Form.Label>Your suggestion</Form.Label>
            <Form.Control type="text" placeholder="I want to suggest..." disabled={disabled} value={suggestion} onChange={(x) => setSuggestion(x.currentTarget.value)}></Form.Control>
            <br />
            <Button disabled={disabled} onClick={sendSuggestion}>
                Suggest
            </Button>
            {status === "success" && (
                <>
                    <br />
                    <br />
                    <p style={{ color: "green" }}>Your suggestion has been sent!</p>
                </>
            )}
            {status === "error" && (
                <>
                    <br />
                    <br />
                    <p style={{ color: "red" }}>An error occured while sending your suggestion.</p>
                </>
            )}
        </>
    );
}
