import Container from "@/components/container/Container";
import Link from "next/link";

const Article = () => {
    const articles={
        article:[
            {
                id: 1,
                title: "جا اسکی کنیم و چه وسایلی را بسته بندی کنیم",
                link:"به سرگرمی بپیوندید",
                description:"از قله‌ها و پیتزا در ایتالیا گرفته تا سورتمه‌سواری در نروژ، راهنمای سفر و بسته‌بندی ما اینجاست تا الهام بخش اقامتگاه برفی بعدی آنها باشد.",
                image:"https://cdn.childrensalon.com/media/cms/cache/485x485/j/o/jolly-christmas-jumpers-1bwwax526tog40ssw0cksk08w-cdkam351js0k4o44w8k4cows0-5u3y20nbh1ooccwks0wwckokw-cw5o209lk9sgg4kkg84c0sogw.webp"
            },
            {
                id:2,
                title: "جا اسکی کنیم و چه وسایلی را بسته بندی کنیم",
                link:"به سرگرمی بپیوندید",
                description:"از قله‌ها و پیتزا در ایتالیا گرفته تا سورتمه‌سواری در نروژ، راهنمای سفر و بسته‌بندی ما اینجاست تا الهام بخش اقامتگاه برفی بعدی آنها باشد.",
                image:"https://cdn.childrensalon.com/media/cms/cache/485x485/j/o/jolly-christmas-jumpers-1bwwax526tog40ssw0cksk08w-bgahzl354fwccggo4k04k8ssc-8kg429h7vfs4sw40o0kckg800.webp"
            },
            {
                id:3,
                link:"به سرگرمی بپیوندید",
                title: "جا اسکی کنیم و چه وسایلی را بسته بندی کنیم",
                description:"از قله‌ها و پیتزا در ایتالیا گرفته تا سورتمه‌سواری در نروژ، راهنمای سفر و بسته‌بندی ما اینجاست تا الهام بخش اقامتگاه برفی بعدی آنها باشد.",
                image:"https://cdn.childrensalon.com/media/cms/cache/485x485/i/n/in-the-studio-with-eirene-axapxcjw2eww84gcsoc4ksg84-c9ssu5r1ijkg0g0wkkssokkg8-3jvpg4hoysu8sc484s0w4804c-ntunjphydmskcgwwkckcwk48-bfhvi4rqo7k84gcs04g8s4k00.webp"
            }
        ]
    }
    return ( <>
    <Container>

        <div className="mt-20 lg:flex hidden flex-col w-[100%] justify-around items-center">
            <div className="mt-3 p-3 w-[100%] text-center">
                <h2 className="text-[23px] font-bold ">اخرین داستان ما</h2>

            </div>
            <div className=" flex flex-row justify-between items-center">
                {
                    
                    articles.article.map((elem,index)=>{
                        return(
                            <div className="flex flex-col justify-start items-center  w-[32%] ">
                                <img src={elem.image} alt="" />
                                <div>
                                    <p className="mt-3">{elem.title}</p>
                                    <p className="mt-2 text-[12px]">{elem.description}</p>

                                </div>                            
                                <Link href="" className="w-[100%]  mt-3 flex felx-row justify-start ">
                                    <p className="border-b-[1px] border-black">  {elem.link} </p>

                                </Link>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    </Container>
    </> );
}
 
export default Article;