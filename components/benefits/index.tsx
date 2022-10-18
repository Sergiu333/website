import Image from "next/image";

const Benefits = () => {

    const benefit = [
        {
            src: "/Create.png",
            alt: "Create",
            title: "Machine learning",
            subtitle: "At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium voluptatum ipsa quae ab illo."
        },
        {
            src: "/key.png",
            alt: "key",
            title: "Access control",
            subtitle: "At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium voluptatum ipsa quae ab illo."
        }
    ]

    const benefitTwo = [
        {
            src: "/graph.png",
            alt: "Graph",
            title: "Embed analytics",
            subtitle: "At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium voluptatum ipsa quae ab illo."
        },
        {
            src: "/diagram.png",
            alt: "Diagram",
            title: "Data analytics",
            subtitle: "At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium voluptatum ipsa quae ab illo."
        }
    ]

    return (
        <div className="bg-[#F1F6FA] pb-[120px]">
            <div className="container mx-auto w-[1110px] flex flex-row gap-[30px]">
                <div className="grid content-center">
                    <div className="Headline_2_ExtraBold text-[#292D33]">
                        The benefits of Ensome
                    </div>
                    <div className="Paragraph_1_Regular text-[#9497A1] w-[540px]">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                        laudantium,
                        totam
                        rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                        sunt
                        explicabo.
                    </div>
                </div>
                <div className="w-[540px] h-[582px] py-[120px] flex flex-row">
                    <div className="flex flex-col gap-[30px]">
                        {benefit.map(({src, alt, title, subtitle}) => {
                            return (

                                <div className="bg-white p-[25px] flex flex-col rounded-md">
                                    <div>
                                        <Image
                                            src={src}
                                            alt={alt}
                                            width={36}
                                            height={36}
                                        />
                                    </div>
                                    <div className="Headline_5_Bold">
                                        {title}
                                    </div>
                                    <div className="Paragraph_3_Regular">
                                        {subtitle}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="w-[540px] h-[582px] py-[120px] flex flex-row ml-[30px] mt-[56px]">
                    <div className="flex flex-col gap-[30px]">
                        {benefitTwo.map(({src, alt, title, subtitle}) => {
                            return (
                                <div className="bg-white p-[25px] flex flex-col rounded-md">
                                    <div>
                                        <Image
                                            src={src}
                                            alt={alt}
                                            width={36}
                                            height={36}
                                        />
                                    </div>
                                    <div className="Headline_5_Bold">
                                        {title}
                                    </div>
                                    <div className="Paragraph_3_Regular">
                                        {subtitle}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Benefits;