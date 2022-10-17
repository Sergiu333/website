import Header from "../components/header";
import Ensome from "../components/ensome";
import ImageBlock from "../components/imageBlock";
import Newest from "../components/newest";
import Solutions from "../components/solutions";
import Services from "../components/services";
import Benefits from "../components/benefits";

const Home = () =>{
    return (
        <div>
            <Header/>
            <Ensome/>
            <ImageBlock/>
            <Newest/>
            <Solutions/>
            <Services/>
            <Benefits/>
        </div>
    )
}
export default Home;