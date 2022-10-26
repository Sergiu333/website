import React from "react";
import Image from "next/image";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});
const slider = [
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
    }
]

function Testimonials() {
    return (
        <div className="container mx-auto w-[1110px] flex flex-col">
            <div className="flex flex-col pb-[40px]">
                <div className="Headline_2_ExtraBold text-black">
                    Testimonials
                </div>
                <div className="text-gray Paragraph_1_Regular">
                    Sed ut perspiciatis unde omnis iste natus error sit <br/> voluptatem accusantium doloremque
                    laudantium.
                </div>
            </div>
            <div className="flex flex-row gap-[30px]">
                <OwlCarousel
                    autoplay
                    loop={true}
                    dots
                    nav={true}
                    items={2}
                    navText={[
                        "<div class='back'><img src='/left_arrow.svg' alt=''></div>",
                        "<div class='next'><img src='/right_arrow.svg' alt=''></div>"
                    ]}>

                    {slider.map(({src, name, ceo, description}) => {
                        return (
                            <div className="p-[10px]">
                                <div className="flex flex-col p-[35px] shadow-card-3">
                                    <div className="flex flex-row gap-[25px] items-center">
                                        <div>
                                            <Image
                                                src={src}
                                                alt="image"
                                                width={80}
                                                height={80}
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <div className="text-black Headline_6_Bold">
                                                {name}
                                            </div>
                                            <div className="text-gray Headline_7_Medium">
                                                {ceo}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-gray Paragraph_2_Regular">
                                        {description}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    {slider.map(({src, name, ceo, description}) => {
                        return (
                            <div className="p-[10px]">
                                <div className="flex flex-col p-[35px] shadow-card-3">
                                    <div className="flex flex-row gap-[25px] items-center">
                                        <div>
                                            <Image
                                                src={src}
                                                alt="image"
                                                width={80}
                                                height={80}
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <div className="text-black Headline_6_Bold">
                                                {name}
                                            </div>
                                            <div className="text-gray Headline_7_Medium">
                                                {ceo}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-gray Paragraph_2_Regular">
                                        {description}
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </OwlCarousel>
            </div>
        </div>
    );
}

export default Testimonials;
























