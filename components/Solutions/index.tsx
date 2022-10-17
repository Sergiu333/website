import Image from "next/image";
import Link from 'next/link'

const Solutions = () => {
    return (
        <div className="bg-[#F1F6FA]">
            <div className="container mx-auto flex flex-row gap-[46px]">
                <div className="w-[729px]">
                    <Image
                        src="/solutions_img.jpg"
                        alt="solutions_img"
                        width={'929px'}
                        height={'740px'}
                    />
                </div>

                <div className="flex flex-col gap-[30px] w-[540px]">
                    <div className="font-extrabold font-['Manrope'] text-[38px] leading-[56px] text-[#292D33]">
                        Radically new solutions for data
                    </div>
                    <div className="font-['Open Sans'] font-normal text-xl leading-[33px] text-[#9497A1]">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo.
                    </div>
                    <div>
                        <Link href="/">
                            <a>
                                <button
                                    className="bg-[#185CFF] rounded-md py-[11px] px-[46px] text-white font-bold text-xs leading-6 font-['Manrope']">
                                    Learn more
                                </button>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Solutions;