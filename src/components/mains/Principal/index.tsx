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

        <section aria-labelledby="sobre-padaria" className="flex justify-center gap-[6rem] items-center">
            
            <article className="w-[34rem]">
              <p className="text-[var(--color-alavaco-100)] text-[1rem] uppercase font-bold">Conheça a Padaria Paraíba</p>
              <h2 
                className="pt-[1rem] pb-[0.68rem] text-4xl font-normal text-[var(--color-fonte-100)]"
                style={{ fontFamily: "var(--fonte-secundaria)" }}
              >
                Sabor e tradição em cada um de nossos produtos
              </h2>
              <p className="pb-[1.25rem] text-[var(--color-alavaco-100)] font-semibold text-base">
                Na Panificadora Paraíba, desde 2016, unimos tradição e qualidade para oferecer pães e doces feitos com carinho. O que começou como um sonho de pai e filha se tornou um ponto de encontro querido pelos clientes. Crescemos, inovamos, mas sem perder nossa essência: ingredientes selecionados e o sabor de sempre. Seja bem-vindo ao nosso mundo de aromas e sabores!</p>
            
              <div className="pt-7 flex gap-8">
                <Link href="/" className="uppercase bg-[var(--color-avocado-600)] hover:bg-[var(--color-avocado-500)] py-3 px-7 font-bold">ver produtos</Link>
                <Link href="/" className="uppercase bg-[var(--background)] hover:bg-[var(--background2)] py-3 px-7 font-bold border-2 border-black">nossa história</Link>
                </div>
            </article>

            <figure>
              <Image 
                src="/images/imagemsectionprin.png"
                alt="Produtos da Padaria Paraíba"
                width={400} 
                height={500} 
              />
            </figure>

        </section>
        <ImagensSection />
      </main>
    )
}

export default MainPrincipal;