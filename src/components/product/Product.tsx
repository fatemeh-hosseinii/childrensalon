"use client";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";

interface IProduct { sizes: number[], image: string, designer: string, title: string, price: number, discount: number }

function Product(props: IProduct) {
    const availableSizesBox = useRef<HTMLDivElement | null>(null);
    const [favorite, setFavorite] = useState<boolean>(false);

    const handleMouseEnter = () => {
        if (availableSizesBox.current) {
            availableSizesBox.current.style.opacity = '1';
            availableSizesBox.current.style.visibility = 'visible';
        }
    };

    const handleMouseLeave = () => {
        if (availableSizesBox.current) {
            availableSizesBox.current.style.opacity = '0';
            availableSizesBox.current.style.visibility = 'hidden';
        }
    };

    return (
        <div className="col-span-1 lg:mb-5">
            <Link href="" className="w-full relative group" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <img
                    src={props.image}
                    alt={props.title}
                    className="w-full transition-all duration-300 group-hover:brightness-75"
                />
                <div
                    ref={availableSizesBox}
                    className="bg-white w-2/3 h-5/6 border rounded absolute py-2 right-1/2 top-4 transform translate-x-1/2 shadow-lg transition-all duration-300 opacity-0 invisible"
                >
                    <p className="text-sm text-center text-gray-600 border-b pb-1">
                        سایز موجود
                    </p>
                    <div className="flex flex-col flex-wrap content-around w-full h-5/6 mt-1 overflow-auto">
                        {props.sizes.map((size, index) => (
                            <span
                                key={index}
                                className="text-sm text-gray-400 font-thin"
                            >
                                {size}
                            </span>
                        ))}
                    </div>
                </div>
            </Link>
            <p className="font-black text-sm mt-3 flex items-center justify-between">
                <Link href="">{props.designer} </Link>
                <span className=" text-md cursor-pointer " onClick={() => setFavorite(!favorite)}>
                    {!favorite && (
                        <FaRegHeart className="text-gray-500" />
                    )}
                    {favorite && (
                        <FaHeart className="text-red-600" />
                    )}
                </span>
            </p>
            <Link href="" className="font-thin text-gray-700 text-sm mt-1">
               {props.title}
            </Link>
            <p className="text-sm mt-2 flex items-center">
                <span className="font-black text-red-700"> {props.price.toLocaleString('fa-IR')} 
                    تومان </span>
                <span className="font-thin text-gray-500 mr-3 line-through">
                {props.discount.toLocaleString('fa-IR')} 
                </span>
            </p>
        </div>
    );
}

export default Product;
