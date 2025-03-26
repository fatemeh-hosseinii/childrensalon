import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import * as Icon from "react-icons/ci";
interface MenuItem {
  id: number;
  title: string;
  link:string;
}

interface NavbarMenuType {
  Menu: MenuItem[];
}

const NavbarMenu: React.FC = () => {
  const pathname=usePathname()
  const navbarMenu: NavbarMenuType = {
    Menu: [
      {
        link:"/store",
        id: 1,
        title: "جدیدترین محصولات",
        
      },
      {
        link:"",
        id: 2,
        title: "کودک",
      },
      {
        link:"",
        id: 3,
        title: "دختر",
      },
      {
        link:"",
        id: 4,
        title: "پسر",
      },
      {
        link:"",
        id: 5,
        title: "کفش",
      },
      {
        link:"",
        id: 6,
        title: "برندها",
      },
      {
        link:"",
        id: 7,
        title: "بازدید از شعبه‌ها",
      },
      {
        link:"",
        id: 8,
        title: "مراسم ها",
      },
      {
        link:"",
        id: 9,
        title: "فروش ویژه",
      },
      {
        link:"",
        id: 10,
        title: "برندها",
      },
    ],
  };

  return (
    <>
        <div className=" w-[100%] flex flex-row  items-center mt-3">
            
            <div className="group xl:flex hidden flex-row justify-end cursor-pointer w-[13%] ">
                <div className="flex flex-row border-b-[1px] w-[100%] border-[black]">
                    <Icon.CiSearch 
                    size={32} 
                    className="text-black group-hover:text-[#FFBB3A] transition-all duration-500 ease-in-out"
                    />
                    <p className="text-[13px] mt-2 text-black group-hover:text-gray-500 transition-all duration-500 ease-in-out">
                        جستوجو
                    </p>
                </div>
            </div>    
            <ul className="xl:w-[75%] w-[85%]  flex flex-row gap-4 mx-auto  justify-center text-center ">
                {/* نمایش فقط سه آیتم برای سایز lg و پایین‌تر */}
                {navbarMenu.Menu.slice(0, 3).map((item) => (
                    <li
                        key={item.id}
                        className=" p-2 xl:h-[6vh] hover:text-[#858581] hover:border-b-4 hover:border-[#0b0b09] flex lg:hidden"
                    >
                        <Link href={item.link} className={`block text-[12px] ${pathname===item.link ?"hover:border-b-4 hover:border-[#0b0b09]": ""} `}>
                            {item.title}
                        </Link>
                    </li>
                ))}

                {/* نمایش همه آیتم‌ها فقط در سایزهای بزرگ‌تر */}
                {navbarMenu.Menu.map((item) => (
                    <li
                        key={item.id}
                        className=" p-2 xl:h-[6vh] hover:text-[#858581] hover:border-b-4 hover:border-[#0b0b09] hidden lg:flex"
                    >
                        <Link href={item.link}  className={`block text-[12px] xl:text-[14px] ${pathname===item.link ?"text-[#858581]": ""} `}>
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="xl:flex justify-end hidden w-[9%] ">
                <Icon.CiGlobe  size={30}/>

            </div>
           
        </div>
        
    </>
  );
};

export default NavbarMenu;
