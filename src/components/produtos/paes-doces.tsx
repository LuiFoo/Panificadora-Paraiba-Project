"use client";

import { useEffect, useState } from "react";

interface PaesDoce {
  _id: string;
  nome: string;
  valor: number;
}

export default function PaesDocesPage() {
  const [paesDoces, setPaesDoces] = useState<PaesDoce[]>([]);
  const [loading, setLoading] = useState(true);
  const [isClient, setIsClient] = useState(false); // 🔹 Estado para verificar se está no client

  useEffect(() => {
    setIsClient(true); // 🔹 Indica que está no client
    async function fetchPaesDoces() {
      try {
        const response = await fetch("/api/paes-doces");
        if (!response.ok) {
          throw new Error("Falha ao buscar os pães doces");
        }
        const data = await response.json();
        setPaesDoces(data.paesDoces);
      } catch (error) {
        console.error("Erro ao buscar pães doces:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPaesDoces();
  }, []);

  if (!isClient || loading) { // 🔹 Evita renderização errada no SSR
    return <p>Carregando pães doces...</p>;
  }

  return (
    <div>
      <h1>Lista de Pães Doces</h1>
      <ul>
        {paesDoces.length > 0 ? (
          paesDoces.map((paesDoce) => (
            <li key={paesDoce._id}>
              {paesDoce.nome} - R${paesDoce.valor}
            </li>
          ))
        ) : (
          <p>Nenhum pão doce encontrado.</p>
        )}
      </ul>
    </div>
  );
}
