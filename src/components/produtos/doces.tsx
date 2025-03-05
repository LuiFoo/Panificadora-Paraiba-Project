"use client";

import { useEffect, useState } from "react";

interface Doce {
  _id: string;
  nome: string;
  valor: number;
}

export default function DocesPage() {
  const [doces, setDoces] = useState<Doce[]>([]);
  const [loading, setLoading] = useState(true);
  const [isClient, setIsClient] = useState(false); // 🔹 Estado para verificar se está no client

  useEffect(() => {
    setIsClient(true); // 🔹 Indica que está no client
    async function fetchDoces() {
      try {
        const response = await fetch("/api/doces");
        if (!response.ok) {
          throw new Error("Falha ao buscar os doces");
        }
        const data = await response.json();
        setDoces(data.doces);
      } catch (error) {
        console.error("Erro ao buscar doces:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchDoces();
  }, []);

  if (!isClient || loading) { // 🔹 Evita renderização errada no SSR
    return <p>Carregando doces...</p>;
  }

  return (
    <ul className="flex flex-wrap gap-x-10 bg-blue-700">
      {doces.length > 0 ? (
        doces.map((doce) => (
          <li key={doce._id}>
            {doce.nome} - R${doce.valor}
          </li>
        ))
      ) : (
        <p>Nenhum doce encontrado.</p>
      )}
    </ul>
  );
}
