"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Container from '@/components/container/Container';

const ProductTwoRes = () => {
    const ProductTwoShowCase = {
        showcase: [
            {
                id: 1,
                title: "کفش",
                image: "https://cdn.childrensalon.com/media/catalog/product/cache/0/small_image/256x256/9df78eab33525d08d6e5fb8d27136e95/s/t/stella-mccartney-kids-girls-blue-denim-ladybird-trainers-595062-dba71ca7e30764d5413f1654c28b7ea6.jpg",
            },
            {
                id: 2,
                title: "پسرانه",
                image: "https://cdn.childrensalon.com/media/catalog/product/cache/0/small_image/256x256/9df78eab33525d08d6e5fb8d27136e95/s/t/stella-mccartney-kids-white-cotton-frog-baby-t-shirt-593681-1c1ef2663466b5cf90cc3391506b2c237a1317a3.jpg",
            },
            {
                id: 3,
                title: "پسرانه",
                image: "https://cdn.childrensalon.com/media/catalog/product/cache/0/small_image/256x256/9df78eab33525d08d6e5fb8d27136e95/s/e/self-portrait-girls-sparkly-red-viscose-knit-skirt-586918-05ef6d88666b6a7887b4a64f2727e577.jpg",
            },
            {
                id: 4,
                title: "پسرانه",
                image: "https://cdn.childrensalon.com/media/catalog/product/cache/0/small_image/256x256/9df78eab33525d08d6e5fb8d27136e95/t/o/tommy-hilfiger-boys-blue-chambray-shirt-584712-11bd002113e74cff58399a0cc46c46a2bd58c7a1.jpg",
            },
            {
                id: 5,
                title: "پسرانه",
                image: "https://cdn.childrensalon.com/media/catalog/product/cache/0/small_image/256x256/9df78eab33525d08d6e5fb8d27136e95/s/e/self-portrait-girls-pink-cotton-wool-knit-cardigan-586912-8cd705c0f461b40d1e9524784715db0d.jpg",
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
                {ProductTwoShowCase.showcase.map((elem) => (
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

export default ProductTwoRes;