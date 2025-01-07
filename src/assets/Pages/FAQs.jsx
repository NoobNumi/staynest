import React, { useState, useRef } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import faqsData from "../json/faqs.json";
import parse from "html-react-parser";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const FAQs = () => {
  const [showAll, setShowAll] = useState(false);
  const [open, setOpen] = useState(null);
  const accordionRef = useRef(null); // Create a ref for the accordion container

  const handleOpen = (value) => setOpen(open === value ? null : value);

  const visibleFaqs = showAll ? faqsData.faqs : faqsData.faqs.slice(0, 5);

  return (
    <section
      className="px-0 sm:px-7 mt-11 pb-11 h-[100vh] relative flex justify-center items-center"
      data-aos="fade-up"
      id="faqs"
    >
      <div className="relative w-full rounded-lg">
        <div className="flex flex-col lg:flex-row justify-center items-center h-full gap-6">
          <img
            src={`../images/FAQs-pic.jpg`}
            alt="FAQs illustration"
            className="h-96 hidden md:block rounded-md"
          />
          <div className="w-auto xl:w-1/2 px-9 leading-relaxed">
            <p className="font-semibold tracking-widest text-primary mb-3">
              FAQs
            </p>
            <p className="font-normal text-slate-900 text-md mb-3">
              Have questions? These answers might help. If not, check out our
              <a href="#" className="text-primary font-medium ms-2 underline">
                How it Works
              </a>{" "}
              page for more details.
            </p>
            <div className="relative">
              <div
                ref={accordionRef} // Attach the ref here
                className={`max-w-full mx-auto px-0 md:px-5 h-72 ${
                  !showAll ? "overflow-y-hidden" : "overflow-y-auto"
                }`}
              >
                {visibleFaqs.map((faq, index) => (
                  <Accordion
                    key={index}
                    open={open === index}
                    icon={<Icon id={index} open={open} />}
                    className=""
                  >
                    <AccordionHeader
                      onClick={() => handleOpen(index)}
                      className="pb-0"
                    >
                      <div className="flex gap-3 items-center">
                        <div className="w-12 h-12 min-w-12 rounded-xl border border-slate-300 text-primary flex items-center justify-center">
                          <img src={faq.icon.image} alt="" />
                        </div>
                        <p className="font-medium text-sm md:text-lg">
                          {faq.question}
                        </p>
                      </div>
                    </AccordionHeader>
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        open === index ? "max-h-[1000px]" : "max-h-0"
                      }`}
                    >
                      <AccordionBody>
                        <p className="text-lg py-0 ps-14">
                          {parse(faq.answer)}
                        </p>
                      </AccordionBody>
                    </div>
                  </Accordion>
                ))}
              </div>
              {faqsData.faqs.length > 5 && (
                <>
                  {!showAll && (
                    <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent flex justify-center items-end pointer-events-none">
                      <button
                        onClick={() => setShowAll(true)}
                        className="btn primary-btn font-medium py-4 px-11 rounded-full relative pointer-events-auto"
                      >
                        Load More
                      </button>
                    </div>
                  )}
                  {showAll && (
                    <div className="flex justify-center mt-6">
                      <button
                        onClick={() => {
                          setShowAll(false);
                          // Scroll the accordion container to the top
                          if (accordionRef.current) {
                            accordionRef.current.scrollTo({
                              top: 0,
                              behavior: "smooth",
                            });
                          }
                        }}
                        className="btn primary-btn font-medium py-4 px-11 rounded-full"
                      >
                        See Less
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
