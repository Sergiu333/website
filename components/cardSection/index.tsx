import Image from "next/image";
import Link from "next/link";

const cards = [
    {
        src: "/brain_isometric.png",
        title: "Machine learning",
        description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure.",
        link: "/"
    },
    {
        src: "/trading.png",
        title: "Embed analytics",
        description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure.",
        link: "/"
    },
    {
        src: "/key_isometric.png",
        title: "Access control",
        description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure.",
        link: "/"
    },
    {
        src: "/scheme.png",
        title: "Data analytics",
        description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure.",
        link: "/"
    },
    {
        src: "/brain_isometric.png",
        title: "Big data consulting",
        description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure.",
        link: "/"
    },
    {
        src: "/bot.png",
        title: "Artificial intelligence",
        description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure.",
        link: "/"
    },


]
const CardSection = () => {
    return (
        <div className="container mx-auto w-[1110px] grid grid-cols-2 gap-[30px] my-[120px]">
            {cards.map(({src, title, description, link}) => {
               return (
                   <div className="flex flex-col">
                       <div>
                           <Image
                               src={src}
                               alt="img"
                               width={84}
                               height={80}
                           />
                       </div>
                       <div className="text-black Headline_4_Bold pb-4">
                           {title}
                       </div>
                       <div className="text-gray Paragraph_2_Regular w-[470px] pb-5">
                           {description}
                       </div>
                       <div className="flex flex-row Headline_7_SemiBold text-primary gap-1">
                           Read more
                           <Link href="/">
                               <a>
                                   <div>
                                       <Image
                                           src="/left-arrow.png"
                                           alt="blog"
                                           width={14}
                                           height={7.5}
                                           className="rounded-md"
                                       />
                                   </div>
                               </a>
                           </Link>
                       </div>
                   </div>
               )
            })}
        </div>
    );
}

export default CardSection;
