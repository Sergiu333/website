import Image from 'next/image'
import Link from 'next/link'

const ImageBlock = () =>{
    return (
        <div className="pt-[90px]">
            <Link href="/">
                <a>
                    <button className="absolute left-[920px] top-[336px] z-50 top-[300px] absolute w-[140px] h-[140px] bg-white rounded-full flex items-center justify-center text-white text-sm leading-6 font-semibold">
                        <div className="bg-[#185CFF] w-[120px] h-[120px] rounded-full flex items-center justify-center">
                            <div className="bg-white w-[104px] h-[104px] rounded-full flex items-center justify-center">
                                <div className="bg-[#185CFF] w-[102px] h-[102px] rounded-full flex items-center justify-center">
                                    Learn more
                                </div>
                            </div>
                        </div>
                    </button>
                </a>
            </Link>
            <div className="relative bottom-11">
                <Image
                    src="/img_block.jpg"
                    alt="logo"
                    width={'1920px'}
                    height={'590px'}
                    // layout={"fill"}
                    // objectPosition={"center"}
                    className="relative"
                />
            </div>

        </div>
    );
}

export default ImageBlock;