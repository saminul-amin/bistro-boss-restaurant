import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "@smastrom/react-rating/style.css";

export default function Testimonials() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section>
      <SectionTitle subHeading="What Our Client Say" heading="Testimonials" />
      <div>
        <Swiper
          autoplay={{
            delay: 5000,
            disableOnInteraction: false, // Keeps autoplay running after user interaction
          }}
          loop={true}
          navigation={true}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col items-center mx-24 my-16">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
                <p className="py-8 text-center">{review.details}</p>
                <h3 className="text-2xl text-orange-400">{review.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
