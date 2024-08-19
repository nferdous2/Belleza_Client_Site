/* eslint-disable react/no-unescaped-entities */
import faqImg from '../../assets/home/FAQ BG.png';
import faq from "../../assets/home/faq.png"
import Title from "../../Shared/Title";

const FrequentAsk = () => {
    return (
        <div>
            <Title heading="Frequently Asked Question" description="Explore Belleza's FAQs: General Information, Booking, Services & Pricing, Products, Stylist Requests, Payment Policies, Visit Preparation, Safety Measures, Special Packages, and Contact Support." />


            <div className="mt-40 bg-cover bg-no-repeat lg:h-[75vh]"
                style={{
                    backgroundImage: `url(${faqImg})`,
                }} >

                <div className="grid grid-cols-1 lg:grid-cols-2  gap-2  ">

                    <div className='p-20'>
                        <h1 className='text-4xl font-semibold mb-3'>We are here for you</h1>
                        <p className='text-2xl mb-5'>Few common question by our user is given below.</p>

                        <div className="collapse collapse-arrow bg-white mb-4">
                            <input type="radio" name="my-accordion-2" defaultChecked />
                            <div className="collapse-title text-xl font-medium">1. What services do you offer at Belleza?</div>
                            <div className="collapse-content text-xl">
                                <p>At Belleza, we offer a wide range of beauty services, including haircuts, coloring, styling, blowouts, manicures, pedicures, and more.</p>
                            </div>
                        </div>

                        <div className="collapse collapse-arrow bg-white mb-4">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">2. How can I book an appointment?</div>
                            <div className="collapse-content text-xl">
                                <p>You can book an appointment by calling us directly, booking online through our website, or using our mobile app. Walk-ins are also welcome, but booking in advance is recommended to secure your preferred time.</p>
                            </div>
                        </div>

                        <div className="collapse collapse-arrow bg-white mb-4">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">3. Do you accept walk-ins?</div>
                            <div className="collapse-content text-xl">
                                <p>Yes, we do accept walk-ins based on availability. However, we recommend booking an appointment to ensure you get the time and stylist you prefer.</p>
                            </div>
                        </div>

                        <div className="collapse collapse-arrow bg-white mb-4">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">4. Can I request a specific stylist?</div>
                            <div className="collapse-content text-xl">
                                <p>Absolutely! When booking your appointment, you can request a specific stylist. We will do our best to accommodate your preference based on the stylist's availability.</p>
                            </div>
                        </div>
                    </div>

                    <div
                        data-aos="fade-left"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                    >
                        <img src={faq} alt="FAQ" className="mt-[-100px] md:h-[100%]  sm:block hidden" />

                    </div>
                </div>

            </div>
        </div>
    );
};

export default FrequentAsk;