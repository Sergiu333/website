import React from "react";
import Image from "next/image";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import Link from 'next/link'

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});

const testimonials = [
    {
        src: "/blog_1.jpg",
        date: "22 June 2022",
        title: "ISO 13485 compliance of medical devices",
        description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure..."
    },
    {
        src: "/blog_2.jpg",
        date: "22 June 2022",
        title: "Business analysis helps you in finance",
        description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure..."
    },
    {
        src: "/blog_3.jpg",
        date: "22 June 2022",
        title: "5 web portal examples your business can learn from",
        description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure..."
    }


]

const OurBlog = () => {
    return (
        <div className="container mx-auto w-[1110px] mt-[120px] mb-[100px]">
            <div className="text-[#292D33] Headline_2_ExtraBold mb-[50px]">Our Blog</div>
            <div className=" flex flex-row gap-[30x]">
                <OwlCarousel
                    autoplay
                    // loop={true}
                    dots
                    nav={true}
                    navText={[
                        "<div class='back'><img src='/left_arrow.svg' alt=''></div>",
                        "<div class='next'><img src='/right_arrow.svg' alt=''></div>"
                    ]}
                >
                    {testimonials.map(({src, date, title, description}) => {
                        return (
                            <div className="p-[10px] flec flex-row gap-[30px]">
                                <div className="flex flex-col gap-5">
                                    <Image
                                        src={src}
                                        alt="blog"
                                        width={350}
                                        height={200}
                                        className="rounded-md"
                                    />
                                    <div className="flex flex-col gap-3">
                                        <div className="text-[#9497A1] Paragraph_3_Regular">
                                            {date}
                                        </div>
                                        <div className="text-[#292D33] /* Headline_4_Bold */">
                                            {title}
                                        </div>
                                        <div className="text-[#9497A1] Paragraph_2_Regular">
                                            {description}
                                        </div>
                                        <div className="flex flex-row Headline_7_SemiBold text-primary gap-[7px]">
                                            Read more
                                            <Link href="/">
                                                <a>
                                                    <div>
                                                        <Image
                                                            src="/left-arrow.png"
                                                            alt="blog"
                                                            width={14}
                                                            height={7.5}
                                                            className="rounded-md"
                                                        />
                                                    </div>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                    {testimonials.map(({src, date, title, description}) => {
                        return (
                            <div className="p-[10px] flec flex-row gap-[30px]">
                                <div className="flex flex-col gap-5">
                                    <Image
                                        src={src}
                                        alt="blog"
                                        width={350}
                                        height={200}
                                        className="rounded-md"
                                    />
                                    <div className="flex flex-col gap-3">
                                        <div className="text-[#9497A1] Paragraph_3_Regular">
                                            {date}
                                        </div>
                                        <div className="text-[#292D33] /* Headline_4_Bold */">
                                            {title}
                                        </div>
                                        <div className="text-[#9497A1] Paragraph_2_Regular">
                                            {description}
                                        </div>
                                        <div className="flex flex-row Headline_7_SemiBold text-primary gap-[7px]">
                                            Read more
                                            <Link href="/">
                                                <a>
                                                    <div>
                                                        <Image
                                                            src="/left-arrow.png"
                                                            alt="blog"
                                                            width={14}
                                                            height={7.5}
                                                            className="rounded-md"
                                                        />
                                                    </div>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </OwlCarousel>
            </div>
        </div>
    )
}

export default OurBlog;
