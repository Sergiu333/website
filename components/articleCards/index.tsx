import Image from "next/image";

const article = [
    {
        src: "/article_1.jpg",
        date: "22 June 2020",
        title: "Sed ut perspiciatis unde omnis at vero blanditils",
        description: " At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure..."
    },
    {
        src: "/article_3.jpg",
        date: "22 June 2020",
        title: "2022 software development trends explained with benefits",
        description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure..."
    },
    {
        src: "/article_4.jpg",
        date: "22 June 2020",
        title: "Data lake vs. data warehouse: why you don’t have to choose",
        description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure..."
    },
    {
        src: "/article_5.jpg",
        date: "22 June 2020",
        title: "40 stats and real-life examples of how companies use big data",
        description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure..."
    },
    {
        src: "/article_7.jpg",
        date: "22 June 2020",
        title: "Staffing software: key capabilities and top products",
        description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure..."
    },
    {
        src: "/article_8.jpg",
        date: "22 June 2020",
        title: "5 web portal examples your business can learn from",
        description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure..."
    }
]
const ArticleCards = () => {
    return (
        <div className="container mx-auto w-[1110px] my-[120px]">
            <div className="grid grid-cols-2 gap-[30px]">
                {article.map(({src, date, title, description}) => {
                    return (
                        <div className="flex flex-col gap-[30px] shadow-card-3 rounded-md">
                            <div className="rounded-md">
                                <Image
                                    src={src}
                                    alt="image article"
                                    width={540}
                                    height={300}
                                />
                            </div>
                            <div className="flex flex-col gap-[17px] px-[35px]">
                                <div className="text-gray Paragraph_3_Regular">
                                    {date}
                                </div>
                                <div className="text-black Headline_4_Bold">
                                    {<title></title>}
                                </div>
                                <div className="text-gray Paragraph_2_Regular">
                                    {description}
                                </div>
                                <div
                                    className="flex flex-row gap-[15px] text-primary font-extrabold text-sm leading-6 pb-[30px]">
                                    <div className="border border-[#F1F6FA] px-[11px] py-[3px] rounded-md">
                                        App
                                    </div>
                                    <div className="border border-[#F1F6FA] px-[11px] py-[3px] rounded-md">
                                        CIO
                                    </div>
                                    <div className="border border-[#F1F6FA] px-[11px] py-[3px] rounded-md ">
                                        Future
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}

            </div>
            <div className="flex justify-center">
                <button className="mt-[50px] bg-primary px-[25.5px] py-2.5 rounded-md text-white Headline_7_SemiBold">
                    More articles
                </button>
            </div>
        </div>
    );
}

export default ArticleCards;
