"use client";
import Link from "next/link";
import * as Icon from "react-icons/ci";
import NavbarMenu from "./NavbarMenu";
import Image from 'next/image';
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMenu = (menu: string) => {
        setOpenMenu(openMenu === menu ? null : menu);
    };

    // بستن منو هنگام کلیک بیرون یا اسکرول
    useEffect(() => {
        
        const handleOutsideClick = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setOpenMenu(null);
            }
        };

        const handleScroll = () => {
            setOpenMenu(null);
        };

        document.addEventListener("click", handleOutsideClick);
        document.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("click", handleOutsideClick);
            document.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="flex flex-col justify-around  main">
            <div className="flex flex-row justify-between w-[100%]">

                {/* آیکون‌های خرید و علاقه‌مندی */}
                <div className="cartFavorite flex flex-row  lg:gap-8 gap-4 w-[20%]">
                    <div className="mt-4">
                        <Link className=" bg-gray-600" href="">
                            <Icon.CiShoppingCart size={30} />
                        </Link>
                    </div>
                    <div className="mt-4">
                        <Link className="" href="">
                            <Icon.CiHeart size={30} />
                        </Link>
                    </div>
                  
                </div>


              
                {/* لوگو سایت */}
                <div className="logoSite flex flex-row justify-around items-center  rounded-lg ">
                   
                    <div className="xl:w-[25%] sm:w-[30%] w-[65%] md:w-[40%] lg:w-[25%]">
                        <Image
                            src="/assets/media/logo.png"
                            alt="Slider Image"
                            layout="responsive"
                            width={100}
                            height={50}
                        />
                    </div>
                </div>
                  {/* منوی کمک و ثبت‌نام */}
                  <div className="w-[20%] gap-8 xl:flex hidden flex-row justify-end">
                    <div
                        ref={menuRef}
                        onClick={() => toggleMenu("help")}
                        className=" flex flex-col items-center cursor-pointer mt-4 relative"
                    >
                        <Link href="#">
                            <Icon.CiCircleQuestion size={30} />
                        </Link>
                        <p className="text-[13px]">راهنمایی</p>

                      

                    </div>
                      {/* منوی کمک */}
                      {openMenu === "help" && (
                        <div className="absolute p-4 top-24 left-20 bg-white w-[12%] border shadow-lg box-shadow z-10 before:content-[''] before:absolute before:top-[-12%] before:left-[15%] before:-translate-x-1/2 before:border-[13px] before:border-transparent before:border-b-[blue]">
                            <ul className="bg-[red] flex flex-col gap-4">
                                <li className="text-[12px]">تحویل</li>
                                <li className="text-[12px]">تحویل</li>
                                <li className="text-[12px]">تحویل</li>
                                <li className="text-[12px]">تحویل</li>
                                <li className="text-[12px]">تحویل</li>
                                <li className="text-[12px]">تحویل</li>

                            </ul>
                        </div>
                        )}
                    <div className="flex flex-col items-center mt-4">
                        <Link href="">
                            <Icon.CiUser size={30} />
                        </Link>
                        <p className="text-[13px]">ثبت نام</p>
                    </div>
                </div>


                

              
                {/* جستجو و منو */}
                <div className="searchMenu xl:hidden flex flex-row justify-end  lg:gap-8 gap-4 w-[20%] ">
                    <div className="group cursor-pointer bg-[red] lg:block hidden mt-4">
                        <div className="flex flex-row border-b-[1px] border-[black]">
                            <Icon.CiSearch
                                size={32}
                                className="text-black group-hover:text-[#FFBB3A] transition-all duration-500 ease-in-out"
                            />
                            <p className="text-[13px] mt-2 text-black group-hover:text-gray-500 transition-all duration-500 ease-in-out">
                                جستجو
                            </p>
                        </div>
                    </div>
                    <div className="lg:hidden block mt-4 ">
                        <Link href="" className=" flex flex-row justify-center ">
                            <Icon.CiSearch size={32} />

                        </Link>
                    </div>
                    <div className="menu  mt-4">
                        <Link className="flex flex-row justify-center mt-[3px] " href="">
                            <Icon.CiMenuBurger size={25} />
                        </Link>
                    </div>
                </div>
            </div>
            <NavbarMenu />
        </div>
    );
};

export default Navbar;
