import Container from "@/components/container/Container";
import Link from "next/link";

export  interface ShowCaseCategoriesItem {
  id: number;
  title: string;
  image: string;
}

export interface ShowCaseCategories {
  showcase: ShowCaseCategoriesItem[];
}

const ShowCaseCategories: React.FC = () => {
  const showCategories: ShowCaseCategories = {
    showcase: [
      {
        id: 1,
        title: "فروشگاه کفش",
        image: "https://cdn.childrensalon.com/media/cms/cache/310x310/c/a/category-block-4-49bf7n7ekrc4cooo00osow4cw.webp",
        
      },
      {
        id: 2,
        title: "فروشگاه پسرانه",
        image: "https://cdn.childrensalon.com/media/cms/cache/310x310/c/a/category-block-4-49bf7n7ekrc4cooo00osow4cw.webp",
      },
      {
        id: 3,
        title: "فروشگاه دخترانه",
        image: "https://cdn.childrensalon.com/media/cms/cache/310x310/c/a/category-block-2-2og2ulvbo18gck48cggws408o-9iudp0r95z40wos48808804oo.webp",
      },
      {
        id: 4,
        title: "فروشگاه نوزاد",
        image: "https://cdn.childrensalon.com/media/cms/cache/310x310/c/a/category-block-1-4qw62496igw00gs48kok4gw8g.webp",
      },
    ],
  };

  return (
    <>
  <Container>
  
  <div className="md:p-0 p-5 ">
    <ul className="grid grid-cols-2 sm:flex sm:flex-row justify-center items-center mt-3 gap-3 hover:">
        {showCategories.showcase.map((category) => (
            <Link href="/categories" className="hover:text-gray-500" key={category.id}>
                <li className="">
                    <img className="" src={category.image} alt={category.title} />
                    <p className="text-center mt-3 ">{category.title}</p>
                </li>
            </Link>
        ))}
    </ul>
  </div>
  
  </Container>      
    </>
  );
};

export default ShowCaseCategories;