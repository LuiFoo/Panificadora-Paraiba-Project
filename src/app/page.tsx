import BebidasPage from "@/components/produtos/bebidas";
import DocesPage from "@/components/produtos/doces";
import PaesDocesPage from "@/components/produtos/paes-doces";
import PaesSalgadosPage from "@/components/produtos/paes-salgados";
import SalgadosPage from "@/components/produtos/salgados";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <BebidasPage />
      <p>-----------------</p>
      <DocesPage />
      <p>-----------------</p>
      <PaesDocesPage />
      <p>-----------------</p>
      <PaesSalgadosPage />
      <p>-----------------</p>
      <SalgadosPage />
      <p>-----------------</p>
    </>
  );
}
