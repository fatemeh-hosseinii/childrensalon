
import Container from "@/components/container/Container";
import axios from "axios";
import Link from "next/link";


 export interface Category {
  id: number;
  title: string;
  image: string;
  slug: string;
}

const ShowCaseCategories: React.FC = async() => {
    const res = await axios.get("http://localhost:3004/category"); // `await` اضافه شد
    const data =await res.data as Category[]; // `as` اضافه شد
   


  return (
    <Container>
      <div className="md:p-0 p-5">
        <ul className="grid grid-cols-2 sm:flex sm:flex-row justify-center items-center mt-3 gap-3">
          {data.map((category) => (
            <li key={category.id} className="flex flex-col items-center">
              <Link href={`/ctegory/${category.slug}`}  className="hover:text-gray-500">
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
