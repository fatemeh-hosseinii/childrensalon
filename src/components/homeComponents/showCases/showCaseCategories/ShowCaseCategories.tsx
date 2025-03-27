"use client";
import React, { useEffect, useState } from "react";
import Container from "@/components/container/Container";
import Link from "next/link";
import axios from "axios";

interface Category {
  id: number;
  title: string;
  image: string;
  slug: string;
}

const ShowCaseCategories: React.FC = () => {
  const [data, setData] = useState<Category[]>([]); // مقدار اولیه قرار داده شد

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3004/category"); // `await` اضافه شد
        setData(res.data); // ذخیره داده در state
      } catch (error) {
        console.error("خطا در بارگذاری داده‌ها: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <div className="md:p-0 p-5">
        <ul className="grid grid-cols-2 sm:flex sm:flex-row justify-center items-center mt-3 gap-3">
          {data.map((category) => (
            <li key={category.id} className="flex flex-col items-center">
              <Link href={`/ctegory/${category.id}`}  className="hover:text-gray-500">
                <img className="w-full object-cover" src={category.image} alt={category.title} />
                <p className="text-center mt-3">{category.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default ShowCaseCategories;
