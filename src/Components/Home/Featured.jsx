import featuredImg from '../../assets/home/banner BG 1.png';

const Featured = () => {
  return (
    <div
      className="text-left flex flex-col md:flex-row items-center mt-5 bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${featuredImg})`,
        height: "80vh",
      }}
    >
      <div className="text-white mx-4 md:ml-16 p-4 md:p-0"
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false">
        <p className="text-4xl md:text-6xl font-bold text-center md:text-left">
          Get 25% Discount on <br className="hidden md:block" /> Nail care.
        </p>
        <h3 className="text-lg md:text-xl mt-3 md:mt-5 text-center md:text-left">
          Transform your nails with precision care and artistic designs,
          <br className="hidden md:block" /> tailored to showcase your unique style and elegance.
        </h3>
        <button className="bg-white text-black font-semibold py-3 px-6 rounded mt-6 mx-auto md:mx-0 block">
          BOOKING ONLINE
        </button>
      </div>
    </div>


  );
};

export default Featured;