"use client"
import React, { useEffect, useState } from "react";
import Container from "@/components/container/Container";
import { CategoryData } from "@/types/types";
import Link from "next/link";

// تعریف تایپ‌ها
export interface CategoryBrand {
  id: number;
  img: string;
}

export interface CategoryShoes {
  categorybrand: CategoryBrand[];
}

export interface Category {
  id: number;
  title: string;
  image: string;
  link: string;
  categoryshoes?: CategoryShoes[];
}

export interface CategoryData {
  category: Category[];
}

const ShowCaseCategories: React.FC = () => {
  const [data, setData] = useState<CategoryData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3004/category");
        const result: CategoryData = await response.json();
        setData(result); // ذخیره داده‌ها در state
      } catch (error) {
        console.error("خطا در بارگذاری داده‌ها: ", error);
      }
    };

    fetchData();
  }, []);

  if (!data || !data.category) {
    return <div>داده‌ها بارگذاری نشدند.</div>;
  }

  return (
    <Container>
      <div className="md:p-0 p-5">
        <ul className="grid grid-cols-2 sm:flex sm:flex-row justify-center items-center mt-3 gap-3">
          {data.category.map((category) => (
            <Link href={category.link} className="hover:text-gray-500" key={category.id}>
              <li>
                <img className="w-full" src={category.image} alt={category.title} />
                <p className="text-center mt-3">{category.title}</p>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default ShowCaseCategories;
