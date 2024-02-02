import React from "react";
import { getBanners } from "../../../../../sanity/lib/client";
import SwiperComponent from "@/Comps/Swiper";
import RelatedProduct from "@/Comps/RelatedProduct";
import HomeSectOne from "@/Comps/HomeSectOne";

export default async function HomeEcom  () {
    const banners = await getBanners();
  return (
    <div>
      <>
        <div className="">
          {banners.map((banner) => (
            <SwiperComponent key={banner._id} banner={banner} />
          ))}
        </div>
        <RelatedProduct />
        <HomeSectOne />
      </>
    </div>
  );
};

