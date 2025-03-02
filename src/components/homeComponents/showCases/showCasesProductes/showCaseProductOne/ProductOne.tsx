import Container from "@/components/container/Container";
import Link from "next/link";
import React from "react";



const ProductOne: React.FC = () => {
    const ProductOneShowCase= {
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

<div className="w-[100%] mt-9 md:flex hidden">
        <ul className="flex flex-row justify-between  w-[100%] mt-3 ">
            {ProductOneShowCase.showcase.map((category) => (
                <Link href="" className="w-[18%]" >

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

export default ProductOne;
