// Import Swiper styles
import "swiper/css";
import { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa6";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Title from "../../Shared/Title";
import { Pagination } from "swiper/modules";

const Testimonials = () => {
    const axiosPublic = useAxiosPublic()
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            const res = await axiosPublic.get('/reviews');
            setReviews(res.data);
        };
        fetchReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="my-20">
            <Title heading="What People Are Saying" description="At Belleza, our clients' happiness is our greatest achievement. Explore heartfelt testimonials from those who have experienced our services—from stunning transformations to special occasions. See why Belleza is their trusted beauty destination." />

            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}

                modules={[Pagination]}
                className="reviewS-Swiper"
                breakpoints={{
                    340: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    }
                    ,
                    480: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
            >

                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className="card bg-[#F4F4F4] shadow-xl p-4 h-80 relative text-center mb-10">
                            <FaQuoteLeft
                                style={{
                                    fontSize: '7rem',
                                    color: '#e4e4e2',
                                    position: 'absolute',
                                    top: '40%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    zIndex: 1,
                                }}
                            />
                            <div style={{ position: 'relative', zIndex: 2, marginTop: "15%" }}>
                                <p className="text-gray-800 italic mb-4">{review.reviews} </p>
                                <p className="font-semibold text-gray-800">– {review.name}.</p>

                                {/* <Rating
                                    initialRating={review.rating}
                                    emptySymbol={<FaStar style={{ color: "gray" }} />}
                                    fullSymbol={<FaStar style={{ color: "orange" }} />}
                                    readonly
                                ></Rating> */}

                            </div>
                        </div>

                    </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    );
};

export default Testimonials;
