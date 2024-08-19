// import { Helmet } from "react-helmet-async";
// import ServiceCategory from "./ServiceCategory";
// import nailImg from '../../../assets/services/image8.jpg'
// import browImg from '../../../assets/services/image 7.png'
// import hairImg from '../../../assets/services/image 3.png'
// import useMenu from '../../../hooks/useMenu';
// import makeupImg from "../../../assets/services/image 6.png"
// const Services = () => {
//   const [services, loading] = useMenu();

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   const haircuts = services.haircuts;
//   const makeupServices = services.makeupServices;
//   const browServices = services.browServices;
//   const nailServices = services.nailServices;

//   return (
//     <div>
//       <Helmet>
//        <title>Belleza |Services</title>
//       </Helmet>
//       {/* main cover */}
//       <ServiceCategory items={haircuts} title={"haircuts"} img={hairImg}></ServiceCategory>
//       <ServiceCategory items={makeupServices} title={"makeupServices"} img={makeupImg}></ServiceCategory>
//       <ServiceCategory items={browServices} title={"browServices"} img={browImg}></ServiceCategory>
//       <ServiceCategory items={nailServices} title={"nailServices"} img={nailImg}></ServiceCategory>
//     </div>
//   );
// };

// export default Services;

import { Helmet } from "react-helmet-async";
import ServiceCategory from "./ServiceCategory";

import useMenu from '../../../hooks/useMenu';
import serviceImg from "../../../assets/home/service.png"
import { Typewriter } from "react-simple-typewriter";
const Services = () => {
  const [services, loading] = useMenu();

  if (loading) {
    return <div>Loading...</div>;
  }

  const haircuts = services.haircuts;
  const makeupServices = services.makeupServices;
  const browServices = services.browServices;
  const nailServices = services.nailServices;

  return (
    <>

      <Helmet>
        <title>Belleza |Services</title>
      </Helmet>
      <div
        className="relative h-[120vh] flex flex-col justify-center items-center text-center bg-cover bg-center bg-no-repeat sm:bg-none"
        style={{ backgroundImage: `url(${serviceImg})` }}
      >
        <p className="text-5xl font-bold mb-5">
          Indulge in Belleza's <br />
          <Typewriter
            words={['Premium Saloon Services']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}

          />
        </p>
        <p className="text-2xl mb-5">
          Discover a range of personalized beauty services designed to <br />
          enhance your natural elegance at Belleza.
        </p>
        <button className="btn btn-active btn-neutral mt-5 lg:w-52">Explore</button>
      </div>
      {/* main cover */}
      <ServiceCategory items={haircuts} title={"haircuts"} heading={"HairCut"} description={"Expert haircuts tailored to your style, enhancing your look with precision and creativity at Belleza."}>
      </ServiceCategory>
      <ServiceCategory items={makeupServices} title={"makeupServices"} heading={"MakeUp"} description={"Enhance your natural beauty with expertly applied makeup at Belleza, designed to complement your features and style with elegance and flair."} ></ServiceCategory>
      <ServiceCategory items={browServices} title={"browServices"} heading={"Eye Brows"} description={"Expert brow shaping and care to frame your face and elevate your natural beauty."}></ServiceCategory>
      <ServiceCategory items={nailServices} title={"nailServices"} heading={"Nail Care"} description={"Pamper your hands and nails with our expert nail care services, ensuring beauty and health in every detail."}></ServiceCategory>
    </>
  );
};

export default Services;
