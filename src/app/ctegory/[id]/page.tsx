import React from 'react'
import Link from 'next/link';
import * as Cicon from "react-icons/ci";
import { BiSort } from "react-icons/bi";
import Product from '@/components/product/Product';
import Filter from '@/components/filter/Filter';
import { Category } from '@/components/homeComponents/showCases/showCaseCategories/ShowCaseCategories';

async function page({props}) {
    let arr: Category[] = [];

    try {
        const result = await fetch("http://localhost:3004/category");
        if (!result.ok) throw new Error("Failed to fetch data");
        arr = await result.json() as Category[];
    } catch (error) {
        console.error("Error fetching data:", error);
    }

    const products = Array(16).fill(null);

    return (
        <div className='container my-5'>
            <p className='font-black text-2xl text-center'>لباس های دخترانه طرح دار </p>
            <p className='text-center text-zinc-500 text-sm mt-5 px-5'>
                فرقی نمی‌کند به دنبال یک لباس مهمانی، لباس‌های هوشمند برای مدرسه یا چیزی راحت برای آخر هفته باشید، جدیدترین لباس‌های دخترانه طراحان را کشف کنید.
            </p>

            <div className='w-full xl:w-3/4 px-5 lg:px-0 m-auto grid grid-cols-6 gap-5 mt-10'>
                {arr.length > 0 && arr[0]?.categoryshoes?.map((item, index) => (
                    <Link href="/" key={index} className='col-span-3 md:col-span-2 lg:col-span-1'>
                        <img className='w-full rounded' src={item.img} alt="" />
                        <p className='text-center font-black text-sm mt-3'>نام برند</p>
                    </Link>
                ))}
            </div>

            <div dir='ltr' className='w-full mt-10 flex md:justify-normal justify-around'>
                <div className="relative">
                    <select className="bg-white border cursor-pointer text-gray-700 text-sm rounded pl-10 pr-4 h-10 focus:outline-none shadow-red-500 appearance-none w-full">
                        <option value="" disabled>مرتب سازی بر اساس</option>
                        <option value="most_popular">پیشفرض</option>
                        <option value="most_popular">محبوب ترین</option>
                        <option value="most_expensive">گران ترین</option>
                        <option value="cheapest">ارزان ترین</option>
                        <option value="latest">جدید ترین</option>
                    </select>
                    <BiSort className="absolute left-3 top-2.5 text-gray-700 text-lg pointer-events-none" />
                </div>

                <button className='bg-white border flex items-center text-gray-700 rounded text-sm px-5 md:ml-5 shadow-red-500'>
                    <Cicon.CiMenuFries className='text-lg text-gray-700 mr-3' />
                    مخفی کردن فیلتر ها
                </button>
            </div>

            <div className='w-full mt-5 grid grid-cols-6 gap-5'>
                <div className='lg:col-span-2 lg:block hidden'>
                    <div className='w-3/4'>
                        <p className='font-black text-lg border-b pb-5'>فیلتر ها</p>
                        <Filter title='تخفیف %'>
                            {["تا 30%", "تا 60%", "تا 90%"].map((text, i) => (
                                <Link key={i} href="" className="w-full block py-3 border-b text-gray-500 font-thin border-gray-100 hover:text-black">
                                    {text}
                                </Link>
                            ))}
                        </Filter>
                    </div>
                </div>

                <div className='col-span-6 lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 lg:px-0 md:px-0 px-5'>
                    {products.map((_, index) => (
                        <Product 
                            key={index}
                            sizes={[3, 6, 3, 7, 3, 8, 5, 3, 7, 3, 8, 5, 3, 7, 3, 8, 5]}
                            title='لباس برفی بچه گانه صورتی'
                            designer='نام برند'
                            discount={5400000}
                            price={3500000}
                            image='https://cdn.childrensalon.com/media/catalog/product/cache/0/small_image/512x512/9df78eab33525d08d6e5fb8d27136e95/a/b/abel-lula-girls-beige-fur-trim-hooded-puffer-coat-577829-a5f539156ddfe175a91a8c421fe71eff57ddb790.jpg' 
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default page;
