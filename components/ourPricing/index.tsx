import Image from "next/image";

const packs = [
    {
        type: "Free trial",
        src: "/tick.png",
        srcInverted: "/tick-inverted.png",
        price: "$00",
        options: [
            {
                item: "For small teams – 5 users",
            },
            {
                item: "Community support"
            },

        ]
    },
    {
        type: "Lite",
        src: "/tick.png",
        srcInverted: "/tick-inverted.png",
        price: "$00",
        options: [
            {
                item: "For small teams – 15 users",
            },
            {
                item: "Individual support"
            },
            {
                item: "Individual data – 60GB"
            }
        ]
    },
    {
        type: "Basic",
        src: "/tick.png",
        srcInverted: "/tick-inverted.png",
        price: "$00",
        options: [
            {
                item: "For big teams – 30 users"
            },
            {
                item: "Individual support"
            },
            {
                item: "Individual data – 120GB"
            },
            {
                item: "Advanced permissions"
            }
        ]
    },
    {
        type: "For enterprises",
        src: "/tick.png",
        srcInverted: "/tick-inverted.png",
        price: "Custom",
        options: [
            {
                item: "Unlimited team members"
            },
            {
                item: "Individual support"
            },
            {
                item: "Unlimited Individual data"
            },
            {
                item: "Advanced permissions"
            },
            {
                item: "Data history"
            },
            {
                item: "Audit log"
            },
            {
                item: "All functions included"
            }
        ]
    }
]

const OurPricing = () => {
    return (
        <div className="container mx-auto w-[1110px] mb-[100px]">
            <div className="text-[#292D33] Headline_2_ExtraBold mt-[120px] mb-[50px]">Our pricing</div>
            <div className="flex flex-row gap-[30px]">
                {packs.map(({type, src,srcInverted, price, options}) => {
                    return (
                        <div className="shadow-card-3 flex flex-col p-2.5 w-[255px] rounded-md group hover:bg-[#185CFF]">
                            <div className="text-[#292D33] Headline_6_Bold pb-4 group-hover:text-white">{type}</div>
                            <div className="flex flex-row pb-[30px]">
                                <div className="text-[#292D33] text-[26px] font-extrabold leading-10 w-full group-hover:text-white">{price}</div>
                                <div className="flex flex-row gap-5">
                                    <div
                                        className="bg-[#185CFF] py-1 px-2.5 text-white rounded-md Headline_7_SemiBold group-hover:bg-white group-hover:text-[#185CFF]">Mo
                                    </div>
                                    <div
                                        className="bg-white py-1 px-2.5 border border-[#185CFF] group-hover:border-white text-[#185CFF] rounded-md Headline_7_SemiBold group-hover:text-white group-hover:bg-[#185CFF]">Yr
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#185CFF] rounded-md py-2.5 text-center Headline_7_SemiBold text-white group-hover:text-[#185CFF] group-hover:bg-white">
                                Choose plan
                            </div>
                            {options.map(({item}, index) => {
                                return (
                                    <div className="flex flex-row gap-[7px] pt-[30px]" key={index}>
                                        <div className="block group-hover:hidden">
                                            <Image
                                                src={src}
                                                alt="tick"
                                                width={17}
                                                height={12}
                                            />
                                        </div>
                                        <div className="hidden group-hover:block">
                                            <Image
                                                src={srcInverted}
                                                alt="tick"
                                                width={17}
                                                height={12}
                                            />
                                        </div>
                                        <div className="text-[#292D33] Paragraph_3_Regular group-hover:text-white">
                                            {item}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default OurPricing;