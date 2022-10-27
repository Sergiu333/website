import Image from "next/image";

const Form = () => {
    return (
        <div>
            <div className="container mx-auto w-[1110px] pt-[75px] pb-[120px]">
                <div className="flex flex-row gap-[30px]">
                    <div className="text-black font-extrabold text-[80px] leading-[88px] w-full">
                        How can we <br/> <span className="text-primary">help you?</span>
                    </div>
                    <div className="flex flex-col gap-[35px] w-full">
                        <div className="flex flex-row gap-[30px]">
                            <div className="w-full">
                                <input type="text" id="first_name"
                                       className="w-full border border-gray rounded-md pl-[25px] py-[15px] text-black Paragraph_3_SemiBold"
                                       placeholder="Your email" required/>
                            </div>
                            <div className="w-full">
                                <input type="text" id="first_name"
                                       className="w-full border border-gray rounded-md pl-[25px] py-[15px] text-black Paragraph_3_SemiBold"
                                       placeholder="Your name" required/>
                            </div>
                        </div>
                        <div>
                            <input type="text" id="first_name"
                                   className="w-full border border-gray rounded-md pl-[25px] py-[15px] text-black Paragraph_3_SemiBold"
                                   placeholder="Theme" required/>
                        </div>
                        <div>
                    <textarea id="first_name"
                              className="h-[140px] resize-none w-full border border-gray rounded-md pl-[25px] py-[15px] text-black Paragraph_3_SemiBold"
                              placeholder="Your message" required/>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end pt-5">
                    <div className="bg-primary py-2.5 px-[50px] rounded-md Headline_7_SemiBold text-white ">
                        Send
                    </div>
                </div>
                <div className="flex flex-row gap-[47px]">
                    <div className="flex flex-col gap-[5px]">
                        <div className="flex flex-row gap-3">
                            <div>
                                <Image
                                src="/mail.png"
                                alt="Image"
                                width={15}
                                height={12.5}
                                />
                            </div>
                            <div className="text-black Headline_7_SemiBold">Email</div>
                        </div>
                        <div className="text-gray Paragraph_2_Regular">
                            ensome@info.co.us
                        </div>
                    </div>
                    <div className="flex flex-col gap-[5px]">
                        <div className="flex flex-row gap-3">
                            <div>
                                <Image
                                src="/phone.png"
                                alt="Image"
                                width={12.82}
                                height={16.47}
                                />
                            </div>
                            <div className="text-black Headline_7_SemiBold">Phone</div>
                        </div>
                        <div className="text-gray Paragraph_2_Regular">
                            +1 601-201-5580
                        </div>
                    </div>
                    <div className="flex flex-col gap-[5px]">
                        <div className="flex flex-row gap-3">
                            <div>
                                <Image
                                src="/location.png"
                                alt="Image"
                                width={15}
                                height={17.48}
                                />
                            </div>
                            <div className="text-black Headline_7_SemiBold">Address</div>
                        </div>
                        <div className="text-gray Paragraph_2_Regular">
                            1642 Washington Ave, Jackson, MS
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Image
                    src="/map.jpg"
                    alt="logo"
                    width={'1920px'}
                    height={'460px'}
                    className="relative"
                />
            </div>
        </div>
    );
}

export default Form;
