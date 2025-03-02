import Container from "@/components/container/Container";
import InfoTwoItem from "./InfoTwoItem";

const InformationTwo = () => {
    const Info=[
        {
            id:"1",
            name:"مایکل",
            city:"انگلستان",
            comment:"می‌خواهم از این فرصت استفاده کنم و بگویم که شما چه خدمات شگفت‌انگیزی برای مشتریان دارید. من سالن کودکان را به دوستان و خانواده توصیه می کنم و مطمئناً از شما خرید خواهم کرد",
        },
        {
            id:"2",
            name:"آنا",
            city:"آمریکا",
            comment:" سفارش من فقط در دو روز رسید، حتی اگر تمام راه را از بریتانیا آمده بود. Childsalon همچنین فردی دارد که می تواند در اندازه گیری کمک کند، بنابراین ترجمه آن به معادل های ایالات متحده آسان است.",
        },
        {
            id:"3",
            name:"آنا",
            city:"آمریکا",
            comment:" سفارش من فقط در دو روز رسید، حتی اگر تمام راه را از بریتانیا آمده بود. Childsalon همچنین فردی دارد که می تواند در اندازه گیری کمک کند، بنابراین ترجمه آن به معادل های ایالات متحده آسان است.",
        }
    ]
    return ( <>
    <Container>
        <div className="w-[100%] flex flex-col justify-center items-center mt-20 gap-4 bg-[pink]">
            <div className="">
                <img src="/assets/media/flowers.png" alt="" />
            </div>
            <p className="text-[20px] font-bold">ما دوست داریم از شما بشنویم. . .</p>
            <div className=" flex flex-row justify-between w-[100%] ">
                {
                    Info.map((elem)=>{
                        return(
                            
                             <InfoTwoItem item={elem}/>

                            

                            

                        )
                    })
                }

            </div>
        </div>

    </Container>
    </> );
}
 
export default InformationTwo;