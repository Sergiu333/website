import Header from "../../components/header";
import Breadcrumd from "../../components/Breadcrumd";
import HeroBlog from "../../components/heroBlog";
import ArticleCards from "../../components/articleCards";
import Footer from "../../components/footer";

const Blog = () =>{
    return (
        <div>
           <Header/>
            <Breadcrumd/>
            <HeroBlog/>
            <ArticleCards/>
            <Footer/>
        </div>
    );
}

export default Blog;
