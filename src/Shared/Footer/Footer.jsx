import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import featuredImg from "../../assets/home/Footer BG.png"
const Footer = () => {
    const iconStyle = { width: "28px", height: "28px" };

    return (
        <footer
            className="bg-cover bg-no-repeat flex flex-col justify-center items-center text-center text-white"
            style={{
                backgroundImage: `url(${featuredImg})`,
            }}
        >
            <div className="p-4">
                <p className="sm:text-6xl text-8xl font-headingName tracking-wide">Belleza</p>
                <p className="mt-2">
                    A one-stop destination to the beauty and relaxation,<br /> offering services for a complete pampering experience.
                </p>
            </div>
            <div className="mt-5">
                <span className="text-lg font-bold">Follow Us</span>
                <div className="flex gap-4 md:gap-8 mt-3 justify-center">
                    <FaInstagram style={iconStyle} />
                    <FaYoutube style={iconStyle} />
                    <FaFacebook style={iconStyle} />
                </div>
            </div>
            <div className="mt-6 mb-6">
                <p>Copyright © 2024</p>
            </div>
        </footer>


    );
};

export default Footer;

