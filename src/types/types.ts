type CategoryBrand = {
    id: number;
    img: string;
  };
  
  type CategoryShoes = {
    categorybrand: CategoryBrand[];
  };
  
  type Category = {
    id: number;
    title: string;
    image: string;
    link: string;
  };
  
  type StoreData = {
    category: Category[];
  };
  