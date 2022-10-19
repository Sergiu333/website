
import React from "react";
import Image from "next/image";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});

const testimonials=[
    {
        src: "/person_1.jpg",
        name: "Alex Bern",
        ceo: "CEO by PixelPerfect",
        description: "“Ut enim ad minima veniam, quis nostrum exercitationem ullam corpor suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis utem vel eum iure reprehender qui in ea voluptate velit esse quam nihil molesti consequatur, vel illum.” "
    },
    {
        src: "/person_2.jpg",
        name: "Ruben Chifundo",
        ceo: "CEO by NOX",
        description: "“Ut enim ad minima veniam, quis nostrum exercitationem ullam corpor suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis utem vel eum iure reprehender qui in ea voluptate velit esse quam nihil molesti consequatur, vel illum.” "
    },
    {
        src: "/person_3.jpg",
        name: "Tigran Nazaret",
        ceo: "Data analyst",
        description: "“Ut enim ad minima veniam, quis nostrum exercitationem ullam corpor suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis utem vel eum iure reprehender qui in ea voluptate velit esse quam nihil molesti consequatur, vel illum.” "
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
                    navText = {[
                        "<div class='back'>back</div>",
                        "<div class='next'>next</div>"
                    ]}
                >
                    {testimonials.map(({src, alt, name,ceo,  description}) => {
                        return (
                            <div className="p-[10px] flec flex-row gap-[30px]">
                                <div className="flex flex-col gap-5">
                                    <Image
                                        src="/blog_1.jpg"
                                        alt="blog"
                                        width={350}
                                        height={200}
                                        className="rounded-md"
                                    />
                                    <div className="flex flex-col gap-3">
                                        <div className="text-[#9497A1] Paragraph_3_Regular">
                                            22 June 2022
                                        </div>
                                        <div className="text-[#292D33] /* Headline_4_Bold */">
                                            ISO 13485 compliance of medical devices
                                        </div>
                                        <div className="text-[#9497A1] Paragraph_2_Regular">
                                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure...
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                    {testimonials.map(({src, alt, name,ceo,  description}) => {
                        return (
                            <div className="p-[10px] flec flex-row gap-[30px]">
                                <div className="flex flex-col gap-5">
                                    <Image
                                        src="/blog_1.jpg"
                                        alt="blog"
                                        width={350}
                                        height={200}
                                        className="rounded-md"
                                    />
                                    <div className="flex flex-col gap-3">
                                        <div className="text-[#9497A1] Paragraph_3_Regular">
                                            22 June 2022
                                        </div>
                                        <div className="text-[#292D33] /* Headline_4_Bold */">
                                            ISO 13485 compliance of medical devices
                                        </div>
                                        <div className="text-[#9497A1] Paragraph_2_Regular">
                                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure...
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