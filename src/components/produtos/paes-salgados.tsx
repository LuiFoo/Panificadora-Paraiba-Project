"use client";

import { useEffect, useState } from "react";

interface PaoSalgado {
  _id: string;
  nome: string;
  valor: number;
}

export default function PaesSalgadosPage() {
  const [paesSalgados, setPaesSalgados] = useState<PaoSalgado[]>([]);
  const [loading, setLoading] = useState(true);
  const [isClient, setIsClient] = useState(false); // 🔹 Estado para verificar se está no client

  useEffect(() => {
    setIsClient(true); // 🔹 Indica que está no client
    async function fetchPaesSalgados() {
      try {
        const response = await fetch("/api/paes-salgados");
        if (!response.ok) {
          throw new Error("Falha ao buscar os pães salgados");
        }
        const data = await response.json();
        setPaesSalgados(data.paesSalgados);
      } catch (error) {
        console.error("Erro ao buscar pães salgados:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPaesSalgados();
  }, []);

  if (!isClient || loading) { // 🔹 Evita renderização errada no SSR
    return <p>Carregando pães salgados...</p>;
  }

  return (
    <ul className="flex flex-wrap gap-x-10 bg-blue-700">
      {paesSalgados.length > 0 ? (
        paesSalgados.map((paoSalgado) => (
          <li key={paoSalgado._id}>
            {paoSalgado.nome} - R${paoSalgado.valor}
          </li>
        ))
      ) : (
        <p>Nenhum pão salgado encontrado.</p>
      )}
    </ul>
  );
}
