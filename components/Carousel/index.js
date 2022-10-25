
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

const Carousel = () => {
    return (
        <div className="container mx-auto w-[1110px] mt-[120px] mb-[100px]">
            <div className="text-[#292D33] Headline_2_ExtraBold mb-[50px]">Testimonials </div>
            <div className=" flex flex-row gap-[30x]">
                <OwlCarousel
                    autoplay
                    loop={true}
                    dots
                    nav={true}
                    navText = {[
                        "<div class='back'><img src='/left_arrow.svg' alt=''></div>",
                        "<div class='next'><img src='/right_arrow.svg' alt=''></div>"
                    ]}
                >
                    {testimonials.map(({src, alt, name,ceo,  description}) => {
                        return (
                            <div className="p-[10px]">
                                <div className="flex flex-col p-[35px] shadow-card-3 ml-[30px]">
                                    <div className="flex flex-row gap-[25px]">
                                        <div>
                                            <Image
                                                src={src}
                                                alt="person"
                                                width={80}
                                                height={80}
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <div className="Headline_6_Bold text-[#292D33]">{name}</div>
                                            <div className="Headline_7_Medium text-[#9497A1]">{ceo}</div>
                                        </div>
                                    </div>
                                    <div className="Paragraph_2_Regular text-[#9497A1]">
                                        {description}
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                    {testimonials.map(({src, alt, name,ceo,  description}) => {
                        return (
                            <div className="  p-[10px]">
                                <div className="flex flex-col p-[35px] shadow-card-3 ml-[30px]">
                                    <div className="flex flex-row gap-[25px]">
                                        <div>
                                            <Image
                                                src={src}
                                                alt="person"
                                                width={80}
                                                height={80}
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <div className="Headline_6_Bold text-[#292D33]">{name}</div>
                                            <div className="Headline_7_Medium text-[#9497A1]">{ceo}</div>
                                        </div>
                                    </div>
                                    <div className="Paragraph_2_Regular text-[#9497A1]">
                                        {description}
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

export default Carousel;
