
import BannerOne from "@/components/homeComponents/banner/BannerOne";
import DesignerBrand from "@/components/homeComponents/designerBrand/DesignerBrand";
import Slider from "@/components/homeComponents/slider/Slider";
import Image from "next/image";
import ShowCaseCategories from "@/components/homeComponents/showCases/showCaseCategories/ShowCaseCategories";
import ProductOne from "@/components/homeComponents/showCases/showCasesProductes/showCaseProductOne/ProductOne";
import BannerTwo from "@/components/homeComponents/banner/BannerTwo";
import ProductTwo from "@/components/homeComponents/showCases/showCasesProductes/showCaseProductTwo/ProductTwo";
import CommunicateShop from "@/components/homeComponents/communications/CommunicateShop";
import Article from "@/components/homeComponents/articles/Article";
import Information from "@/components/homeComponents/information/Information";
import InformationTwo from "@/components/homeComponents/information/informationTwo/InformationTwo";
import ProductOneRes from "@/components/homeComponents/showCases/showCasesProductes/showCaseProductOne/ProductOneRes";
import ProductTwoRes from "@/components/homeComponents/showCases/showCasesProductes/showCaseProductTwo/ProductTwoRes";
import CommunicatRes from "@/components/homeComponents/communications/CommunicatRes";
// import ArticleRea from "@/components/homeComponents/articles/ArticleRes";

export default function Home() {
  return (
    <div className="">
      
     <Slider/>
     <ShowCaseCategories/>
     <DesignerBrand/>
     <BannerOne/>
     <ProductOne/>
     <ProductOneRes/>
     <BannerTwo/>
     <ProductTwo/>
     <ProductTwoRes/>
     <CommunicateShop/>
     <CommunicatRes/>
     <Article/>
     {/* <ArticleRea/> */}
     <Information/>
     <InformationTwo/>
    </div>
  );
}
