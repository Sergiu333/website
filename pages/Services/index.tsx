import Header from "../../components/header";
import Footer from "../../components/footer";
import Breadcrumd from "../../components/Breadcrumd";
import Hero from "../../components/Hero";
import CardSection from "../../components/cardSection";
import ServicesCompany from "../../components/servicesCompany";
import Contacts from "../../components/contacts";

const Services = () => {
    return (
        <div>
            <Header/>
            <Breadcrumd/>
            <Hero/>
            <CardSection/>
            {/*<OverviewSection/>*/}
            <ServicesCompany/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default Services;
