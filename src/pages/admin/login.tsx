import FinalNavbar from "@/components/NavBar";
import { useState } from "react";
import {Inter} from "next/font/google";
import { Container } from "react-bootstrap";

const inter = Inter({ subsets: ["latin"] });

export default function AdminLogin() {
  const [password, setPassword] = useState("");

  const login = () => {
    document.cookie = `token=${password};max-age=${60 * 60 * 24 * 7};path=/`;
    window.location.href = "/admin";
  };

  return (
    <div className={`${inter.className} text-white`}>
      <Container>
        <h1 className="text-5xl m-2 font-bold text-center">Administrator Login</h1>
        <p className="m-2 text-xl font-bold">Enter the password below: </p>
        <input
          type="password"
          className="m-2 bg-black rounded-md border-[1px]"
          value={password}
          onChange={(x) => setPassword(x.currentTarget.value)}
        />
        <br />
        <button onClick={login} className="m-2 p-1 bg-green-600 rounded-md">
          Log in
        </button>
      </Container>
    </div>
  );
}
