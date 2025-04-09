import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import CategoriasSwiper from "@/components/swiper";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />

        <main>


        <section className="relative w-full h-120">
          <Image
              src="/images/back-inicial.png"
              alt="Logo"
              layout="fill"
              objectFit="cover"
            />
        </section>

        <section>
        <nav className="mt-8 overflow-x-auto flex justify-center">
          <ul className="flex gap-3 whitespace-nowrap px-4">
            {[
              'BOLOS DOCES ESPECIAIS',
              'DOCES INDIVIDUAIS',
              'PAES DOCES',
              'PAES SALGADOS ESPECIAIS',
              'ROSCAS PAES ESPECIAIS',
              'SALGADOS ASSADOS LANCHES',
              'SOBREMESAS TORTAS',
            ].map((label, index) => (
              <li key={index} className="flex-shrink-0">
                <a
                  href="/cardapio?categoria=bebidas"
                  className="block px-4 py-3 bg-[var(--color-avocado-600)] text-white text-sm font-semibold rounded-lg shadow hover:bg-[var(--color-avocado-500)] focus:outline-none focus:ring-2 focus:ring-[var(--color-avocado-500)] transition"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <CategoriasSwiper />

        </section>

        <section aria-labelledby="sobre-padaria" className="w-full">
          <div className="max-w-6xl mx-auto">
            <article className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Texto à esquerda */}
              <div className="w-full">
                <p className="text-lg uppercase text-gray-600 pb-5">Conheça a Padaria Paraíba</p>
                <h3 className="text-4xl font-semibold mb-4 text-[var(--color-fonte-100)]">Sabor e tradição em cada um de nossos produtos</h3>
                <p className="text-gray-700 font-semibold text-base pt-3">
                  Na Panificadora Paraíba, desde 2016, unimos tradição e qualidade para oferecer pães e doces feitos com carinho.
                  O que começou como um sonho de pai e filha se tornou um ponto de encontro querido pelos clientes. Crescemos,
                  inovamos, mas sem perder nossa essência: ingredientes selecionados e o sabor de sempre. Seja bem-vindo ao nosso
                  mundo de aromas e sabores!
                </p>
                <div className="pt-7 flex gap-8">
                <Link href="/" className="uppercase bg-[var(--color-avocado-600)] hover:bg-[var(--color-avocado-500)] py-3 px-7 font-bold">ver produtos</Link>
                <Link href="/" className="uppercase bg-[var(--background)] hover:bg-[var(--background2)] py-3 px-7 font-bold border-2 border-black">nossa história</Link>
                </div>
              </div>

              {/* Imagem à direita */}
              <figure className="md:w-1/2">
                <img
                  src="/images/imagemsectionprin.png"
                  alt="Produtos da Padaria Paraíba"
                  className="rounded-lg w-96"
                />
                <figcaption className="sr-only">Produtos da Padaria Paraíba</figcaption>
              </figure>
            </article>
          </div>

          <iframe
            title="Localização da Panificadora Paraíba no Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14887.332009890566!2d-47.827383518174614!3d-21.11922302639198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9951b9396d22d%3A0xd0bd2576f3107240!2sPanificadora%20Paraiba!5e0!3m2!1spt-BR!2sbr!4v1744143622485!5m2!1spt-BR!2sbr"
            className="mt-12 w-full rounded-lg"
            height="425"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <figure>
            <img
              src="/images/linha.png"
              alt="Produtos da Padaria Paraíba"
              className="w-full"
            />
            <figcaption className="sr-only">Linha</figcaption>
          </figure>


        </section>
      </main>
          
      <Footer />
            
    </>
  );
}
