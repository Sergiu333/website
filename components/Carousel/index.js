
import React from "react";
import Image from "next/image";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});



const Carousel = () => {
    return (
        <div className="container mx-auto w-[1110px] flex flex-row gap-[30px] mt-[120px]">
            <OwlCarousel
                autoplay
                infinite={true}
                loop={true}
                dots
                nav={true}
                // navText={["<img src='/Create.png'>","<img src='/Create.png'>"]}
                // navText= {["<div class='owl-prev'>back</div>", "<div class='owl-next'>next</div>"]}
                navText= {[
                    "<div class='back'>back</div>",
                    "<div class='next'>next</div>"
                ]}

            >
                <div className="w-[350px] p-[35px] flex flex-col shadow-card-3">
                    <div className="flex flex-row gap-[25px]">
                        <div>
                            <Image
                                src="/person_1.jpg"
                                alt="Person"
                                width={80}
                                height={80}
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="Headline_6_Bold text-[#292D33]">Alex Bern</div>
                            <div className="Headline_7_Medium text-[#9497A1]">CEO by PixelPerfect</div>
                        </div>
                    </div>
                    <div className="Paragraph_2_Regular text-[#9497A1]">
                        Ut enim ad minima veniam, quis nostrum exercitationem ullam corpor suscipit laboriosam, nisi ut
                        aliquid ex ea commodi consequatur? Quis utem vel eum iure reprehender qui in ea voluptate velit esse
                        quam nihil molesti consequatur, vel illum.
                    </div>
                </div>
                <div className="w-[350px] p-[35px] flex flex-col shadow-card-3">
                    <div className="flex flex-row gap-[25px]">
                        <div>
                            <Image
                                src="/person_1.jpg"
                                alt="Person"
                                width={80}
                                height={80}
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="Headline_6_Bold text-[#292D33]">Alex Bern</div>
                            <div className="Headline_7_Medium text-[#9497A1]">CEO by PixelPerfect</div>
                        </div>
                    </div>
                    <div className="Paragraph_2_Regular text-[#9497A1]">
                        Ut enim ad minima veniam, quis nostrum exercitationem ullam corpor suscipit laboriosam, nisi ut
                        aliquid ex ea commodi consequatur? Quis utem vel eum iure reprehender qui in ea voluptate velit esse
                        quam nihil molesti consequatur, vel illum.
                    </div>
                </div>
                <div className="w-[350px] p-[35px] flex flex-col shadow-card-3">
                    <div className="flex flex-row gap-[25px]">
                        <div>
                            <Image
                                src="/person_1.jpg"
                                alt="Person"
                                width={80}
                                height={80}
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="Headline_6_Bold text-[#292D33]">Alex Bern</div>
                            <div className="Headline_7_Medium text-[#9497A1]">CEO by PixelPerfect</div>
                        </div>
                    </div>
                    <div className="Paragraph_2_Regular text-[#9497A1]">
                        Ut enim ad minima veniam, quis nostrum exercitationem ullam corpor suscipit laboriosam, nisi ut
                        aliquid ex ea commodi consequatur? Quis utem vel eum iure reprehender qui in ea voluptate velit esse
                        quam nihil molesti consequatur, vel illum.
                    </div>
                </div>
                <div className="w-[350px] p-[35px] flex flex-col shadow-card-3">
                    <div className="flex flex-row gap-[25px]">
                        <div>
                            <Image
                                src="/person_1.jpg"
                                alt="Person"
                                width={80}
                                height={80}
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="Headline_6_Bold text-[#292D33]">Alex Bern</div>
                            <div className="Headline_7_Medium text-[#9497A1]">CEO by PixelPerfect</div>
                        </div>
                    </div>
                    <div className="Paragraph_2_Regular text-[#9497A1]">
                        Ut enim ad minima veniam, quis nostrum exercitationem ullam corpor suscipit laboriosam, nisi ut
                        aliquid ex ea commodi consequatur? Quis utem vel eum iure reprehender qui in ea voluptate velit esse
                        quam nihil molesti consequatur, vel illum.
                    </div>
                </div>

            </OwlCarousel>

        </div>
    )
}

export default Carousel;