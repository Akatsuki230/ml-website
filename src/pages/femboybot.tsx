import FinalNavbar from "@/components/NavBar";
import {
  Alert,
  Button,
  Card,
  Container,
  Form,
  FormGroup,
  InputGroup,
  Spinner,
} from "react-bootstrap";
import styles from "@/styles/femboybot.module.css";
import { Inter } from "next/font/google";
import ViewTracker from "@/components/ViewTracker";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });
export default function FemboyBot() {
  const [suggestionInput, setSuggestionInput] = useState("");
  const [suggestionSending, setSuggestionSending] = useState(false);
  const [suggestionSentSuccess, setSuggestionSentSuccess] = useState(false);
  const [suggestionError, setSuggestionError] = useState('');

  const sendSuggestion = () => {
    setSuggestionError('');
    setSuggestionSentSuccess(false);

    if (suggestionInput.trim() == '') {
      setSuggestionError('You must enter a suggestion!');
      return
    }
    if (suggestionInput.length > 100) {
      setSuggestionError('Your suggestion must be 100 characters or less! (' + suggestionInput.length + '/100)');
      return
    }
    
    setSuggestionSending(true);
    fetch(`/api/femboybot/suggest`, {
      method: 'POST',
      body: JSON.stringify({
        suggestion: suggestionInput
      })
    })
      .then(x => x.text())
      .then(x => {
        if (x == 'Success') {
          setSuggestionSending(false);
          setSuggestionSentSuccess(true);
          setSuggestionInput('');
        }
        else {
          setSuggestionError(x);
          setSuggestionSending(false);
        }
      })
  }

  return (
    <div className={inter.className}>
      <FinalNavbar />

      <Container>
        <h1 className={styles.center}>FemboyBot</h1>
        <Alert variant="warning">
          <h2>Cancelled project</h2>
          <p>This project is canceled</p>
          <p>After I realized the amount of time I would have to put into this project and comparing it with the amount of time that I have, I came to the conclusion to cancel this project.</p>
          <small><i>This might change in the future if I have more time.</i></small>
        </Alert>
        <br />
        <br />
        <ViewTracker />
      </Container>
    </div>
  );
}
