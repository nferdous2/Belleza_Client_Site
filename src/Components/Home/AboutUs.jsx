/* eslint-disable react/no-unescaped-entities */
import Title from "../../Shared/Title";
import img1 from "../../assets/home/1st photo.png"
import img2 from "../../assets/home/2nd photo.png"

import img3 from "../../assets/home/3rd photo.png"

const AboutUs = () => {
    return (
        <div>
            <Title heading="About Us" description="Belleza is where beauty meets artistry. Our expert team provides personalized, luxurious services in a tranquil environment, ensuring you leave feeling confident, refreshed, and beautiful" />
            <div className="lg:p-20 p-4 card lg:card-side  sm:mb-3 ">
                <img src={img1} alt="Album" />
                <div className="m-auto lg:p-4 lg:ml-10">
                    <h2 className=" text-2xl font-semibold mb-5">We Have <span style={{ color: "#FCA136" }}>Qualified</span> Stylist</h2>
                    <p className="text-basic text-xl">Our salon is designed to be a tranquil escape from the hustle and bustle of everyday life. <br />From the moment you walk through our doors, you'll be greeted by a warm and inviting atmosphere, <br />where every detail is carefully curated to ensure your comfort and satisfaction.</p>
                    <button
                        className="btn mt-6 sm:mt-8 lg:mt-9 w-48 mb-5 bg-[#f7f7f6] shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] transition-colors duration-100 hover:bg-black hover:text-white"
                    >
                        Learn More
                    </button>

                </div>
            </div>
            <div className="lg:p-20 p-4 card lg:card-side  sm:mb-3 ">
                <div className="m-auto lg:p-4 lg:ml-10">
                    <h2 className=" text-2xl font-semibold mb-5">We Use <span style={{ color: "#FCA136" }}>Best </span>Cosmetics</h2>
                    <p className="text-basic text-xl">We take pride in using only the highest quality products, carefully selected to deliver exceptional results while being gentle on your hair and skin.<br /> Our commitment to excellence extends to every aspect of our service.</p>
                    <button
                        className="btn mt-6 sm:mt-8 lg:mt-9 w-48 mb-5 bg-[#f7f7f6] shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] transition-colors duration-100 hover:bg-black hover:text-white"
                    >
                        Learn More
                    </button>
                </div>
                <img src={img2} alt="Album" />
            </div>
            <div className="lg:p-20 p-4 card lg:card-side  sm:mb-3 ">
                <img src={img3} alt="Album" />
                <div className="m-auto lg:p-4 lg:ml-10">
                    <h2 className=" text-2xl font-semibold">We <span style={{ color: "#FCA136" }}>Care</span> About You</h2>
                    <p className="text-basic text-xl">At Belleza, we believe that everyone deserves to feel confident and beautiful.<br /> Our team of experienced and talented professionals is dedicated to providing personalized services that cater to your individual needs and desires. Whether it's a fresh haircut, a vibrant hair color.</p>
                    <button
                        className="btn mt-6 sm:mt-8 lg:mt-9 w-48 mb-5 bg-[#f7f7f6] shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] transition-colors duration-100 hover:bg-black hover:text-white"
                    >
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;