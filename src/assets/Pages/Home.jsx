import React from "react";

const Home = () => {
  return (
    <section className="px-4 sm:px-7 pb-11" id="home" data-aos="fade-up">
      <div
        className="relative h-[80vh] rounded-lg bg-cover bg-center"
        style={{ backgroundImage: `url('/images/main_bg.jpg')` }}
      >
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#041D2C]/50 via-[#041D2C]/10 to-transparent"></div>

        <div className="relative w-auto xl:w-1/3 flex h-full items-center p-5 md:ps-7">
          <div className="text-left">
            <h1 className="text-white font-medium text-4xl md:text-6xl mb-5">
              Find Your Cozy
            </h1>
            <p className="text-white font-normal">
              Discover warm, welcoming spaces tailored for comfort, with all the
              convenience of seamless online booking.
            </p>
            <div className="btn-group flex flex-col sm:flex-row gap-3 mt-5">
              <button className="btn text-nowrap secondary-btn text-white font-medium py-3 px-11 rounded-md mt-5">
                Book Now
              </button>
              <button className="btn text-nowrap text-center bg-white text-secondary font-medium py-3 px-9 rounded-md mt-0 sm:mt-5 flex items-center justify-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
                  />
                </svg>
                <p>Watch Demo</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
