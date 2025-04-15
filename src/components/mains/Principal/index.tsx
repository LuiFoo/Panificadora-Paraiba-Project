import ImagensSection from "@/components/Footer/ImagensSection";
import SectionTexImg from "@/components/SectionTexImg";
import CategoriasSwiper from "@/components/swiper";
import MenuCategoria from "@/components/MenuCategoria";
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

        <MenuCategoria 
          categories={[
            'BOLOS DOCES ESPECIAIS',
            'DOCES INDIVIDUAIS',
            'PAES DOCES',
            'PAES SALGADOS ESPECIAIS',
            'ROSCAS PAES ESPECIAIS',
            'SALGADOS ASSADOS LANCHES',
            'SOBREMESAS TORTAS',
          ]}
          variant="link"
        />

        <CategoriasSwiper />

        </section>

        <SectionTexImg />
        <ImagensSection />
      </main>
    )
}

export default MainPrincipal;