"use client";

import { useEffect, useState } from "react";

interface Salgado {
  _id: string;
  nome: string;
  valor: number;
}

export default function SalgadosPage() {
  const [salgados, setSalgados] = useState<Salgado[]>([]);
  const [loading, setLoading] = useState(true);
  const [isClient, setIsClient] = useState(false); // 🔹 Estado para verificar se está no client

  useEffect(() => {
    setIsClient(true); // 🔹 Indica que está no client
    async function fetchSalgados() {
      try {
        const response = await fetch("/api/salgados");
        if (!response.ok) {
          throw new Error("Falha ao buscar os salgados");
        }
        const data = await response.json();
        setSalgados(data.salgados);
      } catch (error) {
        console.error("Erro ao buscar salgados:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchSalgados();
  }, []);

  if (!isClient || loading) { // 🔹 Evita erro de SSR
    return <p>Carregando salgados...</p>;
  }

  return (
    <div>
      <h1>Lista de Salgados</h1>
      <ul>
        {salgados.length > 0 ? (
          salgados.map((salgado) => (
            <li key={salgado._id}>
              {salgado.nome} - R${salgado.valor}
            </li>
          ))
        ) : (
          <p>Nenhum salgado encontrado.</p>
        )}
      </ul>
    </div>
  );
}
