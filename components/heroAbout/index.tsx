import Image from "next/image";
import Services from "../servicesCompany";

const HeroAbout = () => {
  return (
      <div>
          <div className="container mx-auto w-[1110px] flex flex-col text-center pt-14 gap-[15px]">
              <div className="text-primary Headline_6_Bold">
                  About Us
              </div>
              <div className="text-black Headline_1_ExtraBold">
                  We work with 15 years of experience
              </div>
              <div className="text-gray Paragraph_1_Regular">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium <br/> doloremque laudantium, totam rem aperiam, eaque ipsa quaeab illo inventore.
              </div>
          </div>
          <div className="relative pt-[120px] bg-[#F1F6FA]">
              <Image
                  src="/img_about_us.jpg"
                  alt="logo"
                  width={'1920px'}
                  height={'590px'}
                  className="relative"
              />
              <Services/>
          </div>
      </div>
  );
}

export default HeroAbout;
