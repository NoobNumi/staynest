const About = () => {
  return (
    <section
      className="px-0 sm:px-7 h-[100vh] relative flex justify-center items-center"
      id="about"
      data-aos="fade-up"
    >
      <div className="relative w-full rounded-lg">
        <div className="flex flex-col md:flex-row justify-center items-center h-full gap-6">
          <div className="w-auto xl:w-1/2 px-9 leading-relaxed">
            <p className="font-semibold tracking-widest text-primary mb-3">
              ABOUT
            </p>
            <p className="font-medium text-slate-900 text-2xl mb-3">
              Welcome to StayNest
            </p>
            <p>
              Located on the serene shores of the fictional Isla Solara,
              StayNest is a tranquil island resort offering cozy, charming
              retreats for travelers seeking relaxation and adventure. With
              breathtaking ocean views, lush landscapes, and the convenience of
              easy online booking, StayNest is your ideal getaway – a warm haven
              where every stay feels like home.
            </p>
            <p className="mt-3">
              Founded by CEO Tim Solara, StayNest blends natural beauty with
              modern convenience, creating a seamless, welcoming getaway where
              every guest feels right at home.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="flex gap-4 items-center mt-9">
                <div className="text-white">
                  <div className="w-14 h-14 rounded-full primary-btn flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="font-normal text-xl">Isla Solara</p>
                  <p className="font-normal">Located at Maldives</p>
                </div>
              </div>

              <div className="flex gap-4 items-center mt-9">
                <div>
                  <img
                    src={`/images/man_owner.jpg`}
                    className="w-14 h-14 rounded-full object-cover flex items-center justify-center"
                  />
                </div>
                <div>
                  <p className="font-normal text-xl">Tim Solara</p>
                  <p className="font-normal">CEO and Founder</p>
                </div>
              </div>
            </div>
          </div>
          <img
            src={`/images/about-img.png`}
            alt=""
            srcset=""
            className="h-96 hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
