import FemboyFridayVirtualHeadpat from "@/components/FemboyFridayVirtualHeadpat"
import FinalNavbar from "@/components/NavBar"
import ViewTracker from "@/components/ViewTracker"
import { Inter } from "next/font/google"
import { Button, Container, Form } from "react-bootstrap"
import { useState } from "react"

const inter = Inter({ subsets: ["latin"] })

export default function Bans() {
    const [value, setValue] = useState("")

    const check = () => {
        location.href = `/discord/${value}/banstatus`
    }

    return (
        <div className={inter.className}>
            <FinalNavbar />

            <Container>
                <FemboyFridayVirtualHeadpat />
                <h1>Check your ban reason on mldkyt's server</h1>
                <Form.Text>Enter your username below to check why you have been banned:</Form.Text>
                <Form.Control type="text" placeholder="Username" value={value} onChange={e => setValue(e.target.value)} />
                <br />
                <Button onClick={check} variant="primary" type="submit">Check</Button>
                <br />
                <br />
                <br />
                <ViewTracker />
            </Container>
        </div>
    )
}