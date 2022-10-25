import Image from "next/image";
import Link from "next/link";

const Services = () => {
    return (
        <div className="container mx-auto w-[1110px] flex flex-col gap-[30px] mt-[120px]">
            <div className="font-['Manrope'] font-extrabold text-[38px] leading-[56px] text-center text-[#292D33]">
                We provide services that guarantee your success
            </div>
            <div className="flex flex-row gap-[31px]">
                <div className="flex flex-row gap-[30px]">
                    <div className="text-[#185CFF] font-extrabold text-[50px] leading-[112px] font-['Open Sans']">
                        1830+
                        <div className="text-[#9497A1] font-normal text-base leading-[28px]">
                            Project executed
                        </div>
                    </div>
                    <div className="text-[#185CFF] font-extrabold text-[50px] leading-[112px] font-['Open Sans']">
                        834+
                        <div className="text-[#9497A1] font-normal text-base leading-[28px]">
                            Satisfied customers
                        </div>
                    </div>
                    <div className="text-[#185CFF] font-extrabold text-[50px] leading-[112px] font-['Open Sans']">
                        390
                        <div className="text-[#9497A1] font-normal text-base leading-[28px]">
                            Data management
                        </div>
                    </div>
                </div>
                <div className="w-[540px] font-['Open Sans'] font-normal text-xl leading-[33px] text-[#9497A1]">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium,
                    totam rem aperiam, eaque ipsa quaeab illo inventore. Donec tincidunt tempor quam, non mollis quam
                    finibus nec.
                </div>
            </div>
            <div className="flex flex-row">
                <Link href="/">
                    <a>
                        <Image
                            src="/logo_1_services.png"
                            alt="logo"
                            width={'185px'}
                            height={'132px'}
                        />
                    </a>
                </Link>
                <Link href="/">
                    <a>
                        <Image
                            src="/logo_3_services.png"
                            alt="logo"
                            width={'185px'}
                            height={'132px'}
                        />
                    </a>
                </Link>
                <Link href="/">
                    <a>
                        <Image
                            src="/logo_4_services.png"
                            alt="logo"
                            width={'185px'}
                            height={'132px'}
                        />
                    </a>
                </Link>
                <Link href="/">
                    <a>
                        <Image
                            src="/logo_5_services.png"
                            alt="logo"
                            width={'185px'}
                            height={'132px'}
                        />
                    </a>
                </Link>
                <Link href="/">
                    <a>
                        <Image
                            src="/logo_6_services.png"
                            alt="logo"
                            width={'185px'}
                            height={'132px'}
                        />
                    </a>
                </Link>
                <Link href="/">
                    <a>
                        <Image
                            src="/logo_7_services.png"
                            alt="logo"
                            width={'185px'}
                            height={'132px'}
                        />
                    </a>
                </Link>
            </div>
        </div>
    );
}

export default Services;