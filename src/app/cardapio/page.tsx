"use client";

import Header from "@/components/Header";
import { useEffect, useState } from "react";

// Interface para os itens do cardápio
interface ItemCardapio {
  _id: string;
  nome: string;
  valor: string;
}

// Categorias disponíveis no menu
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
    
    // Verifica se há uma categoria na URL quando a página carrega
    const params = new URLSearchParams(window.location.search);
    const categoriaParam = params.get('categoria');
    
    if (categoriaParam && categoriasMenu.includes(categoriaParam)) {
      setCategoriaAtual(categoriaParam);
      buscarItensPorCategoria(categoriaParam);
    }
  }, []);

  // Função para buscar itens quando uma categoria é selecionada
  const buscarItensPorCategoria = async (categoria: string) => {
    setLoading(true);
    
    try {
      // Converte o nome da categoria para um formato adequado para a URL da API
      const categoriaUrl = categoria.toLowerCase().replace(/\s+/g, '-');
      const response = await fetch(`/api/${categoriaUrl}`);
      
      if (!response.ok) {
        throw new Error(`Falha ao buscar itens da categoria ${categoria}`);
      }
      
      const data = await response.json();
      
      // Seleciona a chave correta do objeto retornado com base na categoria
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

  // Função para lidar com o clique em uma categoria
  const handleCategoriaClick = (categoria: string) => {
    setCategoriaAtual(categoria);
    buscarItensPorCategoria(categoria);
    
    // Atualiza a URL com a categoria selecionada sem recarregar a página
    const url = new URL(window.location.href);
    url.searchParams.set('categoria', categoria);
    window.history.pushState({}, '', url);
  };

  return (

    <>
      <Header/>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-6">Nosso Cardápio</h1>
      
        {/* Menu de navegação com as categorias */}
        <nav className="mt-8 flex justify-center">
          <ul className="flex gap-3 whitespace-nowrap px-4">
            {categoriasMenu.map((categoria, index) => (
              <li key={index} className="flex-shrink-0">
                <button
                  onClick={() => handleCategoriaClick(categoria)}
                  className={`block px-4 py-3 text-sm font-semibold rounded-lg shadow transition
                    ${categoriaAtual === categoria
                      ? 'bg-[var(--color-alavaco-100)] text-white'
                      : 'bg-[var(--color-avocado-600)] text-amber-900 hover:bg-[var(--color-avocado-500)]'
                    } focus:outline-none focus:ring-2 focus:ring-[var(--color-alavaco-100)]`}
                >
                  {categoria}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      
        {/* Conteúdo da categoria selecionada */}
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
              {itens.length > 0 ? (
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
            <p className="text-center text-gray-500 py-8">
              Selecione uma categoria para ver os itens disponíveis.
            </p>
          )}
        </div>
      </div>
    </>
  );
}