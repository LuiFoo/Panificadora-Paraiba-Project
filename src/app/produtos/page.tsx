"use client";

import Header from "@/components/Header";
import MenuCategoria from "@/components/MenuCategoria"; // ajuste o path conforme necessário
import { useEffect, useState } from "react";

interface ItemCardapio {
  _id: string;
  nome: string;
  valor: string;
}

const categoriasMenu: string[] = [
  'BOLOS DOCES ESPECIAIS',
  'DOCES INDIVIDUAIS',
  'PAES DOCES',
  'PAES SALGADOS ESPECIAIS',
  'ROSCAS PAES ESPECIAIS',
  'SALGADOS ASSADOS LANCHES',
  'SOBREMESAS TORTAS',
];

export default function CardapioPage() {
  const [categoriaAtual, setCategoriaAtual] = useState<string | null>(null);
  const [itens, setItens] = useState<ItemCardapio[]>([]);
  const [loading, setLoading] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const params = new URLSearchParams(window.location.search);
    const categoriaParam = params.get('categoria');

    if (categoriaParam && categoriasMenu.includes(categoriaParam)) {
      setCategoriaAtual(categoriaParam);
      buscarItensPorCategoria(categoriaParam);
    }
  }, []);

  const buscarItensPorCategoria = async (categoria: string) => {
    setLoading(true);

    try {
      const categoriaUrl = categoria.toLowerCase().replace(/\s+/g, '-');
      const response = await fetch(`/api/${categoriaUrl}`);

      if (!response.ok) {
        throw new Error(`Falha ao buscar itens da categoria ${categoria}`);
      }

      const data = await response.json();

      const chavesAPI: { [key: string]: string } = {
        'BOLOS DOCES ESPECIAIS': 'bolosDocesEspeciais',
        'DOCES INDIVIDUAIS': 'docesIndividuais',
        'PAES DOCES': 'paesDoces',
        'PAES SALGADOS ESPECIAIS': 'paesSalgadosEspeciais',
        'ROSCAS PAES ESPECIAIS': 'roscasPaesEspeciais',
        'SALGADOS ASSADOS LANCHES': 'salgadosAssadosLanches',
        'SOBREMESAS TORTAS': 'sobremesasTortas',
      };

      const chave = chavesAPI[categoria] || Object.keys(data)[0];
      setItens(data[chave] || []);
    } catch (error) {
      console.error(`Erro ao buscar itens da categoria ${categoria}:`, error);
      setItens([]);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoriaClick = (categoria: string) => {
    setCategoriaAtual(categoria);
    buscarItensPorCategoria(categoria);

    const url = new URL(window.location.href);
    url.searchParams.set('categoria', categoria);
    window.history.pushState({}, '', url);
  };

  return (
    <>
      <Header />
      <div className="mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-6">Nosso Cardápio</h1>

        <MenuCategoria
          categories={categoriasMenu}
          activeCategory={categoriaAtual}
          variant="button"
          onCategoryClick={handleCategoriaClick}
        />

        <div className="mt-12">
          {categoriaAtual && (
            <h2 className="text-2xl font-bold mb-6 text-center">{categoriaAtual}</h2>
          )}

          {!isClient ? (
            <p className="text-center text-gray-500">Carregando...</p>
          ) : loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
            </div>
          ) : categoriaAtual ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {itens.length ? (
                itens.map((item) => (
                  <div
                    key={item._id}
                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
                  >
                    <h3 className="text-lg font-semibold mb-2">{item.nome}</h3>
                    <p className="text-amber-600 font-bold">
                      R$ {parseFloat(item.valor).toFixed(2).replace('.', ',')}
                    </p>
                  </div>
                ))
              ) : (
                <p className="col-span-full text-center text-gray-500 py-8">
                  Nenhum item encontrado nesta categoria.
                </p>
              )}
            </div>
          ) : (
            <p className="text-center text-gray-500 py-8  px-4 ">
              Selecione uma categoria para ver os itens disponíveis.
            </p>
          )}
        </div>
      </div>
    </>
  );
}
