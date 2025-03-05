'use client';

import { useEffect, useState } from "react";

// Definindo uma interface para as bebidas
interface Bebida {
  _id: string;
  nome: string;
  valor: number;
}

export default function BebidasPage() {
  const [bebidas, setBebidas] = useState<Bebida[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBebidas() {
      try {
        const response = await fetch("/api/bebidas");
        if (!response.ok) {
          throw new Error("Falha ao buscar as bebidas");
        }
        const data = await response.json();
        setBebidas(data.bebidas); // Acessando corretamente a lista de bebidas
      } catch (error) {
        console.error("Erro ao buscar bebidas:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchBebidas();
  }, []);

  if (loading) {
    return <p>Carregando bebidas...</p>;
  }

  return (
    <div>
      <h1>Lista de Bebidas</h1>
      <ul>
        {bebidas.length > 0 ? (
          bebidas.map((bebida) => (
            <li key={bebida._id}>
              {bebida.nome} - R${bebida.valor} {/* Exibe nome do produto e preço */}
            </li>
          ))
        ) : (
          <p>Nenhuma bebida encontrada.</p>
        )}
      </ul>
    </div>
  );
}
