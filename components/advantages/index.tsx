import Image from "next/image";


const card = [
    {
        src: "/create_border.png",
        title: "Machine learning",
        subtitle: " At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores."
    },
    {
        src: "/diagram_border.png",
        title: "Embed analytics",
        subtitle: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores."
    },
    {
        src: "/key_border.png",
        title: "Access control",
        subtitle: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores."
    }
]
const Advantages = () => {
    return (
        <div className="container mx-auto w-[1110px] flex flex-col mt-[120px] gap-[50px] pb-[120px]">
            <div className="flex flex-col gap-[30px] text-center">
                <div className="text-black Headline_2_ExtraBold">
                    Why people chosse Ensome?
                </div>
                <div className="text-gray Paragraph_1_Regular">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium <br/>doloremque
                    laudantium,
                    totam rem aperiam, eaque ipsa quaeab illo inventore.
                </div>
            </div>
            <div className="flex flex-row gap-[30px]">
                {card.map(({src, title, subtitle}) => {
                    return (
                        <div className="shadow-card-3 w-[350px] px-[35px]">
                            <div className="flex flex-col py-[26px] text-center justify-center">
                                <div>
                                    <Image
                                        src={src}
                                        alt="logo"
                                        width={46}
                                        height={46}
                                    />
                                </div>
                                <div className="w-[280px]">
                                    <div className="color-black Headline_4_Bold">
                                        {title}
                                    </div>
                                    <div className="text-gray Paragraph_2_Regular w-[280px]">
                                        {subtitle}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Advantages;
