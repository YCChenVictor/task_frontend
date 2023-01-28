import React, { useEffect } from "react";
import Navbar from "./navbar.jsx"

export default function App() {
  useEffect(() => {
    fetch("http://localhost:5000/", {
      method: "GET",
    })
  }, []);
  return (
    <>
      <Navbar />
    </>
  );
}
