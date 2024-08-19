import img from "../../assets/home/1.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const WorkingH = () => {
    return (
        <>
       <div
  style={{
    backgroundImage: `url(${img})`,
    backgroundRepeat: "no-repeat",
    height: "90vh",
    backgroundSize: "cover",
  }}
  className="font-bold bg-fixed text-white pt-8 my-20"
>
  <div className="lg:mt-28 md:mt-20 mt-12 md:flex justify-center items-center lg:pb-20 md:pb-16 pb-12 lg:pt-12 pt-8 lg:px-36 md:px-24 px-6">
   
    <div className="w-full md:w-1/2 mt-8 md:mt-0"   
    data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center"
     >
      <div className="border-b flex justify-between items-center py-4">
        <p>Working Days</p>
        <p>Mon To Sat</p>
      </div>
      <div className="border-b flex justify-between items-center py-4">
        <p>Working Hours</p>
        <p>10am To 9pm</p>
      </div>
      <div className="border-b flex justify-between items-center py-4">
        <p>Saturday</p>
        <p>10am To 4pm</p>
      </div>
      <div className="border-b flex justify-between items-center py-4">
        <p>Sunday</p>
        <p>Closed</p>
      </div>
    </div>
  </div>
</div>


        </>
    );
};

export default WorkingH;