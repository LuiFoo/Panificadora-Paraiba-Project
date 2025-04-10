import ImagensSection from "@/components/Footer/ImagensSection";
import CategoriasSwiper from "@/components/swiper";
import Image from "next/image";
import Link from "next/link";

function MainPrincipal() {
    return(
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
                <p className="text-[var(--color-alavaco-100)] text-base uppercase font-bold pb-4">Conheça a Padaria Paraíba</p>
                <h3 
                  className="text-4xl font-normal mb-4 text-[var(--color-fonte-100)]"         
                  style={{ fontFamily: "var(--fonte-secundaria)" }}
                  >
                    Sabor e tradição em cada um de nossos produtos
                  </h3>
                <p className="text-[var(--color-alavaco-100)] font-semibold text-base pt-3">
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

          <ImagensSection />
        </section>
      </main>
    )
}

export default MainPrincipal;