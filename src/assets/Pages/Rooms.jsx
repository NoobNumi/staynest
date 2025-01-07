import React from "react";
import { useState, useEffect } from "react";
import roomsData from "../json/rooms.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    if (roomsData && Array.isArray(roomsData.rooms)) {
      setRooms(roomsData.rooms);
    } else {
      console.error("Invalid JSON structure or data is missing!");
    }
  }, []);

  return (
    <section
      className="px-0 sm:px-7 relative h-[100vh] flex justify-center items-center"
      id="rooms"
      data-aos="fade-up"
    >
      <div className="relative w-full text-center">
        <p className="font-semibold tracking-widest text-primary mb-3">ROOMS</p>
        <div className="mx-auto max-w-lg p-9">
          We provide a variety of room options tailored to accommodate groups of
          all sizes. Whether you're traveling solo, as a couple, with family, or
          as part of a large group, we have the perfect room to suit your needs
          and ensure a comfortable stay.
        </div>
        <button className="btn text-nowrap secondary-btn text-white font-medium py-3 px-11 rounded-full mt-5">
          View All
        </button>
        <div className="mt-11 px-10">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
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
            {rooms.map((room) => (
              <SwiperSlide key={room.id}>
                <div className="card text-start">
                  <img
                    className="card-img-top rounded-t-lg object-cover h-60 w-full"
                    src={room.image}
                    alt={room.alt}
                  />
                  <div
                    className="card-body bg-white p-3 border rounded-b-lg"
                    style={{
                      boxShadow:
                        "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
                    }}
                  >
                    <h4 className="card-title font-medium text-xl">
                      {room.name}
                    </h4>
                    <p className="card-text">
                      <span className="text-primary font-medium text-lg">
                        ${room.price}
                      </span>
                      <span className="text-slate-300 text-sm"> / night</span>
                    </p>
                    <button className="btn primary-outline-btn px-6 py-2 mt-4 rounded-md font-medium">
                      Book Now
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
