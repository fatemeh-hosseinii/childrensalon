import Link from "next/link"

const CommunicateShop = () => {
    const imgCommunicate={
        communicate:[
            {
                id:1,
                image:"https://cdn.childrensalon.com/media/cms/r/e/reviews-9sznmim3jnk0kwswwk0gsgkwo-9sznmim3jnk0kwswwk0gsgkwo.svg",
                description:"به لیست علاقه مندی های خود و آخرین موارد ورودی در برنامه ما دسترسی داشته باشید. همچنین برای اندروید موجود است.",
                title:"برنامه را دانلود کنید"
            },
            {
                id:2,
                image:"https://cdn.childrensalon.com/media/cms/c/a/carbon-offset-icon-1-7mqwxvtr8z8c80cc0o8k4k4ko.svg",
                description:"به لیست علاقه مندی های خود و آخرین موارد ورودی در برنامه ما دسترسی داشته باشید. همچنین برای اندروید موجود است.",
                title:"بیشتر بدانید"  
            },
            {
                id:3,
                image:"https://cdn.childrensalon.com/media/cms/c/u/customer-service-icon-a75k764xh08c8ow8ck4ks0004.svg",
                description:"به لیست علاقه مندی های خود و آخرین موارد ورودی در برنامه ما دسترسی داشته باشید. همچنین برای اندروید موجود است.",
                title:"بیشتر بدانید"
            },
            {
                id:4,
                image:"https://cdn.childrensalon.com/media/cms/f/a/family-oo35yg503zkoow4sckws4cgc-oo35yg503zkoow4sckws4cgc.svg",
                description:"به لیست علاقه مندی های خود و آخرین موارد ورودی در برنامه ما دسترسی داشته باشید. همچنین برای اندروید موجود است.",
                title:"تحویل و مرجوعی"
            }
        ]
    }
    return ( <>
    <div className=" lg:flex hidden flex-col justify-around items-center w-[100%] mt-20 ">
        <h2 className="text-[23px] font-bold ">از آشنایی با شما خوشبختم ...</h2>
        <div className="container w-[90%] mt-7  flex flex-row justify-around items-center">
            {
              imgCommunicate.communicate.map((elem)=>{
                return(
                    <div className="flex flex-col justify-center items-center  w-[22%]">
                        <img src={elem.image} alt="image" className="w-[20%] "/>
                        <div className="w-[80%]  text-center p-2">
                            <p className="text-[12px] ">{elem.description}</p>

                        </div>
                        <Link href="" className=" border-b-[1px] border-black mt-3 ">
                            <p className="text-[13px]">
                                {elem.title}
                            </p>
                           

                        </Link>
                    </div> 
                )
              })  
            }

        </div>
    </div>
    </> );
}
 
export default CommunicateShop;