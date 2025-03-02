"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Container from '@/components/container/Container';

const ProductOneRes = () => {
    const ProductOneShowCase = {
        showcase: [
            {
                id: 1,
                title: "کفش",
                image: "https://cdn.childrensalon.com/media/catalog/product/cache/0/small_image/256x256/9df78eab33525d08d6e5fb8d27136e95/m/o/moon-boot-rose-gold-lace-up-boots-582802-4bfe1bec8c9898b372c74b5ee953df6f.jpg",
            },
            {
                id: 2,
                title: "پسرانه",
                image: "https://cdn.childrensalon.com/media/catalog/product/cache/0/small_image/256x256/9df78eab33525d08d6e5fb8d27136e95/t/o/toastie-sage-green-padded-snowsuit-571657-a5258eab86d3401abfcb3991f45f8a4e.jpg",
            },
            {
                id: 3,
                title: "پسرانه",
                image: "https://cdn.childrensalon.com/media/catalog/product/cache/0/small_image/256x256/9df78eab33525d08d6e5fb8d27136e95/m/o/moncler-enfant-pink-padded-ski-salopettes-575331-d505eb67c9412edad20b80426b995a97fdcd70b1.jpg",
            },
            {
                id: 4,
                title: "پسرانه",
                image: "https://cdn.childrensalon.com/media/catalog/product/cache/0/small_image/256x256/9df78eab33525d08d6e5fb8d27136e95/m/o/molo-beige-bunny-rabbit-padded-ski-jacket-567924-2a8d093b98e9a3f2878cf8bf780bcbd9b2297c99.jpg",
            },
            {
                id: 5,
                title: "پسرانه",
                image: "https://cdn.childrensalon.com/media/catalog/product/cache/0/small_image/256x256/9df78eab33525d08d6e5fb8d27136e95/r/o/roarsome-silver-polarised-anti-fog-ski-goggles-585940-dda18d6c3bb27827da1400ab0884fb1c.jpg",
            },
        ],
    };

    return (
     <Container>
           <div className=" md:hidden block mt-5 ">
            <Swiper
               breakpoints={{
                370: { slidesPerView: 1 },
                400:{slidesPerView: 2},
                500:{slidesPerView:2.5},
                600:{slidesPerView:3}
               }}
                spaceBetween={20}
                pagination={{ clickable: true }} 
                modules={[Pagination]}          
                className="mySwiper w-[100%] h-full flex flex-row justify-around items-center mt-2"
            >
                {ProductOneShowCase.showcase.map((elem) => (
                    <SwiperSlide key={elem.id} className=' flex flex-col justify-center items-center'>
                        <div className='w-[100%]  flex flex-col  justify-center items-center'>
                            <img className='w-[90%]' src={elem.image} alt={elem.title} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
     </Container>
    );
};

export default ProductOneRes;

