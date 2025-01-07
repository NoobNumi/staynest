import React, { useState, useEffect } from "react";
import testimonialData from "../json/testimonials.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [showFullReview, setShowFullReview] = useState({});
  useEffect(() => {
    if (testimonialData && Array.isArray(testimonialData.testimonials)) {
      setTestimonials(testimonialData.testimonials);
    } else {
      console.error("Invalid JSON structure or data is missing!");
    }
  }, []);

  const toggleFullReview = (id) => {
    setShowFullReview((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section
      className="px-0 sm:px-7 mt-11 pb-11 relative h-[100vh] flex justify-center items-center"
      id="testimonials"
      data-aos="fade-up"
    >
      <div className="relative w-full text-center">
        <p className="font-semibold tracking-widest text-primary mb-3">
          TESTIMONIALS
        </p>
        <div className="mx-auto max-w-lg text-nowrap flex items-center justify-center gap-1 flex-col md:flex-row">
          <p>What our customers said about</p>
          <img src={`/images/stayNest_text_only.png`} className=" w-40" />
        </div>
        <div className="mt-11 px-10 cursor-pointer">
          <Swiper
            modules={[Autoplay]}
            className="custom-swiper top-swiper"
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              900: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            loop={true}
            freeMode={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={3000}
            initialSlide={-0}
          >
            {testimonials.map((testimonial) => {
              const reviewWords = testimonial.review.split(" ");
              const isLongReview = reviewWords.length > 40;

              return (
                <SwiperSlide key={testimonial.id}>
                  <div className="card text-start w-full">
                    <div
                      className="card-body bg-white p-6 border rounded-xl w-full"
                      style={{
                        boxShadow:
                          "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
                      }}
                    >
                      <div className="flex gap-4 items-center mb-3">
                        <div>
                          <img
                            src={testimonial.image}
                            className="w-14 h-14 rounded-full object-cover flex items-center justify-center"
                          />
                        </div>
                        <div>
                          <p className="font-medium text-xl">
                            {testimonial.name}
                          </p>
                          <p className="font-normal text-slate-400 text-sm">
                            {testimonial.room_availed}
                          </p>
                        </div>
                      </div>
                      {isLongReview ? (
                        <p>
                          {showFullReview[testimonial.id]
                            ? testimonial.review
                            : reviewWords.slice(0, 40).join(" ") + "..."}

                          <span
                            className="text-primary cursor-pointer font-bold ml-2 mt-3"
                            onClick={() => toggleFullReview(testimonial.id)}
                          >
                            {showFullReview[testimonial.id]
                              ? "See less"
                              : "See more"}
                          </span>
                        </p>
                      ) : (
                        <p>{testimonial.review}</p>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
