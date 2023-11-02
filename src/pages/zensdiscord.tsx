import FemboyFridayVirtualHeadpat from "@/components/FemboyFridayVirtualHeadpat";
import FinalNavbar from "@/components/NavBar";
import { useEffect, useRef, useState } from "react";
import {
  Badge,
  Button,
  ButtonGroup,
  Container,
  Image,
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
        <h2>History</h2>
        <p>
          I've joined the server on 21/8/2023 (I think). I've gotten to know the
          community very well.{" "}
        </p>
        <p>I've done some art posts, including:</p>
        <ul>
          <li>
            <p>Astolfo is coming for you</p>
            <Image style={{width: "100%"}} src="/astolfoiscomingforyou_safe_1.webp" />
          </li>
          <li>
            <p>Astolfo Resource Pack</p>
            <Image style={{width: "100%"}} src="/astolforp_menu.webp" />
          </li>
        </ul>
        <p>On 2/9/2023, I got banned for "N/A"</p>
        <Image style={{width: '100%'}} src="/zenban.webp" />
        <small>(English is not my first language.)</small>
        <h2>Vote</h2>
        <ButtonGroup>
          <Button onClick={voteUnban} variant="success" disabled={loading}>
            <span>+ Vote for me to get unbanned</span>
            <Badge bg="secondary">{loading ? <Spinner /> : unbanVotes}</Badge>
          </Button>
          <Button onClick={voteStayBan} variant="danger" disabled={loading}>
            <span>- Vote for me to stay banned</span>
            <Badge bg="secondary">{loading ? <Spinner /> : stayBanVotes}</Badge>
          </Button>
        </ButtonGroup>
        <br />
        <br />
      </Container>
    </>
  );
}
