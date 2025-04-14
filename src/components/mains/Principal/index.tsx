import ImagensSection from "@/components/Footer/ImagensSection";
import SectionTexImg from "@/components/SectionTexImg";
import CategoriasSwiper from "@/components/swiper";
import Image from "next/image";

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

        <SectionTexImg />
        <ImagensSection />
      </main>
    )
}

export default MainPrincipal;
