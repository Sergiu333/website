import Link from "next/link";
import Image from "next/image";

const logotypes = [
    {
        src: "/facebook.png",
        alt: "facebook"
    },
    {
        src: "/twitter.png",
        alt: "twitter"
    },
    {
        src: "/linkedin.png",
        alt: "linkedin"
    },
    {
        src: "/youtube.png",
        alt: "youtube"
    },
    {
        src: "/dribbble.png",
        alt: "dribbble"
    },
    {
        src: "/behance.png",
        alt: "behance"
    }

]

const footer_items = [
    {
        title: "Quick link",
        subtitle: [
            {
                item: "Home",
                link: "/"
            },
            {
                item: "Solutions",
                link: "/"
            },
            {
                item: "Blog",
                link: "/"
            },
            {
                item: "Contacts",
                link: "/"
            },
            {
                item: "Our team",
                link: "/"
            },
            {
                item: "About Us",
                link: "/"
            },
            {
                item: "Index",
                link: "/"
            },
            {
                item: "FAQ",
                link: "/"
            }
        ]
    },
    {
        title: "Service",
        subtitle: [
            {
                item: "Pages",
                link: "/"
            },
            {
                item: "Elements",
                link: "/"
            },
            {
                item: "FAQ",
                link: "/"
            },
            {
                item: "Pricing",
                link: "/"
            },
            {
                item: "Site map",
                link: "/"
            }
        ]
    },
    {
        title: "Cantact info",
        subtitle: [
            {
                item: "ensome@info.co.us",
                link: "/"
            },
            {
                item: "+1 601-201-5580",
                link: "/"
            },
            {
                item: "1642 Washington Avenue, Jackson,",
                link: "/"
            },
            {
                item: "MS, Mississippi, 39201",
                link: "/"
            }
        ]
    }
]
const Footer = () => {
    return (
        <div className="bg-[#002B4E] text-white">
            <div className="container mx-auto w-[1110px] ">
                <div className="flex flex-row py-[80px] gap-[125px]">
                    <div className="flex flex-col gap-[24px]">
                        <div className="Headline_2_ExtraBold">Subscribe to our newsletter</div>
                        <div className="Paragraph_1_Regular">Sed ut perspiciatis unde omnis iste natus error
                            sit <br/> voluptatem accusantium doloremque laudantium.
                        </div>
                    </div>
                    <div className="flex flex-row h-[54px] mt-[43px]">
                        <input className="bg-[#C9DCEC] pl-[25px] py-[15px] rounded-l-md text-black w-[320px]"
                               type="text"
                               placeholder="Your email"/>
                        <Link href="/">
                            <a>
                                <button className="bg-white w-[125px] h-[54px] text-black rounded-r-md">Send</button>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <hr className="text-[#607D94]"/>
            <div className="container mx-auto w-[1110px] mt-[50px] grid grid-cols-12">
                <div className="grid col-span-5 col-start-1">
                    <div className="flex flex-col gap-5">
                        <div>
                            <Link href="/">
                                <a>
                                    <Image
                                        src="/logo_white.png"
                                        alt="logo"
                                        width={141}
                                        height={46}
                                    />
                                </a>
                            </Link>
                        </div>
                        <div className="Paragraph_3_Regular text-gray">
                            Ut enim ad minima veniam, quis nostrum <br/> exercitationem ullam corporis
                            suscipit <br/> laboriosam, nisi ut aliquid ex ea commodi.
                        </div>
                        <div className="flex flex-row gap-[15px]">
                            {logotypes.map(({src, alt}) => {
                                return (
                                    <Link href="/">
                                        <a>
                                            <Image
                                                src={src}
                                                alt={alt}
                                                width={24}
                                                height={24}
                                            />
                                        </a>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>
                {footer_items.map(({title, subtitle}) => {
                    return (
                        <div className="grid col-span-2">
                            <div className="flex flex-col text-white mt-2.5 gap-[12px]">
                                <div className="Headline_6_Bold mb-[31px]">{title}</div>

                                {subtitle.map(({item}, index) => {
                                    return (
                                        <Link href="/">
                                            <a>
                                                <div className="Paragraph_3_Regular text-gray" key={index}>{item}</div>
                                            </a>
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
            <hr className="text-[#607D94] mt-[50px]"/>
            <div className="container mx-auto w-[1110px] flex flex-row justify-between mt-[34px] pb-[30px]">
                <div className="Paragraph_3_Regular text-blue-2">Ensome© 2022 All Rights Reserved</div>
                <div className="flex flex-row gap-[95px]">
                    <Link href="/">
                        <a>
                            <div className="Paragraph_3_Regular text-blue-2">Privacy policy</div>
                        </a>
                    </Link>
                    <Link href="/">
                        <a>
                            <div className="Paragraph_3_Regular text-blue-2">Terms of us</div>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;
