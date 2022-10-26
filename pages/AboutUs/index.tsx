import Header from "../../components/header";
import Breadcrumd from "../../components/Breadcrumd";
import HeroAbout from "../../components/heroAbout";
import Footer from "../../components/footer";
import Advantages from "../../components/advantages";
import Contacts from "../../components/contacts";
import Testimonials from "../../components/testimonials";

const AboutUs = () => {
  return (
      <div>
          <Header/>
          <Breadcrumd/>
          <HeroAbout/>
          <Advantages/>
          <Testimonials/>
          <Contacts/>
          <Footer/>
      </div>
  );
}

export default AboutUs;
