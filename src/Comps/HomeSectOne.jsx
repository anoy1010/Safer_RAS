'use client'

import React, { useCallback, useRef } from "react";
import { Carousel } from "flowbite-react";

const HomeSectOne = () => {

        const sliderRef = useRef(null);
      
        const handlePrev = useCallback(() => {
          if (!sliderRef.current) return;
          sliderRef.current.swiper.slidePrev();
        }, []);
      
        const handleNext = useCallback(() => {
          if (!sliderRef.current) return;
          sliderRef.current.swiper.slideNext();
        }, []);

  return (
    <div>
      <div className="bg-gradient-to-b from-indigo-800 to-black">
        <div className="container m-auto px-6 py-20 md:px-12 lg:px-20">
          <div className="m-auto text-center lg:w-8/12 xl:w-7/12">
            <h2 className="text-3xl text-white font-bold md:text-5xl">
              All-in-one security solution
            </h2>
          </div>
          <div className="mt-12 m-auto -space-y-4 items-center justify-center md:flex md:space-y-0 md:-space-x-4 xl:w-11/12">
            <div className="relative z-10 -mx-4 group md:w-7/14 md:mx-0 lg:w-5/14">
              <div
                aria-hidden="true"
                className="absolute top-0 w-full h-full rounded-2xl bg-white shadow-xl transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"
              ></div>
              <div className="relative p-6 space-y-6 lg:p-8">
                <h3 className="text-3xl text-gray-700 font-semibold text-center">
                  Nos appareils
                </h3>
                <ul
                  role="list"
                  className="w-max space-y-4 py-6 m-auto text-gray-600"
                >
                  <li className="space-x-2">
                    <span className="text-indigo-500 font-semibold">
                      &check;
                    </span>
                    <span>First premium advantage</span>
                  </li>
                  <li className="space-x-2">
                    <span className="text-indigo-500 font-semibold">
                      &check;
                    </span>
                    <span>Second advantage weekly</span>
                  </li>
                  <li className="space-x-2">
                    <span className="text-indigo-500 font-semibold">
                      &check;
                    </span>
                    <span>Third advantage donate to project</span>
                  </li>
                </ul>
                <p className="text-gray-700 text-center w-[350px]">
                  Team can be any size, and you can add or switch members as
                  needed. Companies using our platform include:
                </p>
                <div className="mt-6 flex justify-around gap-6 items-center">
                  <img
                    className="w-16 lg:w-24"
                    src="https://tailus.io/sources/blocks/organization/preview/images/clients/airbnb.svg"
                    loading="lazy"
                    alt="airbnb"
                  />
                  <img
                    className="w-8 lg:w-16"
                    src="https://tailus.io/sources/blocks/organization/preview/images/clients/bissell.svg"
                    loading="lazy"
                    alt="bissell"
                  />
                  <img
                    className="w-6 lg:w-12"
                    src="https://tailus.io/sources/blocks/organization/preview/images/clients/ge.svg"
                    loading="lazy"
                    alt="ge"
                  />
                  <img
                    className="w-20 lg:w-28"
                    src="https://tailus.io/sources/blocks/organization/preview/images/clients/microsoft.svg"
                    loading="lazy"
                    alt="microsoft"
                  />
                </div>
                <button
                  type="submit"
                  title="Submit"
                  className="block w-full py-3 px-6 text-center rounded-xl transition bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 focus:bg-indigo-600"
                >
                  <span className="text-white font-semibold">
                    Voir nos appareils
                  </span>
                </button>
              </div>
            </div>

            <div className="relative group md:w-7/14 lg:w-9/14">
              <div
                aria-hidden="true"
                className="absolute top-0 w-full h-full rounded-2xl bg-white shadow-lg transition duration-500 group-hover:scale-105"
              ></div>
              <div className="relative p-6 pt-16 md:p-8 md:pl-12 md:rounded-r-2xl lg:pl-20 lg:p-16">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/M5EgkLytYbA?si=GTynPTPYj9bbKFGT&autoplay=1&loop=1"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 m-auto">
          <div className="m-auto text-center lg:w-8/12 xl:w-7/12">
            <h2 className="text-3xl text-white mb-12 font-bold md:text-5xl">
              All-in-one security solution
            </h2>
          </div>
          <div className="flex items-center justify-center min-h-screen">
            <div className="w-1/2 max-w-2xl  mx-auto bg-white rounded-3xl shadow-xl overflow-hidden ">
              <div className="max-w-2xl h-auto mx-auto relative">
                <img
                  src="https://camera-infrarouge.eu/wp-content/uploads/2023/01/comment-savoir-si-mon-voisin-a-une-camera-scaled.jpg"
                  alt=""
                  className="h-full w-full"
                />
                <div className="p-4 sm:p-6 absolute bottom-0 ">
                  <p className="font-bold text-white text-3xl leading-7 mb-1 max-w-md">
                    build your own securtiy system
                  </p>

                  <p className="text-white font-[15px] mt-6">
                    Our shrimp sauce is made with mozarella, a creamy taste of
                    shrimp with extra kick of spices.
                  </p>

                  <div className="flex justify-center">
                    <a
                      target="_blank"
                      href="foodiesapp://food/1001"
                      className="block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center text-white capitalize transition-colors duration-300 transform bg-indigo-600 rounded-[14px] hover:bg-indigo-800 focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80 max-w-md "
                    >
                      start now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 max-w-2xl  mx-auto bg-white rounded-3xl shadow-xl overflow-hidden ">
              <div className="max-w-2xl h-auto mx-auto relative">
                <img
                  src="https://camera-infrarouge.eu/wp-content/uploads/2023/01/comment-savoir-si-mon-voisin-a-une-camera-scaled.jpg"
                  alt=""
                  className="h-full w-full "
                />
                <div className="p-4 sm:p-6 absolute bottom-0 ">
                  <p className="font-bold text-white text-3xl leading-7 mb-1 max-w-md">
                    build your own securtiy system
                  </p>

                  <p className="text-white font-[15px] mt-6">
                    Our shrimp sauce is made with mozarella, a creamy taste of
                    shrimp with extra kick of spices.
                  </p>

                  <div className="flex justify-center">
                    <a
                      target="_blank"
                      href="foodiesapp://food/1001"
                      className="block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center text-white capitalize transition-colors duration-300 transform bg-indigo-600 rounded-[14px] hover:bg-indigo-800 focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80 max-w-md "
                    >
                      start now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <section className="relative py-12 max-w-screen-xl mx-auto h-screen py-4 px-4 md:py-20 md:px-8">
          <div className="m-auto text-center lg:w-8/12 xl:w-7/12">
            <h2 className="text-3xl mb-12 font-bold md:text-5xl">
              All-in-one security solution
            </h2>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-white opacity-40"></div>
          <div className="relative z-10 gap-5 items-center lg:flex">
            <div className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
              <h3 className="text-3xl text-gray-800 font-semibold md:text-4xl">
                build your websites with{" "}
                <span className="text-indigo-600">high performance</span>
              </h3>
              <p className="text-gray-500 leading-relaxed mt-3">
                Nam erat risus, sodales sit amet lobortis ut, finibus eget
                metus. Cras aliquam ante ut tortor posuere feugiat. Duis sodales
                nisi id porta lacinia. <br />
                Nam erat risus, sodales sit amet lobortis ut, finibus eget
                metus. Cras aliquam ante ut tortor posuere feugiat. Duis sodales
                nisi id porta lacinia.
                <ber />
                Nam erat risus, sodales sit amet lobortis ut, finibus eget
                metus. Cras aliquam ante ut tortor posuere feugiat. Duis sodales
                nisi id porta lacinia.
              </p>
              <a
                className="mt-5 px-4 py-2 text-indigo-600 font-medium bg-indigo-50 rounded-full inline-flex items-center"
                href="javascript:void()"
              >
                Try it out
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 ml-1 duration-150"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
            <div className="flex-1 mt-5 mx-auto sm:w-9/12 lg:mt-0 lg:w-auto">
              <img
                src="https://roohome.com/wp-content/uploads/2022/06/home-security-camera.jpg"
                alt=""
                className="w-full"
              />
            </div>
          </div>
        </section>
      </div>
      <div>
        <div className="m-auto text-center lg:w-8/12 xl:w-7/12">
          <h2 className="text-3xl mb-12 font-bold md:text-5xl">
            All-in-one security solution
          </h2>
        </div>
        <div className="flex flex-row  gap-x-8 container m-auto px-6 py-20 md:px-12 lg:px-20">
          <div className="w-1/2 h-auto mb-4">
            <h3 className="text-xl text-center mb-2  md:text-3xl">
              All-in-one security solution
            </h3>
            <p className="text-indigo-400 font-semibold text-center cursor-pointer">
              {" "}
              discovery the latest 4k battery seriees{" "}
            </p>
            <div className="h-56 py-4 sm:h-64 xl:h-80 2xl:h-96">
              <Carousel>
                <img
                  src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                  alt="..."
                />
                <img
                  src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                  alt="..."
                />
                <img
                  src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                  alt="..."
                />
                <img
                  src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                  alt="..."
                />
                <img
                  src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                  alt="..."
                />
              </Carousel>
            </div>
          </div>
          <div className="w-1/2 h-auto mb-4">
            <h3 className="text-xl text-center mb-2  md:text-3xl">
              All-in-one security solution
            </h3>
            <p className="text-indigo-400 font-semibold text-center cursor-pointer">
              {" "}
              discovery the latest 4k battery seriees{" "}
            </p>
            <div className="h-56 py-4 sm:h-64 xl:h-80 2xl:h-96">
              <Carousel>
                <img
                  src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                  alt="..."
                />
                <img
                  src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                  alt="..."
                />
                <img
                  src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                  alt="..."
                />
                <img
                  src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                  alt="..."
                />
                <img
                  src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                  alt="..."
                />
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      <div>
      <section className="pb-4 pt-4 dark:bg-dark lg:pb-[60px] lg:pt-[60px]">
        <div className="m-auto text-center lg:w-8/12 xl:w-7/12">
            <h2 className="text-3xl mb-12 font-bold md:text-5xl">
              the <span className="text-indigo-600"> SAFE</span> partners
            </h2>
        </div>
        <div className="container mx-auto">
          
            <Carousel>
              <SingleTestimonial
                image="https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/image-01.jpg"
                reviewImg="https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/lineicon.svg"
                reviewAlt="lineicon"
                details="Velit est sit voluptas eum sapiente omnis! Porro, impedit minus quam reprehenderit tempore sint quaerat id! Mollitia perspiciatis est asperiores commodi labore!"
                name="Larry Diamond"
                position="Chief Executive Officer."
              />
              <SingleTestimonial
                image="https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/image-01.jpg"
                reviewImg="https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/lineicon.svg"
                reviewAlt="lineicon"
                details="Velit est sit voluptas eum sapiente omnis! Porro, impedit minus quam reprehenderit tempore sint quaerat id! Mollitia perspiciatis est asperiores commodi labore!"
                name="Larry Diamond"
                position="Chief Executive Officer."
              />
            </Carousel>
            <div className="absolute left-0 right-0 z-10 flex items-center justify-center gap-5 sm:bottom-0">
              <div className="prev-arrow cursor-pointer" onClick={handlePrev}>
                <button className="d flex h-[60px] w-[60px] items-center justify-center rounded-full border border-stroke bg-white text-dark transition-all hover:border-transparent hover:drop-shadow-testimonial dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:hover:drop-shadow-none">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                  >
                    <path
                      d="M17.5 9.5H4.15625L9.46875 4.09375C9.75 3.8125 9.75 3.375 9.46875 3.09375C9.1875 2.8125 8.75 2.8125 8.46875 3.09375L2 9.65625C1.71875 9.9375 1.71875 10.375 2 10.6562L8.46875 17.2188C8.59375 17.3438 8.78125 17.4375 8.96875 17.4375C9.15625 17.4375 9.3125 17.375 9.46875 17.25C9.75 16.9687 9.75 16.5313 9.46875 16.25L4.1875 10.9062H17.5C17.875 10.9062 18.1875 10.5937 18.1875 10.2187C18.1875 9.8125 17.875 9.5 17.5 9.5Z"
                      fill=""
                    />
                  </svg>
                </button>
              </div>
              <div className="next-arrow cursor-pointer" onClick={handleNext}>
                <button className="d flex h-[60px] w-[60px] items-center justify-center rounded-full border border-stroke bg-white text-dark transition-all hover:border-transparent hover:drop-shadow-testimonial dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:hover:drop-shadow-none">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                  >
                    <path
                      d="M18 9.6875L11.5312 3.125C11.25 2.84375 10.8125 2.84375 10.5312 3.125C10.25 3.40625 10.25 3.84375 10.5312 4.125L15.7812 9.46875H2.5C2.125 9.46875 1.8125 9.78125 1.8125 10.1562C1.8125 10.5312 2.125 10.875 2.5 10.875H15.8437L10.5312 16.2813C10.25 16.5625 10.25 17 10.5312 17.2813C10.6562 17.4063 10.8437 17.4688 11.0312 17.4688C11.2187 17.4688 11.4062 17.4062 11.5312 17.25L18 10.6875C18.2812 10.4062 18.2812 9.96875 18 9.6875Z"
                      fill=""
                    />
                  </svg>
                </button>
              </div>
            </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default HomeSectOne;

const SingleTestimonial = ({
    image,
    reviewImg,
    reviewAlt,
    details,
    name,
    position,
  }) => {
    return (
      <div className="relative flex justify-center">
        <div className="relative w-full pb-16 md:w-11/12 lg:w-10/12 xl:w-8/12">
          <div className="w-full items-center md:flex">
            <div className="relative mb-12 w-full max-w-[310px] md:mb-0 md:mr-12 md:max-w-[250px] lg:mr-14 lg:max-w-[280px] 2xl:mr-16">
              <img src={image} alt="image" className="w-full" />
              <span className="absolute -left-6 -top-6 z-[-1] hidden sm:block">
                <DotShape />
              </span>
              <span className="absolute -bottom-6 -right-6 z-[-1]">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 32C3 15.9837 15.9837 3 32 3C48.0163 2.99999 61 15.9837 61 32C61 48.0163 48.0163 61 32 61C15.9837 61 3 48.0163 3 32Z"
                    stroke="#13C296"
                    strokeWidth="6"
                  />
                </svg>
              </span>
            </div>
            <div className="w-full">
              <div>
                <div className="mb-7">
                  <img src={reviewImg} alt={reviewAlt} />
                </div>
  
                <p className="mb-11 text-base font-normal italic leading-[1.81] text-body-color dark:text-dark-6 sm:text-[22px]">
                  {details}
                </p>
  
                <h4 className="mb-2 text-[22px] font-semibold leading-[27px] text-dark dark:text-white">
                  {name}
                </h4>
                <p className="text-base text-body-color dark:text-dark-6">
                  {position}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  const DotShape = () => {
    return (
      <>
        <svg
          width="77"
          height="77"
          viewBox="0 0 77 77"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="1.66343"
            cy="74.5221"
            r="1.66343"
            transform="rotate(-90 1.66343 74.5221)"
            fill="#3056D3"
          />
          <circle
            cx="1.66343"
            cy="30.94"
            r="1.66343"
            transform="rotate(-90 1.66343 30.94)"
            fill="#3056D3"
          />
          <circle
            cx="16.3016"
            cy="74.5221"
            r="1.66343"
            transform="rotate(-90 16.3016 74.5221)"
            fill="#3056D3"
          />
          <circle
            cx="16.3016"
            cy="30.94"
            r="1.66343"
            transform="rotate(-90 16.3016 30.94)"
            fill="#3056D3"
          />
          <circle
            cx="30.9398"
            cy="74.5221"
            r="1.66343"
            transform="rotate(-90 30.9398 74.5221)"
            fill="#3056D3"
          />
          <circle
            cx="30.9398"
            cy="30.94"
            r="1.66343"
            transform="rotate(-90 30.9398 30.94)"
            fill="#3056D3"
          />
          <circle
            cx="45.578"
            cy="74.5221"
            r="1.66343"
            transform="rotate(-90 45.578 74.5221)"
            fill="#3056D3"
          />
          <circle
            cx="45.578"
            cy="30.94"
            r="1.66343"
            transform="rotate(-90 45.578 30.94)"
            fill="#3056D3"
          />
          <circle
            cx="60.2162"
            cy="74.5216"
            r="1.66343"
            transform="rotate(-90 60.2162 74.5216)"
            fill="#3056D3"
          />
          <circle
            cx="74.6634"
            cy="74.5216"
            r="1.66343"
            transform="rotate(-90 74.6634 74.5216)"
            fill="#3056D3"
          />
          <circle
            cx="60.2162"
            cy="30.9398"
            r="1.66343"
            transform="rotate(-90 60.2162 30.9398)"
            fill="#3056D3"
          />
          <circle
            cx="74.6634"
            cy="30.9398"
            r="1.66343"
            transform="rotate(-90 74.6634 30.9398)"
            fill="#3056D3"
          />
          <circle
            cx="1.66343"
            cy="59.8839"
            r="1.66343"
            transform="rotate(-90 1.66343 59.8839)"
            fill="#3056D3"
          />
          <circle
            cx="1.66343"
            cy="16.3017"
            r="1.66343"
            transform="rotate(-90 1.66343 16.3017)"
            fill="#3056D3"
          />
          <circle
            cx="16.3016"
            cy="59.8839"
            r="1.66343"
            transform="rotate(-90 16.3016 59.8839)"
            fill="#3056D3"
          />
          <circle
            cx="16.3016"
            cy="16.3017"
            r="1.66343"
            transform="rotate(-90 16.3016 16.3017)"
            fill="#3056D3"
          />
          <circle
            cx="30.9398"
            cy="59.8839"
            r="1.66343"
            transform="rotate(-90 30.9398 59.8839)"
            fill="#3056D3"
          />
          <circle
            cx="30.9398"
            cy="16.3017"
            r="1.66343"
            transform="rotate(-90 30.9398 16.3017)"
            fill="#3056D3"
          />
          <circle
            cx="45.578"
            cy="59.8839"
            r="1.66343"
            transform="rotate(-90 45.578 59.8839)"
            fill="#3056D3"
          />
          <circle
            cx="45.578"
            cy="16.3017"
            r="1.66343"
            transform="rotate(-90 45.578 16.3017)"
            fill="#3056D3"
          />
          <circle
            cx="60.2162"
            cy="59.8839"
            r="1.66343"
            transform="rotate(-90 60.2162 59.8839)"
            fill="#3056D3"
          />
          <circle
            cx="74.6634"
            cy="59.8839"
            r="1.66343"
            transform="rotate(-90 74.6634 59.8839)"
            fill="#3056D3"
          />
          <circle
            cx="60.2162"
            cy="16.3017"
            r="1.66343"
            transform="rotate(-90 60.2162 16.3017)"
            fill="#3056D3"
          />
          <circle
            cx="74.6634"
            cy="16.3017"
            r="1.66343"
            transform="rotate(-90 74.6634 16.3017)"
            fill="#3056D3"
          />
          <circle
            cx="1.66343"
            cy="45.2455"
            r="1.66343"
            transform="rotate(-90 1.66343 45.2455)"
            fill="#3056D3"
          />
          <circle
            cx="1.66343"
            cy="1.66342"
            r="1.66343"
            transform="rotate(-90 1.66343 1.66342)"
            fill="#3056D3"
          />
          <circle
            cx="16.3016"
            cy="45.2455"
            r="1.66343"
            transform="rotate(-90 16.3016 45.2455)"
            fill="#3056D3"
          />
          <circle
            cx="16.3016"
            cy="1.66342"
            r="1.66343"
            transform="rotate(-90 16.3016 1.66342)"
            fill="#3056D3"
          />
          <circle
            cx="30.9398"
            cy="45.2455"
            r="1.66343"
            transform="rotate(-90 30.9398 45.2455)"
            fill="#3056D3"
          />
          <circle
            cx="30.9398"
            cy="1.66342"
            r="1.66343"
            transform="rotate(-90 30.9398 1.66342)"
            fill="#3056D3"
          />
          <circle
            cx="45.578"
            cy="45.2455"
            r="1.66343"
            transform="rotate(-90 45.578 45.2455)"
            fill="#3056D3"
          />
          <circle
            cx="45.578"
            cy="1.66344"
            r="1.66343"
            transform="rotate(-90 45.578 1.66344)"
            fill="#3056D3"
          />
          <circle
            cx="60.2162"
            cy="45.2458"
            r="1.66343"
            transform="rotate(-90 60.2162 45.2458)"
            fill="#3056D3"
          />
          <circle
            cx="74.6634"
            cy="45.2458"
            r="1.66343"
            transform="rotate(-90 74.6634 45.2458)"
            fill="#3056D3"
          />
          <circle
            cx="60.2162"
            cy="1.66371"
            r="1.66343"
            transform="rotate(-90 60.2162 1.66371)"
            fill="#3056D3"
          />
          <circle
            cx="74.6634"
            cy="1.66371"
            r="1.66343"
            transform="rotate(-90 74.6634 1.66371)"
            fill="#3056D3"
          />
        </svg>
      </>
    );
  };
