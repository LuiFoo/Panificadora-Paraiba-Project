import Image from "next/image";
import logo from "../../assets/images/logo.svg"
import Link from "next/link";

function Header() {
    return (
        <header className="flex justify-center items-center gap-5 font-bold text-sm p-5">
            <Link href="/">PÁGINA INICIAL</Link>
            <Link href="/sobre">QUEM SOMOS</Link>
            <Link href="/">
                <Image src={logo} alt="Logo" width={121} height={79} />
            </Link>
            <Link href="/cardapio">PRODUTOS</Link>
            <Link href="/sobre">FALE CONOSCO</Link>
        </header>
    )
}

export default Header;