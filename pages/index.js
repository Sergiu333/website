import Header from "../components/header";
import Ensome from "../components/ensome";
import ImageBlock from "../components/imageBlock";
import Newest from "../components/newest";
import Solutions from "../components/Solutions";
import Services from "../components/services";

const Home = () =>{
    return (
        <div>
            <Header/>
            <Ensome/>
            <ImageBlock/>
            <Newest/>
            <Solutions/>
            <Services/>
        </div>
    )
}
export default Home;