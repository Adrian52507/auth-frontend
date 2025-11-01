import Image from "next/image";

export default function Home() {
  return (
    <main style={{ display:"grid", gap:12, padding:24 }}>
      <h1 style={{backgroundColor: "white", color: "black"}}>Demo Auth</h1>
      <a href="/register">Registro</a>
      <a href="/login">Login</a>
      <a href="/dashboard">Dashboard (protegido)</a>
    </main>
  );
}

