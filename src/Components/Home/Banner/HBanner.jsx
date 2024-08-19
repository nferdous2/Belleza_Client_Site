import CountUp from 'react-countup';
import "./Banner.css"
import { Typewriter } from 'react-simple-typewriter';
export default function HBanner() {
  return (
    <div className="thero text-left text-white">
      <div className="p-6 sm:p-10 lg:ml-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5 lg:mt-24 mt-4">Discover Your <br /> Beauty at
          <span className=" ml-5">
            <Typewriter
              words={['Belleza']}
              loop={5}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}

            />
          </span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl">Transforming beauty with expert care and passion, offering top-notch <br />services to make you look and feel your best.</p>
        <button className="btn  bg-white mt-6 sm:mt-8 lg:mt-9">Make Appointment</button>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:mt-24 mt-7">
          <div className="bg-gradient-to-r from-[#43434368] to-[#47474700] rounded-lg p-4 border border-borderColor">
            <h2 className="text-xl sm:text-lg md:text-xl">
              <CountUp start={9000} end={9750} duration={2} separator="," />
              +
            </h2>
            <p className="text-sm sm:text-base">Happy Customers</p>
          </div>
          <div className="bg-gradient-to-r from-[#43434368] to-[#47474700] rounded-lg p-4 border border-borderColor">
            <h2 className="text-xl sm:text-lg md:text-xl">
              <CountUp start={0} end={125} duration={2} />
              +
            </h2>
            <p className="text-sm sm:text-base">Beauty Specialists</p>
          </div>
          <div className="bg-gradient-to-r from-[#43434368] to-[#47474700] rounded-lg p-4 border border-borderColor">
            <h2 className="text-xl sm:text-lg md:text-xl">
              <CountUp start={0} end={4.5} duration={2} decimals={1} />
            </h2>
            <p className="text-sm sm:text-base">Purpose Rating</p>
          </div>
        </div>
      </div>
    </div>





  );
}
