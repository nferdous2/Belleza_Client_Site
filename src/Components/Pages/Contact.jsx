import { FaMapLocation, FaPhone, } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import img from "../../assets/home/contact.jpg"
import { Typewriter } from "react-simple-typewriter";
const Contact = () => {


    return (
        <>
            <div className="relative w-full h-64 md:h-80 lg:h-96 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${img})` }}>

                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                            <Typewriter
                                words={['Get in Touch']}
                                loop={5}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}

                            />
                        </h1>
                    </div>
                </div>
            </div>

            <div
                style={{ marginTop: "-4%" }} // Adjust the margin as needed
                className="relative flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden max-w-5xl mx-auto my-8"
            >
                <div className="w-full md:w-1/2 p-6">
                    <h2 className="text-3xl font-bold mb-4">
                        Drop your message
                    </h2>
                    <form className="space-y-4"
                        action="https://formspree.io/f/mgejqyzk"
                        method="POST">
                        <div className="flex flex-col md:flex-row md:space-x-4">
                            <input
                                type="text"
                                name="username"
                                placeholder="Your Name"
                                className="w-full p-3 border border-gray-300 rounded-md mb-4 md:mb-0"
                                required
                            />
                            <input
                                name="Email"
                                type="email"
                                placeholder="Your Email Id"
                                className="w-full p-3 border border-gray-300 rounded-md"
                                required
                            />
                        </div>
                        <input
                            name="Phone"
                            type="text"
                            placeholder="Phone"
                            className="w-full p-3 border border-gray-300 rounded-md"
                            required
                        />
                        <textarea
                            name="Message"
                            placeholder="Your Message..."
                            className="w-full p-3 border border-gray-300 rounded-md"
                            rows="5"
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full p-3 bg-basic text-white font-bold rounded-md transition-colors"
                        >
                            Submit
                        </button>
                    </form>
                </div>
                <div className="w-full md:w-1/2 p-6 text-white flex flex-col justify-center relative" style={{ background: 'linear-gradient(to right, #0c0c0c,#6d6d6d )' }}>


                    {/* <div className="w-full md:w-1/2 p-6 text-white flex flex-col justify-center relative" style={{ background: 'linear-gradient(to right, #59152F, #9C4B5E)' }}> */}
                    <div className="relative">
                        <h2 className="text-2xl font-bold mb-4">Quick Contact</h2>
                        <p className="mb-8">
                            If you have any questions, simply use the following contact details.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center flex-wrap md:flex-nowrap">
                                <div className="bg-white p-2 mr-2 rounded-full">
                                    <FaMapLocation style={{ color: "#00aab5", fontSize: "20px" }} />
                                </div>
                                <div>
                                    <strong>ADDRESS:</strong>
                                    <p>123 A Street, Sylhet,Bangladesh</p>
                                </div>
                            </div>
                            <div className="flex items-center flex-wrap md:flex-nowrap">
                                <div className="bg-white p-2 mr-2 rounded-full">
                                    <MdEmail style={{ color: "#00aab5", fontSize: "20px" }} />
                                </div>
                                <div>
                                    <strong>EMAIL:</strong>
                                    <p>belleza@info.com</p>
                                </div>
                            </div>
                            <div className="flex items-center flex-wrap md:flex-nowrap">
                                <div className="bg-white p-2 mr-2 rounded-full">
                                    <FaPhone style={{ color: "#00aab5", fontSize: "20px" }} />
                                </div>
                                <div>
                                    <strong>PHONE:</strong>
                                    <p>+880 2348193820</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Contact;
