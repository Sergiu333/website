import Header from "../../components/header";
import Breadcrumd from "../../components/Breadcrumd";
import HeroAbout from "../../components/heroAbout";
import Footer from "../../components/footer";
import Advantages from "../../components/advantages";
import Contacts from "../../components/contacts";
import Testimonials from "../../components/testimonials";
import CostomersLogs from "../../components/costomersLogs";

const AboutUs = () => {
  return (
      <div>
          <Header/>
          <Breadcrumd/>
          <HeroAbout/>
          <Advantages/>
          <Testimonials/>
          <CostomersLogs/>
          <Contacts/>
          <Footer/>
      </div>
  );
}

export default AboutUs;
