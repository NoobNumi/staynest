import React from "react";

function footer() {
  return (
    <footer className="bg-primary text-white p-3 md:p-24">
      <div className="grid grid-cols-1 xl:grid-cols-3 justify-center w-full">
        <div className="contact mb-8">
          <p className="font-bold mb-4">Contact</p>
          <ul>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 mb-4"
                style={{ color: "#C1E1F3" }}
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
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
                <span className="font-medium">+01-2345454-455</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 mb-4"
                style={{ color: "#C1E1F3" }}
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
                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                  />
                </svg>
                <span className="font-medium">Live Chat</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 mb-4"
                style={{ color: "#C1E1F3" }}
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
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                <span className="font-medium">info@staynest.com</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 mb-4"
                style={{ color: "#C1E1F3" }}
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
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
                <span className="font-medium"> Isla Solara, Maldives</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="quick-links mb-8">
          <p className="font-bold mb-4">Quick Links</p>
          <ul>
            <li className="mb-3">
              <a
                href="#home"
                className="font-medium "
                style={{ color: "#C1E1F3" }}
              >
                Home
              </a>
            </li>
            <li className="mb-3">
              <a
                href="#about"
                className="font-medium"
                style={{ color: "#C1E1F3" }}
              >
                About
              </a>
            </li>
            <li className="mb-3">
              <a
                href="#rooms"
                className="font-medium"
                style={{ color: "#C1E1F3" }}
              >
                Rooms
              </a>
            </li>
            <li className="mb-3">
              <a
                href="#testimonials"
                className="font-medium"
                style={{ color: "#C1E1F3" }}
              >
                Testimonials
              </a>
            </li>
            <li className="mb-3">
              <a
                href="#faqs"
                className="font-medium"
                style={{ color: "#C1E1F3" }}
              >
                FAQs
              </a>
            </li>
            <li className="mb-3">
              <a
                href="#blogs"
                className="font-medium"
                style={{ color: "#C1E1F3" }}
              >
                Blogs
              </a>
            </li>
            <li className="mb-3">
              <a
                href="#contact"
                className="font-medium"
                style={{ color: "#C1E1F3" }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="newsletter mb-8">
          <p className="font-bold mb-4">Newsletter</p>
          <p className="mb-4">Receive updates and news about StayNest.</p>
          <form
            action="#"
            className="flex flex-col md:flex-row gap-3 bg-white w-full md:w-fit p-1 rounded-lg"
          >
            <input
              type="text"
              placeholder="Enter your email"
              className="bg-white border-0 outline-none primary-black ms-0 flex-1 p-5 md:ms-5 md:p-0"
            />
            <button className="bg-primary py-4 px-9 rounded-lg w-full md:w-auto">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div
        className="flex justify-between w-full mt-5 flex-col md:flex-row"
        style={{ borderTop: "1px solid #FFFFFF" }}
      >
        <img
          src="../images/stayNest_icon_text_light.png"
          alt=""
          srcset=""
          className="object-cover w-36 mt-4"
        />
        <div className="flex gap-3 items-center mt-4">
          <a href="">Terms</a>
          <a href="">Privacy</a>
          <a href="">Cookies</a>
        </div>
      </div>
    </footer>
  );
}

export default footer;
