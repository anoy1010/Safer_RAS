"use client";

import React, { useState } from "react";
import Carousel from 'better-react-carousel'

import Image from "next/image";
import { FaHeart, FaWallet } from "react-icons/fa";
import { IoPricetagSharp } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Products() {
  const [images, setImages] = useState({
    img1: "https://media.adeo.com/marketplace/LMFR/82800343/db50ec75-d783-4036-ac39-9a07f92541ba.jpeg?width=3000&height=3000&format=jpg&quality=80&fit=bounds",
    img2: "https://m.media-amazon.com/images/I/712PtgFi3bL.jpg",
    img3: "https://htpratique.com/wp-content/uploads/2020/11/camera-de-surveillance-exterieur.jpg",
  });
  const [activeImg, setActiveImage] = useState(images.img1);
  const [amount, setAmount] = useState(1);
  const [couleurRouge, setCouleurRouge] = useState(false);

  const initialPrice = 25000;
  const [price, setPrice] = useState(initialPrice);
  const updateAmount = (newAmount) => {
    setAmount(newAmount);
    // Mettez à jour le prix en fonction de la nouvelle quantité
    setPrice(initialPrice * newAmount);
  };

  const [activeTab, setActiveTab] = useState("profile");
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  const tabVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const title1 = "Camera de Sécurité";
  const title2 = "Protégez ce qui vous est cher avec nos caméras de sécurité";

  const handleClick = () => {
    // Mettez à jour l'état pour activer la couleur rouge après le clic
    setCouleurRouge(!couleurRouge);
  };

  return (
    <>
      <div className="py-12">
        <div className="flex flex-col py-4 text-center gap-y-4 items-center justify-center">
          <h1 className="text-4xl font-bold uppercase">{title1}</h1>
          <h3 className="text-xl font-medium">{title2}</h3>
        </div>
        <div className="flex flex-col justify-center lg:flex-row lg:items-center gap-16 p-8">
          <div className="flex flex-col gap-6 lg:w-1/4">
            <img
              src={activeImg}
              alt=""
              className="w-full h-full aspect-square object-cover "
            />
            <div className="flex flex-row justify-between h-24">
              <img
                src={images.img1}
                alt=""
                className="cursor-pointer w-24 h-24"
                onClick={() => setActiveImage(images.img1)}
              />
              <img
                src={images.img2}
                alt=""
                className="cursor-pointer w-24 h-24"
                onClick={() => setActiveImage(images.img2)}
              />
              <img
                src={images.img3}
                alt=""
                className="cursor-pointer w-24 h-24"
                onClick={() => setActiveImage(images.img3)}
              />
            </div>
          </div>

          <div className="flex flex-col justify-between gap-4 lg:w-2/4 ">
            <div>
              <span className="font-bold text-indigo-600 uppercase">
                {" "}
                Special camera
              </span>
              <h1 className="text-4xl font-bold capitalize">
                camera wiksonn haute précision
              </h1>
            </div>
            <div className="flex flex-col justify-between">
              <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
                <ul
                  className="flex flex-wrap -mb-px text-sm font-medium text-center"
                  id="default-tab"
                  role="tablist"
                >
                  <li className="me-2" role="presentation">
                    <button
                      className={`inline-block p-4 border-b-2 rounded-t-lg ${
                        activeTab === "profile" ? "border-gray-800" : ""
                      }`}
                      id="profile-tab"
                      onClick={() => handleTabClick("profile")}
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected={activeTab === "profile"}
                    >
                      Description
                    </button>
                  </li>
                  <li className="me-2" role="presentation">
                    <button
                      className={`inline-block p-4 border-b-2 rounded-t-lg ${
                        activeTab === "Caractéristiques"
                          ? "border-gray-800"
                          : ""
                      }`}
                      id="Caractéristiques-tab"
                      onClick={() => handleTabClick("Caractéristiques")}
                      type="button"
                      role="tab"
                      aria-controls="Caractéristiques"
                      aria-selected={activeTab === "Caractéristiques"}
                    >
                      Caractéristiques
                    </button>
                  </li>
                  <li className="me-2" role="presentation">
                    <button
                      className={`inline-block p-4 border-b-2 rounded-t-lg ${
                        activeTab === "média" ? "border-gray-800" : ""
                      }`}
                      id="média-tab"
                      onClick={() => handleTabClick("média")}
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected={activeTab === "média"}
                    >
                      média
                    </button>
                  </li>
                  <li className="me-2" role="presentation">
                    <button
                      className={`inline-block p-4 border-b-2 rounded-t-lg ${
                        activeTab === "avis" ? "border-gray-800" : ""
                      }`}
                      id="avis-tab"
                      onClick={() => handleTabClick("avis")}
                      type="button"
                      role="tab"
                      aria-controls="avis"
                      aria-selected={activeTab === "avis"}
                    >
                      avis
                    </button>
                  </li>
                </ul>

                <AnimatePresence exitBeforeEnter={false}>
                  <motion.div
                    key={activeTab}
                    variants={tabVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ ease: "easeInOut", duration: 0.5 }}
                    className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                    role="tabpanel"
                    aria-labelledby={`${activeTab}-tab`}
                  >
                    <p className="text-sm w-[70%] text-gray-500 dark:text-gray-400">
                      This is some placeholder content the Profile 
                      associated content. Clicking another tab will toggle the
                      visibility of this one for the next. The tab JavaScript
                      swaps classes to control the content visibility and
                      styling.
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex flex-row gap-4 mb-4 items-center">
                <IoPricetagSharp className="flex items-center w-5.5 h-5.5 me-2 text-2xl" />
                <h6 className="text-2xl font-semibold"> {price} Fcfa</h6>
              </div>
              <div className="flex flex-col sm:flex-col items-start justify-between mb-4">
                <div className="flex flex-row items-center gap-4 mb-4">
                  <button
                    type=""
                    className="bg-white ring-black ring-1 hover:ring-2 py-1 px-1 sm:px-4 text-black text-3xl"
                    onClick={() => updateAmount(amount - 1)}
                  >
                    {" "}
                    -{" "}
                  </button>
                  <span className="py-4 px-6 sm:px-2 rounded-lg">{amount}</span>
                  <button
                    type=""
                    className="bg-white ring-black ring-1 hover:ring-2 py-1 px-1 sm:px-4 text-black text-3xl"
                    onClick={() => updateAmount(amount + 1)}
                  >
                    {" "}
                    +{" "}
                  </button>
                </div>
                <div className="flex gap-x-8">
                  <button
                    type=""
                    className="text-white bg-indigo-600 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm  px-12 py-2.5 text-center inline-flex items-center me-2 dark:bg-inigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                  >
                    <svg
                      className="w-3.5 h-3.5 me-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 18 21"
                    >
                      <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                    </svg>
                    Ajouter au panier
                  </button>

                  <button
                    type=""
                    className="text-white bg-indigo-600 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-12 py-2.5 text-center inline-flex items-center me-2 dark:bg-inigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                    onClick={handleClick}
                  >
                    <FaHeart
                      className={`w-3.5 h-3.5 me-2 text-3xl ${
                        couleurRouge ? "text-red-600" : ""
                      } hover:text-red-600`}
                    />
                    Ajouter aux favoris
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center py-2 px-2 ">
          <button
            className="text-black ring-gray-600 ring-1 hover:bg-gray-800 hover:text-white transition ease-in-out duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-12 py-2.5 text-center inline-flex items-center me-2 dark:bg-inigo-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 "
            type=""
          >
            <IoIosArrowBack className="w-4 h-4 me-2" /> Revenir sur la boutique
          </button>
          <button
            className="text-black ring-gray-600 ring-1 hover:bg-gray-800 hover:text-white transition ease-in-out duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-12 py-2.5 text-center inline-flex items-center me-2 dark:bg-inigo-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 "
            type=""
          >
            Terminer l`&apos;`achat <IoIosArrowForward className="w-4 h-4 me-2" />
          </button>
        </div>
        <div className="py-8">
          <h1 className="text-4xl font-bold text-center">D`&apos;`autres produits</h1>
          <h4 className="text-center mb-8">
            nos produits sont d`&apos;`une qualité inégalée venez et vous verrez
          </h4>
          <div className="px-8 ">
            <Carousel cols={3} rows={1} gap={16} loop>
              <Carousel.Item>
              <div className="carousel rounded-box px-24">
                    <div className="carousel-item">
                        <div className="card w-60 bg-base-100 shadow-xl">
                            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-center">Shoes!</h2>
                                <p className='text-sm'>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-center">
                                    <h2 className="card-title text-indigo-600 text-bold">22350 Fcfa</h2>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
              </Carousel.Item>
              <Carousel.Item>
              <div className="carousel rounded-box px-24">
                    <div className="carousel-item">
                        <div className="card w-60 bg-base-100 shadow-xl">
                            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-center">Shoes!</h2>
                                <p className='text-sm'>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-center">
                                    <h2 className="card-title text-indigo-600 text-bold">22350 Fcfa</h2>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
              </Carousel.Item>
              <Carousel.Item>
              <div className="carousel rounded-box px-24">
                    <div className="carousel-item">
                        <div className="card w-60 bg-base-100 shadow-xl">
                            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-center">Shoes!</h2>
                                <p className='text-sm'>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-center">
                                    <h2 className="card-title text-indigo-600 text-bold">22350 Fcfa</h2>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="carousel rounded-box px-24">
                  <div className="carousel-item">
                    <div className="card w-60 bg-base-100 shadow-xl">
                      <figure>
                        <img
                          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                          alt="Shoes"
                        />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title text-center">Shoes!</h2>
                        <p className="text-sm">
                          If a dog chews shoes whose shoes does he choose?
                        </p>
                        <div className="card-actions justify-center">
                          <h2 className="card-title text-indigo-600 text-bold">
                            22350 Fcfa
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
