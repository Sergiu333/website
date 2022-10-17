import Image from 'next/image'
import Link from 'next/link'

const Header = () =>{
    return (
        <div className="container mx-auto w-[1110px] py-10 bg-white flex flex-row gap-36 text-sm items-center">
            <Link href="/">
                <a>
                    <Image
                        src="/logo.png"
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
                    <button className="h-11 w-[168px]  bg-[#185CFF] rounded-md text-white flex items-center">
                        <img className="mx-2.5" src="play.png" alt="play button" width={24} height={24}/>
                        Watch the demo
                    </button>
                </a>
            </Link>

        </div>
    )
}
export default Header;