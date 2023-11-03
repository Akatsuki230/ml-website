import FemboyFridayVirtualHeadpat from "@/components/FemboyFridayVirtualHeadpat";
import FinalNavbar from "@/components/NavBar";
import ViewTracker from "@/components/ViewTracker";
import { useEffect, useRef, useState } from "react";
import {
  Accordion,
  Badge,
  Button,
  ButtonGroup,
  Container,
  FormControl,
  FormGroup,
  Image,
  InputGroup,
  Spinner,
} from "react-bootstrap";

export default function ZensDiscordBan() {
  const [unbanVotes, setUnbanVotes] = useState(0);
  const [stayBanVotes, setStayBanVotes] = useState(0);
  const [loading, setLoading] = useState(true);
  const hasRan = useRef(false);

  useEffect(() => {
    if (hasRan.current) return;
    hasRan.current = true;

    fetch("/api/zensdiscord/getvotes")
      .then((res) => res.json())
      .then((data) => {
        setUnbanVotes(data.unbanvotes);
        setStayBanVotes(data.banvotes);
        setLoading(false);
      });
  }, []);

  const voteUnban = () => {
    setLoading(true);
    fetch("/api/zensdiscord/addunban").then(() => {
      location.reload();
    });
  };

  const voteStayBan = () => {
    setLoading(true);
    fetch("/api/zensdiscord/addban").then(() => {
      location.reload();
    });
  };

  return (
    <>
      <FinalNavbar />
      <Container>
        <FemboyFridayVirtualHeadpat />
        <h1>Help mldkyt get unbanned on Zen's Discord!</h1>
        <p>
          So, I got banned on Zen's Discord for a stupid reason. I'm trying to
          get unbanned. If you want to help, please click the button below.
        </p>

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>History on this server</Accordion.Header>
            <Accordion.Body>
              <p>
                I've joined the server on 21/8/2023 (I think). I've gotten to
                know the community very well.
              </p>
              <p>I've done some art posts, including:</p>
              <h3>Astolfo is coming for you</h3>
              <Image
                rounded
                style={{ width: "100%" }}
                src="/astolfoiscomingforyou_safe_1.webp"
              />
              <h3>Astolfo Resource Pack</h3>
              <Image
                rounded
                style={{ width: "100%" }}
                src="/astolforp_menu.webp"
              />
              <p>On 2/9/2023, I got banned for "N/A".</p>
              <Image rounded style={{ width: "100%" }} src="/zenban.webp" />
              <p>
                <small>(English is not my first language.)</small>
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Help me get unbanned</Accordion.Header>
            <Accordion.Body>
              <p>
                To help in getting me unbanned, if you're on Zen's Discord, go
                ahead and add/change your username to:{" "}
              </p>
              <InputGroup>
                <FormControl type="text" readOnly value="#unbanmldkyt" />
                <InputGroup.Text>
                  <Button variant="transparent">Copy</Button>
                </InputGroup.Text>
              </InputGroup>
              <br />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Vote</Accordion.Header>
            <Accordion.Body>
              <p>You can vote anonymously, as much as you want here.</p>
              <ButtonGroup>
                <Button
                  onClick={voteUnban}
                  variant="success"
                  disabled={loading}
                >
                  <span>+ Vote for me to get unbanned</span>
                  <Badge bg="secondary">
                    {loading ? <Spinner /> : unbanVotes}
                  </Badge>
                </Button>
                <Button
                  onClick={voteStayBan}
                  variant="danger"
                  disabled={loading}
                >
                  <span>- Vote for me to stay banned</span>
                  <Badge bg="secondary">
                    {loading ? <Spinner /> : stayBanVotes}
                  </Badge>
                </Button>
              </ButtonGroup>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <br />
        <br />

        <ViewTracker />
      </Container>
    </>
  );
}
