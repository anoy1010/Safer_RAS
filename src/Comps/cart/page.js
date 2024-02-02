import React from "react";
import CartItem from "./CartItem";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "../Wrapper";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Cart = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-lg md:text-2xl mb-3 font-semibold leading-tight">
            Panier d&apos;chat
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-12 py-10">
          <div className="flex-[2]">
            <div className="text-lg font-bold">Articles</div>
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
          <div className="flex-[1]">
            <div className="text-lg font-bold">Résumé</div>
            <div className="p-5 my-5 bg-gray-200 rounded-xl ">
              <div className="flex justify-between ">
                <div className="uppercase text-md md:text-lg font-medium">
                  Totale :
                </div>
                <div className="text-md md:text-lg font-medium">
                  25.000 FCFA
                </div>
              </div>
              <div className="text-sm md:text-md py-5 bordrt-t mt-5">
                PHP DEVSERVER installs a complete, open source and ready-to-use
                PHP development environment with HTTPS (https://127.0.0.1 or
                https://localhost or any alias / virtual host with HTTPS). PHP
                DEVSERVER is portable, modular, fully configurable and easy to
                update and customize (see modules and components)
              </div>
            </div>
            <button
              className="text-black ring-gray-600 ring-1 hover:bg-indigo-600 hover:text-white transition ease-in-out duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-12 py-2.5 text-center inline-flex items-center me-2 dark:bg-inigo-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 "
              type=""
            >
              Valider la commande
              <IoIosArrowForward className="w-4 h-4 me-2" />
            </button>
          </div>
        </div>
        <div className="flex-[2] flex flex-col items-center pb-[50px] md:py-16">
          <Image
            src="/cart-empty.png"
            width={300}
            height={300}
            className="w-[300px] md:w-[400px]"
          />
          <span className="text-xl font-bold mt-4">Mon panier est vide</span>
          <span className="text-center mt-4">
            En dirait que vous n&apos;avez rien ajouté à votre panier. <br /> Allez-y
            et explorez les produits.
          </span>
          <div className="flex justify-center items-center py-8 px-2 ">
            <button
              className="text-black ring-gray-600 ring-1 hover:bg-gray-800 hover:text-white transition ease-in-out duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-12 py-2.5 text-center inline-flex items-center me-2 dark:bg-inigo-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 "
              type=""
            >
              <IoIosArrowBack className="w-4 h-4 me-2" /> Revenir sur la
              boutique
            </button>
            
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Cart;
