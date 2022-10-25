import Header from "../components/header";
import Ensome from "../components/ensome";
import ImageBlock from "../components/imageBlock";
import Newest from "../components/newest";
import Solutions from "../components/solutions";
import Benefits from "../components/benefits";
import Carousel from "../components/Carousel";
import OurPricing from "../components/ourPricing";
import OurBlog from "../components/ourBlog";
import Contacts from "../components/contacts";
import Footer from "../components/footer";
import ServicesCompany from "../components/servicesCompany";

const Home = () =>{
    return (
        <div>
            <Header/>
            <Ensome/>
            <ImageBlock/>
            <Newest/>
            <Solutions/>
            <ServicesCompany/>
            <Benefits/>
            <Carousel/>
            <OurPricing/>
            <OurBlog/>
            <Contacts/>
            <Footer/>
        </div>
    )
}
export default Home;
