import Navbar from "~/components/Navbar";
import { useState } from "react";

export default function AdminLogin() {
  const [password, setPassword] = useState("");

  const login = () => {
    //   set a cookie named token to the value for 1 week
    //   redirect to /admin
    document.cookie = `token=${password};max-age=${60 * 60 * 24 * 7};path=/`;
    window.location.href = "/admin";
  };

  return (
    <>
      <h1 className="text-3xl m-2">Admin login</h1>
      <p className="m-2">Enter the password below: </p>
      <input
        type="password"
        className="m-2 bg-black rounded-md"
        value={password}
        onChange={(x) => setPassword(x.currentTarget.value)}
      />
      <br />
      <button onClick={login} className="m-2 p-1 bg-green-600 rounded-md">
        Log in
      </button>
      <Navbar sel="" />
    </>
  );
}
