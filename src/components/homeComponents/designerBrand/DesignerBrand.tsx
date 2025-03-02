"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import DesignerItem from "./DesignerItem";
import Container from "@/components/container/Container";

interface Brand {
  id: number;
  image: string;
}

const DesignerBrand: React.FC = () => {
  const designerBrand: { Brand: Brand[] } = {
    Brand: [
      { id: 1, image: "https://cdn.childrensalon.com/media/cms/cache/300x60/c/h/chloe-e43bizvlt544008ckw08kkowg.webp" },
      { id: 2, image: "https://cdn.childrensalon.com/media/cms/cache/300x60/a/r/artboard-2-2shd3py0n6m8cw0ookok4g8cg.webp" },
      { id: 3, image: "https://cdn.childrensalon.com/media/cms/cache/600x120/a/r/artboard-3-aamliqpn81s0wscskowc400ks.webp" },
      { id: 4, image: "https://cdn.childrensalon.com/media/cms/cache/300x60/f/e/fendi-3xu04hfsrv40wksskwk048s4c.webp" },
      { id: 5, image: "https://cdn.childrensalon.com/media/cms/cache/300x60/a/r/armani-8bn4jy20evk8g8skswgok40g0.webp" },
      { id: 6, image: "https://cdn.childrensalon.com/media/cms/cache/300x60/a/r/artboard-1-4ok7cjqpaagwsswk44go4g88c.webp" },
      { id: 7, image: "https://cdn.childrensalon.com/media/cms/cache/600x120/m/o/moncler-3iihymv5ypgkwsskggswskk0w-c8qi30ri52go4sg4080kc0wko-7nq2qybtnpk4w4k04k0o0sww8.webp" },
      { id: 8, image: "https://cdn.childrensalon.com/media/cms/cache/600x120/a/r/artboard-6-28ssaiij02m8wo4sg80884oko.webp" },
    ],
  };

  return (
    <Container>
      <div className=" flex flex-col w-full  p-3">
      <h2 className="text-center text-2xl font-bold py-4">طراحان ما</h2>
      <Swiper
        
        breakpoints={{
          880: { slidesPerView: 8 },
          770: { slidesPerView: 7 },
          660: { slidesPerView: 6.5 },
          590: { slidesPerView: 5.5 },
          550: { slidesPerView: 5 },
          480: { slidesPerView: 4.5 },
          440: { slidesPerView: 4 },
          380: { slidesPerView: 2.5 },
        }}
        spaceBetween={20}
        
        className="mySwiper w-[100%] h-full flex flex-row justify-around mt-2"
      >
        {designerBrand.Brand.map((elem) => (
          <SwiperSlide key={elem.id}>
            <DesignerItem item={elem} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className=" flex flex-row justify-center py-4 mt-7 ">
        <Link href="/" className="bg-black px-5 py-3 text-white font-semibold ">
          خرید از بیش از ۲۵۰ طراح
        </Link>
      </div>
    </div>
    </Container>
   
  );
};

export default DesignerBrand;


