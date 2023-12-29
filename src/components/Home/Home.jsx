import Banner from "./Banner";
import AboutMe from "./AboutMe";
import Project from "./Project";
import Contact from "./Contact";
import Skill from "../Skill";
import Services from "./Services";
import Footer from "./Footer";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Skill></Skill>
            <Services></Services>
            <Project></Project>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;
