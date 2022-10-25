import Image from "next/image";

const Breadcrumd = () =>{
    return(
        <div className="container mx-auto w-[1110px]">
            <div className="flex flex-row gap-[9px]">
                <div className="Headline_7_Medium text-grey">
                    Home
                </div>
                <Image
                    src="/divider.svg"
                    alt="divider"
                    width={1.5}
                    height={14}
                />
                <div className="Headline_7_SemiBold text-black">
                    Services
                </div>
            </div>
        </div>
    );
}

export default Breadcrumd;
