import React from "react";
import { useState, useEffect } from "react";
import blogsData from "../json/blogs.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    if (blogsData && Array.isArray(blogsData.blogs)) {
      setBlogs(blogsData.blogs);
    } else {
      console.error("Invalid JSON structure or data is missing!");
    }
  }, []);

  return (
    <section
      className="px-0 sm:px-7 relative h-[100vh] flex justify-start items-center"
      id="blogs"
      data-aos="fade-up"
    >
      <div className="relative w-full text-start">
        <div className="flex justify-between items-start flex-col md:flex-row md:items-center">
          <div className="text-start">
            <p className="font-semibold tracking-widest text-primary mb-3 px-10">
              BLOGS
            </p>
            <div className="px-10 flex items-center flex-col md:flex-row">
              <span className="text-left">
                Explore the Latest Stories and Updates from
              </span>
              <img
                src={`/images/stayNest_text_only.png`}
                className="w-40 md:ml-3 mt-3 md:mt-0 self-start md:self-center"
              />
            </div>
          </div>
          <div className="button-group px-10 py-3 md:px-0 md:py-0">
            <button
              className="primary-outline-btn p-3 rounded-full me-5"
              id="prev"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              className="primary-outline-btn p-3 rounded-full hover:primary-btn"
              id="next"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="mt-11 px-10">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              prevEl: "#prev",
              nextEl: "#next",
            }}
            allowTouchMove={false}
            breakpoints={{
              1040: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              746: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
          >
            {blogs.map((blog) => (
              <a href="" className="blog">
                <SwiperSlide key={blog.id} className="cursor-pointer</a>">
                  <div className="text-start">
                    <img
                      className="object-cover h-60 w-full rounded-t-lg"
                      style={{ objectPosition: "start" }}
                      src={blog.image}
                      alt={blog.alt}
                    />
                    <div className="py-3 w-full">
                      <h4 className="font-normal text-xs text-gray-400 mb-2">
                        {blog.read_duration}
                      </h4>
                      <p className="primary-black font-medium text-md mb-6">
                        {blog.title}
                      </p>
                      <p className="primary-black text-sm">
                        {blog.description}
                      </p>

                      <div className="flex items-center justify-between mt-5">
                        <div className="flex items-center">
                          <img
                            src={blog.author.image}
                            className="w-10 h-10 rounded-full me-3 bg-tertiary object-cover"
                          />
                          <div>
                            <p className="primary-black font-medium text-sm">
                              {blog.author.name}
                            </p>
                            <p className="text-gray-400 text-sm">{blog.date}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </a>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
