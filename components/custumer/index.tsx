import Image from "next/image";
import Link from "next/link";

const Custumer = () => {
    return (
        <div className="container mx-auto w-[1110px] flex flex-row gap-[30px] py-[120px]">
            <div className="flex flex-col gap-[60px] w-[633px]">
                <div className="flex flex-col gap-[30px]">
                    <div className="Headline_3_ExtraBold text-black">
                        Customer
                    </div>
                    <div className="Paragraph_2_Regular text-gray">
                        Donec tincidunt tempor quam, non mollis quam finibus nec. Quisque finibus consequat felis vel
                        pretium. Aliquam gravida nisi vel convallis ultricies. Integer ante sapien, consequat et dolor
                        vel.
                    </div>
                    <div className="rounded-md">
                        <Image
                            src="/mens.jpg"
                            alt="logo"
                            width={633}
                            height={290}
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-[30px]">
                    <div className="Headline_3_ExtraBold text-black">
                        Challenge
                    </div>
                    <div className="Paragraph_2_Regular text-gray">
                        Donec tincidunt tempor quam, non mollis quam finibus nec. Quisque finibus consequat felis vel
                        pretium. Aliquam gravida nisi vel convallis ultricies. Integer ante sapien, consequat et dolor
                        vel. Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit,
                        tincidunt aliquam ligula id, lacinia auctor orci.
                    </div>
                </div>
                <div className="flex flex-col gap-[30px]">
                    <div className="text-black Headline_3_ExtraBold">
                        Solution
                    </div>
                    <div className="text-gray Paragraph_2_Regular">
                        Donec tincidunt tempor quam, non mollis quam finibus nec. Quisque finibus consequat felis vel
                        pretium. Aliquam gravida nisi vel convallis ultricies. Integer ante sapien, consequat et dolor
                        vel.
                    </div>
                    <div className={"flex flex-row gap-[30px]"}>
                        <div className={"rounded-md"}>
                            <Image
                                src="/man_project_maket.jpg"
                                alt="logo"
                                width={350}
                                height={160}
                            />
                        </div>
                        <div className="flex flex-col gap-[15px]">
                            <div className="flex flex-row gap-[7px]">
                                <div>
                                    <Image
                                        src="/tick.png"
                                        alt="logo"
                                        width={17}
                                        height={12}
                                    />
                                </div>
                                <div className="Paragraph_2_Regular text-black">Hid mobile access</div>
                            </div>

                            <div className="flex flex-row gap-[7px]">
                                <div>
                                    <Image
                                        src="/tick.png"
                                        alt="logo"
                                        width={17}
                                        height={12}
                                    />
                                </div>
                                <div className="Paragraph_2_Regular text-black">Location services</div>
                            </div>

                            <div className="flex flex-row gap-[7px]">
                                <div>
                                    <Image
                                        src="/tick.png"
                                        alt="logo"
                                        width={17}
                                        height={12}
                                    />
                                </div>
                                <div className="Paragraph_2_Regular text-black">Visitor management</div>
                            </div>

                            <div className="flex flex-row gap-[7px]">
                                <div>
                                    <Image
                                        src="/tick.png"
                                        alt="logo"
                                        width={17}
                                        height={12}
                                    />
                                </div>
                                <div className="Paragraph_2_Regular text-black">Visitor management</div>
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-col gap-[30px]">
                        <div className="text-black Headline_3_ExtraBold">
                            Results
                        </div>
                        <div className="text-gray Paragraph_2_Regular">
                            Donec tincidunt tempor quam, non mollis quam finibus nec. Quisque finibus consequat felis
                            vel pretium. Aliquam gravida nisi vel convallis ultricies. Integer ante sapien, consequat et
                            dolor vel. Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus. Integer enim
                            elit, tincidunt aliquam ligula id, lacinia auctor orci.
                        </div>
                    </div>
                    <div className="flex flex-col gap-[30px]">
                        <div className="text-black Headline_3_ExtraBold">
                            Technologies
                        </div>
                        <div className="text-gray Paragraph_2_Regular">
                            Donec tincidunt tempor quam, non mollis quam finibus nec. Quisque finibus consequat felis
                            vel pretium. Aliquam gravida nisi vel convallis ultricies. Integer ante sapien, consequat et
                            dolor vel.
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-[60px]">
                <div className="flex flex-row h-[54px]">
                    <input
                        className="bg-white border border-[#9497A1] pl-[25px] py-[15px] rounded-l-md text-black w-[320px]"
                        type="text"
                        placeholder="Your email"/>
                    <Link href="/">
                        <a>
                            <button className="bg-primary w-[125px] h-[54px] text-white rounded-r-md">Send</button>
                        </a>
                    </Link>
                </div>
                <div className="text-black Headline_4_Bold">
                    Services
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                    <select className="text-black py-4 appearance-none">
                        <option selected>Machine learning</option>
                        <option>Machine learning</option>
                        <option>Machine learning</option>
                        <option>Machine learning</option>
                    </select>
                    <div>
                        <Image
                            src="/chevron_right.png"
                            alt="logo"
                            width={6.5}
                            height={12}
                        />
                    </div>
                </div>
                <hr className="text-gray"/>
            </div>
        </div>
    );
}

export default Custumer;

