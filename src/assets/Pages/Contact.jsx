import React, { useState } from "react";

function Contact() {
  return (
    <section
      className="px-0 sm:px-7 relative md:h-[100vh] h-full my-8 flex justify-start items-center"
      id="contact"
      data-aos="fade-up"
    >
      <div className="flex justify-center w-full gap-7 p-2 flex-col md:flex-row">
        <div
          className="bg-white p-6 rounded-lg min-w-44"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
          }}
        >
          <p className="font-semibold tracking-widest text-primary mb-3">
            CONTACT US
          </p>
          <p className="font-normal text-slate-400 text-md mb-3">
            Reach out to us anytime for concerns.
          </p>
          <form action="" className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
              <div className="bg-white rounded-lg">
                <label className="primary-black text-sm font-normal">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full pl-4 py-2 mt-2 appearance-none bg-transparent outline-none border focus:border-blue-400 duration-300 shadow-sm rounded-md"
                />
              </div>
              <div className="bg-white rounded-lg">
                <label className="primary-black text-sm font-normal">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full pl-4 py-2 mt-2 appearance-none bg-transparent outline-none border focus:border-blue-400 duration-300 shadow-sm rounded-md"
                />
              </div>
            </div>
            <div className="bg-white rounded-lg mb-3">
              <label className="primary-black text-sm font-normal">
                Subject
              </label>
              <input
                type="text"
                placeholder="Enter subject here..."
                className="w-full pl-4 py-2 mt-2 appearance-none bg-transparent outline-none border focus:border-blue-400 duration-300 shadow-sm rounded-md"
              />
            </div>
            <div className="bg-white rounded-lg">
              <label className="primary-black text-sm font-normal">
                Message
              </label>
              <textarea
                placeholder="Leave us a message..."
                cols="50"
                rows="10"
                className="w-full pl-4 py-2 mt-2 appearance-none bg-transparent outline-none border focus:border-blue-400 duration-300 shadow-sm rounded-md"
              />
            </div>
            <button className="btn primary-btn font-medium py-3 px-11 rounded-full mt-3 w-full">
              Contact Us
            </button>
          </form>
        </div>
        <div className="relative ml-3 md:ml-0">
          {/* Give us a call */}
          <div className="contact-container call mb-5">
            <p className="font-medium primary-black text-lg mb-3">
              Give us a call
            </p>
            <p className="font-normal text-slate-400 text-md mb-3">
              Call us if you have further inquiries
            </p>
            <div className="flex items-center gap-3">
              <div
                className="p-3 rounded-full text-primary"
                style={{ width: "fit-content", backgroundColor: "#CFEEFF" }}
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
              </div>
              <span className="text-primary font-medium">+01-2345454-455</span>
            </div>
          </div>
          {/* Live chat and email */}
          <div className="contact-container live-chat-email mb-5">
            <p className="font-medium primary-black text-lg mb-3">Let’s chat</p>
            <p className="font-normal text-slate-400 text-md mb-3">
              Speak to us through our live chat and email
            </p>
            <div className="flex items-center gap-3 mb-3">
              <div
                className="p-3 rounded-full text-primary"
                style={{ width: "fit-content", backgroundColor: "#CFEEFF" }}
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
              </div>
              <span className="text-primary font-medium">Live Chat</span>
            </div>
            <div className="flex items-center gap-3">
              <div
                className="p-3 rounded-full text-primary"
                style={{ width: "fit-content", backgroundColor: "#CFEEFF" }}
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
              </div>
              <span className="text-primary font-medium">
                info@staynest.com
              </span>
            </div>
          </div>
          {/* Our Location */}
          <div className="contact-container our-location mb-5">
            <p className="font-medium primary-black text-lg mb-3">
              Our Location
            </p>
            <p className="font-normal text-slate-400 text-md mb-3">
              Check in at StayNest’s location
            </p>
            <div className="flex items-center gap-3">
              <div
                className="p-3 rounded-full text-primary"
                style={{ width: "fit-content", backgroundColor: "#CFEEFF" }}
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
              </div>
              <span className="text-primary font-medium">
                {" "}
                Isla Solara, Maldives
              </span>
            </div>
          </div>

          <div className="pt-0 md:pt-16">
            <p className="font-medium primary-black text-lg mb-3">
              Follow us on
            </p>
            <div className="social-links flex gap-3 flex-col md:flex-row">
              <a href="#">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 25"
                  fill="#0988D0"
                  xmlns="http://www.w3.org/2000/svg"
                  transform="rotate(0 0 0)"
                >
                  <path
                    d="M12 2.53906C17.5229 2.53906 22 7.01621 22 12.5391C22 17.5304 18.3431 21.6674 13.5625 22.4176V15.4297H15.8926L16.3359 12.5391L13.5625 12.5387V10.6632C13.5625 10.657 13.5625 10.6509 13.5626 10.6447C13.5626 10.6354 13.5628 10.6262 13.5629 10.6169C13.578 9.84259 13.9742 9.10156 15.1921 9.10156H16.4531V6.64062C16.4531 6.64062 15.3087 6.44492 14.2146 6.44492C11.966 6.44492 10.4842 7.78652 10.4386 10.2193C10.4379 10.2578 10.4375 10.2965 10.4375 10.3355V12.5387H7.89844V15.4293L10.4375 15.4297V22.4172C5.65686 21.667 2 17.5304 2 12.5391C2 7.01621 6.47715 2.53906 12 2.53906Z"
                    fill="#0988D0"
                  />
                </svg>
              </a>
              <a href="#">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="#0988D0"
                  xmlns="http://www.w3.org/2000/svg"
                  transform="rotate(0 0 0)"
                >
                  <path
                    d="M8.6672 12C8.6672 10.1591 10.1591 8.6664 12 8.6664C13.8409 8.6664 15.3336 10.1591 15.3336 12C15.3336 13.8409 13.8409 15.3336 12 15.3336C10.1591 15.3336 8.6672 13.8409 8.6672 12ZM6.86512 12C6.86512 14.836 9.164 17.1349 12 17.1349C14.836 17.1349 17.1349 14.836 17.1349 12C17.1349 9.164 14.836 6.86512 12 6.86512C9.164 6.86512 6.86512 9.164 6.86512 12ZM16.1382 6.66152C16.1381 6.89886 16.2084 7.13089 16.3401 7.32829C16.4719 7.52568 16.6593 7.67956 16.8785 7.77047C17.0977 7.86138 17.339 7.88525 17.5718 7.83904C17.8046 7.79283 18.0185 7.67862 18.1863 7.51087C18.3542 7.34311 18.4686 7.12934 18.515 6.89658C18.5614 6.66382 18.5377 6.42253 18.447 6.20322C18.3563 5.98392 18.2025 5.79644 18.0052 5.6645C17.808 5.53257 17.576 5.4621 17.3386 5.462H17.3382C17.02 5.46215 16.715 5.58856 16.49 5.81347C16.265 6.03837 16.1384 6.34339 16.1382 6.66152ZM7.96 20.1398C6.98504 20.0954 6.45512 19.933 6.10296 19.7958C5.63608 19.614 5.30296 19.3975 4.95272 19.0478C4.60248 18.698 4.38568 18.3652 4.20472 17.8983C4.06744 17.5463 3.90504 17.0162 3.86072 16.0413C3.81224 14.9872 3.80256 14.6706 3.80256 12.0001C3.80256 9.3296 3.81304 9.01384 3.86072 7.95888C3.90512 6.98392 4.06872 6.45488 4.20472 6.10184C4.38648 5.63496 4.60296 5.30184 4.95272 4.9516C5.30248 4.60136 5.63528 4.38456 6.10296 4.2036C6.45496 4.06632 6.98504 3.90392 7.96 3.8596C9.01408 3.81112 9.33072 3.80144 12 3.80144C14.6693 3.80144 14.9862 3.81192 16.0412 3.8596C17.0162 3.904 17.5452 4.0676 17.8982 4.2036C18.3651 4.38456 18.6982 4.60184 19.0485 4.9516C19.3987 5.30136 19.6147 5.63496 19.7965 6.10184C19.9338 6.45384 20.0962 6.98392 20.1405 7.95888C20.189 9.01384 20.1986 9.3296 20.1986 12.0001C20.1986 14.6706 20.189 14.9863 20.1405 16.0413C20.0961 17.0162 19.9329 17.5462 19.7965 17.8983C19.6147 18.3652 19.3982 18.6983 19.0485 19.0478C18.6987 19.3972 18.3651 19.614 17.8982 19.7958C17.5462 19.933 17.0162 20.0954 16.0412 20.1398C14.9871 20.1882 14.6705 20.1979 12 20.1979C9.32952 20.1979 9.01376 20.1882 7.96 20.1398ZM7.8772 2.06056C6.81264 2.10904 6.0852 2.27784 5.44992 2.52504C4.792 2.78032 4.23504 3.1228 3.67848 3.67848C3.12192 4.23416 2.78032 4.792 2.52504 5.44992C2.27784 6.0856 2.10904 6.81264 2.06056 7.8772C2.01128 8.94344 2 9.28432 2 12C2 14.7157 2.01128 15.0566 2.06056 16.1228C2.10904 17.1874 2.27784 17.9144 2.52504 18.5501C2.78032 19.2076 3.122 19.7661 3.67848 20.3215C4.23496 20.877 4.792 21.219 5.44992 21.475C6.0864 21.7222 6.81264 21.891 7.8772 21.9394C8.944 21.9879 9.28432 22 12 22C14.7157 22 15.0566 21.9887 16.1228 21.9394C17.1874 21.891 17.9144 21.7222 18.5501 21.475C19.2076 21.219 19.765 20.8772 20.3215 20.3215C20.8781 19.7658 21.219 19.2076 21.475 18.5501C21.7222 17.9144 21.8918 17.1874 21.9394 16.1228C21.9879 15.0558 21.9992 14.7157 21.9992 12C21.9992 9.28432 21.9879 8.94344 21.9394 7.8772C21.891 6.81256 21.7222 6.0852 21.475 5.44992C21.219 4.7924 20.8772 4.23504 20.3215 3.67848C19.7658 3.12192 19.2076 2.78032 18.5509 2.52504C17.9144 2.27784 17.1874 2.10824 16.1236 2.06056C15.0574 2.01208 14.7165 2 12.0008 2C9.28512 2 8.944 2.01128 7.8772 2.06056Z"
                    fill="#0988D0"
                  />
                  <path
                    d="M8.6672 12C8.6672 10.1591 10.1591 8.6664 12 8.6664C13.8409 8.6664 15.3336 10.1591 15.3336 12C15.3336 13.8409 13.8409 15.3336 12 15.3336C10.1591 15.3336 8.6672 13.8409 8.6672 12ZM6.86512 12C6.86512 14.836 9.164 17.1349 12 17.1349C14.836 17.1349 17.1349 14.836 17.1349 12C17.1349 9.164 14.836 6.86512 12 6.86512C9.164 6.86512 6.86512 9.164 6.86512 12ZM16.1382 6.66152C16.1381 6.89886 16.2084 7.13089 16.3401 7.32829C16.4719 7.52568 16.6593 7.67956 16.8785 7.77047C17.0977 7.86138 17.339 7.88525 17.5718 7.83904C17.8046 7.79283 18.0185 7.67862 18.1863 7.51087C18.3542 7.34311 18.4686 7.12934 18.515 6.89658C18.5614 6.66382 18.5377 6.42253 18.447 6.20322C18.3563 5.98392 18.2025 5.79644 18.0052 5.6645C17.808 5.53257 17.576 5.4621 17.3386 5.462H17.3382C17.02 5.46215 16.715 5.58856 16.49 5.81347C16.265 6.03837 16.1384 6.34339 16.1382 6.66152ZM7.96 20.1398C6.98504 20.0954 6.45512 19.933 6.10296 19.7958C5.63608 19.614 5.30296 19.3975 4.95272 19.0478C4.60248 18.698 4.38568 18.3652 4.20472 17.8983C4.06744 17.5463 3.90504 17.0162 3.86072 16.0413C3.81224 14.9872 3.80256 14.6706 3.80256 12.0001C3.80256 9.3296 3.81304 9.01384 3.86072 7.95888C3.90512 6.98392 4.06872 6.45488 4.20472 6.10184C4.38648 5.63496 4.60296 5.30184 4.95272 4.9516C5.30248 4.60136 5.63528 4.38456 6.10296 4.2036C6.45496 4.06632 6.98504 3.90392 7.96 3.8596C9.01408 3.81112 9.33072 3.80144 12 3.80144C14.6693 3.80144 14.9862 3.81192 16.0412 3.8596C17.0162 3.904 17.5452 4.0676 17.8982 4.2036C18.3651 4.38456 18.6982 4.60184 19.0485 4.9516C19.3987 5.30136 19.6147 5.63496 19.7965 6.10184C19.9338 6.45384 20.0962 6.98392 20.1405 7.95888C20.189 9.01384 20.1986 9.3296 20.1986 12.0001C20.1986 14.6706 20.189 14.9863 20.1405 16.0413C20.0961 17.0162 19.9329 17.5462 19.7965 17.8983C19.6147 18.3652 19.3982 18.6983 19.0485 19.0478C18.6987 19.3972 18.3651 19.614 17.8982 19.7958C17.5462 19.933 17.0162 20.0954 16.0412 20.1398C14.9871 20.1882 14.6705 20.1979 12 20.1979C9.32952 20.1979 9.01376 20.1882 7.96 20.1398ZM7.8772 2.06056C6.81264 2.10904 6.0852 2.27784 5.44992 2.52504C4.792 2.78032 4.23504 3.1228 3.67848 3.67848C3.12192 4.23416 2.78032 4.792 2.52504 5.44992C2.27784 6.0856 2.10904 6.81264 2.06056 7.8772C2.01128 8.94344 2 9.28432 2 12C2 14.7157 2.01128 15.0566 2.06056 16.1228C2.10904 17.1874 2.27784 17.9144 2.52504 18.5501C2.78032 19.2076 3.122 19.7661 3.67848 20.3215C4.23496 20.877 4.792 21.219 5.44992 21.475C6.0864 21.7222 6.81264 21.891 7.8772 21.9394C8.944 21.9879 9.28432 22 12 22C14.7157 22 15.0566 21.9887 16.1228 21.9394C17.1874 21.891 17.9144 21.7222 18.5501 21.475C19.2076 21.219 19.765 20.8772 20.3215 20.3215C20.8781 19.7658 21.219 19.2076 21.475 18.5501C21.7222 17.9144 21.8918 17.1874 21.9394 16.1228C21.9879 15.0558 21.9992 14.7157 21.9992 12C21.9992 9.28432 21.9879 8.94344 21.9394 7.8772C21.891 6.81256 21.7222 6.0852 21.475 5.44992C21.219 4.7924 20.8772 4.23504 20.3215 3.67848C19.7658 3.12192 19.2076 2.78032 18.5509 2.52504C17.9144 2.27784 17.1874 2.10824 16.1236 2.06056C15.0574 2.01208 14.7165 2 12.0008 2C9.28512 2 8.944 2.01128 7.8772 2.06056Z"
                    fill="#0988D0"
                  />
                </svg>
              </a>
              <a href="">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="#0988D0"
                  xmlns="http://www.w3.org/2000/svg"
                  transform="rotate(0 0 0)"
                >
                  <path
                    d="M17.7512 2.96094H20.818L14.1179 10.6187L22 21.0391H15.8284L10.9946 14.7191L5.4636 21.0391H2.39492L9.56132 12.8483L2 2.96094H8.32824L12.6976 8.73762L17.7512 2.96094ZM16.6748 19.2035H18.3742L7.40492 4.70014H5.58132L16.6748 19.2035Z"
                    fill="#0988D0"
                  />
                </svg>
              </a>
              <a href="">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="#0988D0"
                  xmlns="http://www.w3.org/2000/svg"
                  transform="rotate(0 0 0)"
                >
                  <path
                    d="M12.4381 2.01667C13.5298 2 14.6131 2.00833 15.6964 2C15.7631 3.27498 16.2214 4.57497 17.1548 5.47496C18.0881 6.39995 19.4047 6.82494 20.688 6.9666V10.3249C19.488 10.2832 18.2797 10.0332 17.1881 9.51656C16.7131 9.29991 16.2714 9.02491 15.8381 8.74157C15.8298 11.1749 15.8464 13.6082 15.8214 16.0332C15.7548 17.1998 15.3714 18.3581 14.6964 19.3164C13.6048 20.9164 11.7131 21.9581 9.7715 21.9914C8.57986 22.0581 7.38819 21.7331 6.37154 21.1331C4.68823 20.1414 3.50492 18.3248 3.32992 16.3748C3.31325 15.9582 3.30492 15.5415 3.32158 15.1332C3.47158 13.5499 4.25491 12.0332 5.47156 10.9999C6.85488 9.7999 8.78817 9.22491 10.5965 9.56656C10.6131 10.7999 10.5631 12.0332 10.5631 13.2665C9.73816 12.9999 8.77151 13.0749 8.04652 13.5749C7.52153 13.9165 7.12154 14.4415 6.91319 15.0332C6.7382 15.4582 6.7882 15.9248 6.79654 16.3748C6.99654 17.7415 8.31318 18.8914 9.71316 18.7665C10.6465 18.7581 11.5381 18.2165 12.0215 17.4248C12.1798 17.1498 12.3548 16.8665 12.3631 16.5415C12.4465 15.0498 12.4131 13.5665 12.4215 12.0749C12.4298 8.71657 12.4131 5.36661 12.4381 2.01667Z"
                    fill="#0988D0"
                  />
                </svg>
              </a>
              <a href="">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="#0988D0"
                  xmlns="http://www.w3.org/2000/svg"
                  transform="rotate(0 0 0)"
                >
                  <path
                    d="M21.5806 7.19355C21.3548 6.32258 20.6774 5.64516 19.8065 5.41935C18.2581 5 12 5 12 5C12 5 5.74194 5 4.19355 5.41935C3.32258 5.64516 2.64516 6.32258 2.41935 7.19355C2 8.77419 2 12 2 12C2 12 2 15.2581 2.41935 16.8065C2.64516 17.6774 3.32258 18.3548 4.19355 18.5806C5.74194 19 12 19 12 19C12 19 18.2581 19 19.8065 18.5806C20.6774 18.3548 21.3548 17.6774 21.5806 16.8065C22 15.2581 22 12 22 12C22 12 22 8.77419 21.5806 7.19355ZM10 15V9L15.1935 12L10 15Z"
                    fill="#0988D0"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
