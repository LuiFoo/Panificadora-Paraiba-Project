import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import CategoriasSwiper from "@/components/swiper";
import Image from "next/image";
import MainPrincipal from "@/components/mains/Principal";

export default function Home() {
  return (
    <>
      <Header />
      <MainPrincipal />  
      <Footer />   
    </>
  );
}
