import BebidasPage from "../produtos/bebidas";
import DocesPage from "../produtos/doces";
import PaesDocesPage from "../produtos/paes-doces";
import PaesSalgadosPage from "../produtos/paes-salgados";
import SalgadosPage from "../produtos/salgados";

function Cardapio() {
    return(
        <main className="flex flex-col gap-14">
            {/* BEBIDAS */}
            <section className="flex flex-col gap-5">
                <article className="flex flex-col gap-3">
                    <h3>Bebidas</h3>
                    <p>- Refresque-se com nossas bebidas preparadas com ingredientes frescos e saborosos, perfeitas para qualquer momento do dia</p>
                </article>

                <BebidasPage />

            </section>

            {/* DOCES */}
            <section className="flex flex-col gap-5">
                <article className="flex flex-col gap-3">
                    <h3>Doces</h3>
                    <p>- Delicie-se com nossos doces, feitos com carinho e ingredientes de qualidade para adoçar seu dia</p>
                </article>

                <DocesPage />

            </section>     

            {/* PAES PAES DOCES */}
            <section className="flex flex-col gap-5">
                <article className="flex flex-col gap-3">
                    <h3>Paes Doces</h3>
                    <p>- Saboreie nossos pães doces, macios e deliciosos, perfeitos para um toque doce a qualquer hora</p>
                </article>

                <PaesDocesPage />

            </section>

            {/* PAES SALGADOS */}
            <section className="flex flex-col gap-5">
                <article className="flex flex-col gap-3">
                    <h3>Paes Salgados</h3>
                    <p>- Experimente nossos pães salgados, fresquinhos e recheados, ideais para um lanche saboroso</p>
                </article>

                <PaesSalgadosPage />

            </section>        

            {/* SALGADOS */}
            <section className="flex flex-col gap-5">
                <article className="flex flex-col gap-3">
                    <h3>Salgados</h3>
                    <p>- Nossos salgados são crocantes e recheados, perfeitos para um lanche rápido e cheio de sabor</p>
                </article>

                <SalgadosPage />

            </section>       
        </main>
    )
}

export default Cardapio;