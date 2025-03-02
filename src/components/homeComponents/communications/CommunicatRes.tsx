
"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Container from "@/components/container/Container";
import Link from 'next/link';


const CommunicatRes = () => {
    const imgCommunicate={
        communicate:[
            {
                id:1,
                image:"https://cdn.childrensalon.com/media/cms/r/e/reviews-9sznmim3jnk0kwswwk0gsgkwo-9sznmim3jnk0kwswwk0gsgkwo.svg",
                description:"به لیست علاقه مندی های خود و آخرین موارد ورودی در برنامه ما دسترسی داشته باشید. همچنین برای اندروید موجود است.",
                title:"برنامه را دانلود کنید"
            },
            {
                id:2,
                image:"https://cdn.childrensalon.com/media/cms/c/a/carbon-offset-icon-1-7mqwxvtr8z8c80cc0o8k4k4ko.svg",
                description:"به لیست علاقه مندی های خود و آخرین موارد ورودی در برنامه ما دسترسی داشته باشید. همچنین برای اندروید موجود است.",
                title:"بیشتر بدانید"  
            },
            {
                id:3,
                image:"https://cdn.childrensalon.com/media/cms/c/u/customer-service-icon-a75k764xh08c8ow8ck4ks0004.svg",
                description:"به لیست علاقه مندی های خود و آخرین موارد ورودی در برنامه ما دسترسی داشته باشید. همچنین برای اندروید موجود است.",
                title:"بیشتر بدانید"
            },
            {
                id:4,
                image:"https://cdn.childrensalon.com/media/cms/f/a/family-oo35yg503zkoow4sckws4cgc-oo35yg503zkoow4sckws4cgc.svg",
                description:"به لیست علاقه مندی های خود و آخرین موارد ورودی در برنامه ما دسترسی داشته باشید. همچنین برای اندروید موجود است.",
                title:"تحویل و مرجوعی"
            }
        ]
    }

    return ( 
        <Container>
            <div className=" lg:hidden block mt-20">
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
                {imgCommunicate.communicate.map((elem) => (
                    <SwiperSlide key={elem.id} className=''>
                        <div className="flex flex-col justify-center items-center  w-[100%]">
                        <img src={elem.image} alt="image" className="w-[20%] "/>
                        <div className="w-[80%]  text-center p-2">
                            <p className="text-[12px] ">{elem.description}</p>

                        </div>
                        <Link href="" className=" border-b-[1px] border-black mt-3 ">
                            <p className="text-[13px]">
                                {elem.title}
                            </p>
                           

                        </Link>
                    </div> 
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>
        </Container>
    );
}
 
export default CommunicatRes;
