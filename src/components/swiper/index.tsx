'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const cakeItems = [
  { name: 'Bolo de Cenoura', image: '/images/Container.png' },
  { name: 'Red Velvet', image: '/images/Container.png' },
  { name: 'Bolo de Chocolate', image: '/images/Container.png' },
  { name: 'Bolo de Milho', image: '/images/Container.png' },
  { name: 'Bolo de Fubá', image: '/images/Container.png' },
  { name: 'Cheesecake', image: '/images/Container.png' },
];

export default function CategoriasSwiper() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-10">
      <h2
        className="text-center text-[var(--color-fonte-100)] pb-8 text-2xl"
        style={{ fontFamily: "var(--fonte-secundaria)" }}
      >
        ALGUNS DOS NOSSOS PRODUTOS
      </h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3} // valor padrão
        loop
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        breakpoints={{
          100: {
            slidesPerView: 1, // 1 slide por vez no mobile
          },
          768: {
            slidesPerView: 2, // 2 slides por vez em tablets
          },
          1024: {
            slidesPerView: 3, // 3 slides por vez em telas maiores (desktop)
          },
        }}
        className="rounded-2xl !pb-7"
      >
        {cakeItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="rounded-2xl overflow-hidden shadow bg-white mb-5">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center font-semibold text-lg">
                {item.name}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
