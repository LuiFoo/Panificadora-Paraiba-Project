import Link from "next/link";

function Footer() {
  return (
    <footer>
      <section className="flex flex-wrap justify-between pt-24 px-23 bg-gray-100">
          <div className="brand-section mb-6 md:mb-0">
            <img
              src="/images/logo.svg"
              alt="Logo da Padaria"
              className="w-36 mb-4"
            />
            <p className="text-4 font-semibold max-w-70 mb-6">Receitas da nossa família para a sua casa.</p>
          
            <a href="https://instagram.com/panificadora.paraiba" target="_blank" aria-label="Siga-nos no Instagram" className="inline-block">
              <img
                src="/images/logoInstagram.svg"
                alt="Logo Instagram"
                className="w-8 h-8"
              />
            </a>
          </div>
          
          <nav className="mb-6 md:mb-0" aria-labelledby="footer-navigation">
            <h2 id="footer-navigation" className="font-bold mb-3">Navegue</h2>
            <ul className="space-y-2">
                <li className="flex items-center gap-2">
                    <img src="/images/seta.svg" alt="Logo Instagram" />
                    <Link href="/" className="hover:underline">Quem Somos</Link>
                </li>
                <li className="flex items-center gap-2">
                    <img src="/images/seta.svg" alt="Logo Instagram" />
                    <Link href="/sobre" className="hover:underline">Fale Conosco</Link>
                </li>
                <li className="flex items-center gap-2">
                    <img src="/images/seta.svg" alt="Logo Instagram" />
                    <Link href="/produtos" className="hover:underline">Produtos</Link>
                </li>
                <li className="flex items-center gap-2">
                    <img src="/images/seta.svg" alt="Logo Instagram" />
                    <Link href="/localizacao" className="hover:underline">Google Maps</Link>
                </li>
            </ul>
          </nav>
          
          <section className="mb-6 md:mb-0" aria-labelledby="hours-heading">
            <h2 id="hours-heading" className="font-bold mb-3">Funcionamento</h2>
            <div className="flex items-center gap-2 mb-4">
                <img src="/images/padaria.svg" alt="Logo Instagram" />
                <h3 className="text-base font-extrabold">Padaria</h3>
            </div>
            <p className="text-sm mb-2">Segunda a sábado: 06h às 19h</p>
            <p className="text-sm">Domingo: 06h às 12h</p>
          </section>
          
          <address className="not-italic" aria-labelledby="contact-heading">
            <h2 id="contact-heading" className="font-bold mb-3">Contato</h2>

            <ul className="space-y-2">
                <li className="flex items-center gap-2">
                    <img src="/images/telefone.svg" alt="Logo Instagram" />
                    <a href="tel:+551636151947" className="hover:underline">(16) 3615-1947</a>
                </li>
                <li className="flex items-center gap-2">
                    <img src="/images/gmail.svg" alt="Logo Instagram" />
                    <a href="mailto:padariaparaiba@gmail.com" className="hover:underline">padariaparaiba@gmail.com</a>
                </li>
                <li className="flex items-center gap-2 max-w-78">
                    <img src="/images/setaNavegacao.svg" alt="Logo Instagram" />
                    <p>Av. Ernesto Guevara Lã Serna, 72 - Jardim Heitor Rigon, Ribeirão Preto - SP</p>
                </li>
            </ul>

            <a href="https://api.whatsapp.com/send?phone=551636151947&text=Olá%20Paraíba" target="_blank" aria-label="Siga-nos no Instagram" className="pt-12 flex justify-end">
              <img
                src="/images/botaoWhatsaap.svg"
                alt="Logo Instagram"
                className="w-20"
              />
            </a>
          </address>
      </section>
      <h4 className="text-center text-base font-bold pt-6 pb-2">©2025. Todos os direitos reservados. Blue Bird.</h4>
    </footer>
  );
}

export default Footer;