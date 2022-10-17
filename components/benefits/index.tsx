import Image from "next/image";

const Benefits = () => {
    return (
        <div className="bg-[#F1F6FA]">
            <div className="container mx-auto w-[1110px] flex flex-row">
                <div className="grid content-center">
                    <div className="Headline_2_ExtraBold text-[#292D33]">
                        The benefits of Ensome
                    </div>
                    <div className="Paragraph_1_Regular text-[#9497A1]">
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
                        <div className="bg-white p-[25px] flex flex-col rounded-md">
                            <div>
                                <Image
                                    src="/Create.png"
                                    alt="Create"
                                    width={36}
                                    height={36}
                                />
                            </div>
                            <div className="Headline_5_Bold">Machine learning</div>
                            <div className="Paragraph_3_Regular">
                                At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium
                                voluptatum ipsa quae ab illo.
                            </div>
                        </div>
                        <div className="bg-white p-[25px] flex flex-col rounded-md">
                            <div>
                                <Image
                                    src="/Create.png"
                                    alt="Create"
                                    width={36}
                                    height={36}
                                />
                            </div>
                            <div className="Headline_5_Bold">Access control</div>
                            <div className="Paragraph_3_Regular">
                                At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium
                                voluptatum ipsa quae ab illo.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[540px] h-[582px] py-[120px] flex flex-row ml-[30px] mt-[56px]">
                    <div className="flex flex-col gap-[30px]">
                        <div className="bg-white p-[25px] flex flex-col rounded-md">
                            <div>
                                <Image
                                    src="/Create.png"
                                    alt="Create"
                                    width={36}
                                    height={36}
                                />
                            </div>
                            <div className="Headline_5_Bold">Embed analytics</div>
                            <div className="Paragraph_3_Regular">
                                At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium
                                voluptatum ipsa quae ab illo.
                            </div>
                        </div>
                        <div className="bg-white p-[25px] flex flex-col rounded-md">
                            <div>
                                <Image
                                    src="/Create.png"
                                    alt="Create"
                                    width={36}
                                    height={36}
                                />
                            </div>
                            <div className="Headline_5_Bold">Data analytics</div>
                            <div className="Paragraph_3_Regular">
                                At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium
                                voluptatum ipsa quae ab illo.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Benefits;