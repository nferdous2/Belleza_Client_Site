import { Helmet } from "react-helmet-async";
import HBanner from "./Banner/HBanner";
import Featured from "./Featured";
import PopularService from "./PopularService";
import Testimonials from "./Testimonials";
import WorkingH from "./WorkingH";
import AboutUs from "./AboutUs";
import FrequentAsk from "./FrequentAsk";

const Home = () => {
    return (
        <>
         <Helmet>
         <title>Belleza Home</title>
        </Helmet>
        <HBanner/>
      <div style={{margin:"5%"}}>
      <AboutUs/>
        <PopularService/>
        <Featured/>
        <FrequentAsk/>
        <WorkingH/>

        <Testimonials/>

      </div>

        </>
    );
};

export default Home;