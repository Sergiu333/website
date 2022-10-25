import Link from "next/link";
import Image from "next/image";

const HeaderServices = () => {
    return (
        <div className="bg-[#002B4E]">
            <div
                className="container mx-auto w-[1110px] py-10 bg-[#002B4E] text-white flex flex-row gap-36 text-sm items-center">
                <Link href="/">
                    <a>
                        <Image
                            src="/logo_white.png"
                            alt="logo"
                            width={170}
                            height={50}
                        />
                    </a>
                </Link>
                <div className="flex flex-row gap-10">
                    <Link href="/">
                        <a>
                            <div className="">Home</div>
                        </a>
                    </Link>
                    <Link href="/">
                        <a>
                            <div className="">Solutions</div>
                        </a>
                    </Link>
                    <Link href="/">
                        <a>
                            <div className="">Pages</div>
                        </a>
                    </Link>
                    <Link href="/">
                        <a>
                            <div className="">Elements</div>
                        </a>
                    </Link>
                    <Link href="/">
                        <a>
                            <div className="">Blog</div>
                        </a>
                    </Link>
                    <Link href="/">
                        <a>
                            <div className="">contacts</div>
                        </a>
                    </Link>
                </div>
                <Link href="/">
                    <a>
                        <button className="h-11 w-[168px]  bg-white rounded-md text-black flex items-center">
                            <img className="mx-2.5" src="play_inverted.png" alt="play button" width={24} height={24}/>
                            Watch the demo
                        </button>
                    </a>
                </Link>
            </div>
            <hr className="text-[#194060]"/>
            <div className="container mx-auto w-[1110px] mt-[40px]">
                <div className="Headline_7_SemiBold text-white">
                    <span className="text-gray">Home | </span> Access control
                </div>
                <div className="flex flex-row justify-between text-white mt-[129px] pb-[111px]">
                    <div className="Headline_1_ExtraBold">Access control</div>
                    <div className="Paragraph_3_Regular">Sed ut perspiciatis unde omnis iste natus error volupta <br/> accusantium doloremque laudantium,
                        totam remiga <br/> aperiam, eaque ipsa.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderServices;
