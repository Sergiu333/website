import React from "react";
import Image from "next/image";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});
const logs = [
    {
        src: "/logo_1_services.png"
    },
    {
        src: "/logo_3_services.png"
    },
    {
        src: "/logo_4_services.png"
    },
    {
        src: "/logo_5_services.png"
    },
    {
        src: "/logo_6_services.png"
    },
    {
        src: "/logo_7_services.png"
    }
]

const CostomersLogs = () => {
    return (
        <div className="container mx-auto w-[1110px] flex flex-row">
            <OwlCarousel
                autoplay
                items={6}
            >
                {logs.map(({src}) => {
                    return (
                        <div>
                            <Image
                                src={src}
                                alt="logo"
                                width={185}
                                height={132}
                            />
                        </div>
                    );
                })}

                {logs.map(({src}) => {
                    return (
                        <div>
                            <Image
                                src={src}
                                alt="logo"
                                width={185}
                                height={132}
                            />
                        </div>
                    );
                })}
            </OwlCarousel>

        </div>
    )
}

export default CostomersLogs;
