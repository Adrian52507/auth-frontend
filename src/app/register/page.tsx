"use client";
import { useState } from "react";
import { api } from "@/lib/api";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [msg, setMsg] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMsg("");
    try {
      await api("/api/register", {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
      });
      setMsg("Registrado. Ahora puedes iniciar sesión.");
    } catch (e: any) {
      setMsg(e.message);
    }
  };

  return (
    <main style={{ padding: 24 }}>
      <h2>Registro</h2>
      <form onSubmit={onSubmit} style={{ display:"grid", gap:8, maxWidth:320 }}>
        <input placeholder="Nombre" value={name} onChange={e=>setName(e.target.value)} />
        <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input placeholder="Contraseña" type="password" value={password} onChange={e=>setPass(e.target.value)} />
        <button type="submit">Crear cuenta</button>
      </form>
      <p>{msg}</p>
    </main>
  );
}
