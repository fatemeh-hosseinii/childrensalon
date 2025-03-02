import Container from "@/components/container/Container";
import Link from "next/link";

interface BannerItem {
    id: number;
    image: string;
}

const BannerOne = () => {
    const BannerOne = {
        BannerFirst: [
            {
                id: 1,
                image: "https://cdn.childrensalon.com/media/cms/cache/1302x403/t/r/trend-banner-desktop-2-3bek45xfg6ckkk80c88k0ckso.webp",
            }
        ],
    };

    const BannerRes: BannerItem[] = [
        {
            id: 1,
            image: "https://cdn.childrensalon.com/media/cms/cache/750x800/t/r/trend-banner-mobile-1-2szfhr0hcxmows4g84cscskgs.webp"
        }
    ];

    return (
        <>
            <Container>
                <div className="md:flex hidden flex-row justify-center items-center">
                    {BannerOne.BannerFirst.map((elem: BannerItem) => (
                        <div key={elem.id} className="relative flex flex-row justify-center items-center w-[100%]">
                            <img className="rounded-xl" src={elem.image} alt="Banner Image" />
                            <div className="absolute lg:w-[30%] md:top-15 md:right-24 md:p-2 md:w-[35%]  lg:top-30 lg:right-32 xl:top-40 xl:right-40 lg:p-5 bg-[white] bg-opacity-100 text-[black]">
                                <h2 className="xl:text-[18px] text-[13px] font-bold">جدیدترین محصولات</h2>
                                <p className="xl:text-[14px] text-[12px] mt-3">
                                    آخرین مجموعه‌های طراحان ما وارد شده است! بیایید و ببینید چه چیزهای جدیدی داریم.
                                </p>
                                <div className="mt-4">
                                    <Link className="underline text-black underline-offset-8 text-[14px]" href="#">
                                        همین حالا خرید کنید
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>







                <div className="flex md:hidden flex-row justify-center items-center">
                    {BannerRes.map((elem: BannerItem) => (
                        <div key={elem.id} className="relative flex flex-row justify-center items-center w-[100%]">
                            <img className="rounded-xl" src={elem.image} alt="Banner Image" />
                            <div className="absolute w-[60%] p-4 top-[13rem] sm:top-[20rem] bg-[white] bg-opacity-100 text-[black]">
                                <h2 className="text-[14px] font-bold">جدیدترین محصولات</h2>
                                <p className="text-[12px] mt-3">
                                    آخرین مجموعه‌های طراحان ما وارد شده است! بیایید و ببینید چه چیزهای جدیدی داریم.
                                </p>
                                <div className="mt-4">
                                    <Link className="underline text-black underline-offset-8" href="#">
                                        همین حالا خرید کنید
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>

        </>
    );
};

export default BannerOne;
