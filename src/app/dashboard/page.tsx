"use client";
import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const [msg, setMsg] = useState("");
  const router = useRouter();

  useEffect(() => {
    api("/api/me")
      .then(data => setUser(data.user))
      .catch(() => {
        setMsg("No autenticado");
        setTimeout(()=>router.push("/login"), 1200);
      });
  }, [router]);

  const doLogout = async () => {
    try {
      await api("/api/logout", { method: "POST" });
      router.push("/");
    } catch (e:any) {
      setMsg(e.message);
    }
  };

  return (
    <main style={{ padding: 24 }}>
      <h2>Dashboard</h2>
      {user ? (
        <>
          <p>¡Bienvenido, <b>{user.name}</b>! 🎉</p>
          <p>Tu correo: {user.email}</p>
          <button onClick={doLogout}>Cerrar sesión</button>
        </>
      ) : <p>{msg || "Cargando..."}</p>}
    </main>
  );
}
