import Container from "@/components/container/Container";
import Link from "next/link";
import React from "react";



const ProductTwo: React.FC = () => {
    const ProductOneShowCase= {
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

        <div className="w-[100%] md:flex hidden mt-14">
                <ul className="flex flex-row justify-between  w-[100%] mt-3 ">
                    {ProductOneShowCase.showcase.map((category) => (
                        <Link href="" className=" w-[18%]" >
        
                            <li className=" flex flex-col justify-center items-center w-[100%]" key={category.id}>
                           
                                <img className="w-[100%] rounded-xl" src={category.image} alt={category.title} />
        
                                
                                <p className="text-center mt-3">{category.title}</p>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
               </Container> 
    );
};

export default ProductTwo;