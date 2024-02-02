"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import banner1 from '../../public/banner1.jpg'
import banner2 from '../../public/banner2.jpg'
import banner3 from '../../public/banner3.jpg'
import 'swiper/css';
import Link from 'next/link';

const images = [
  banner1,
  banner2,
  banner3,
];

const SwiperComponent = ({banner}) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 1000, // Delay between slides in milliseconds
        disableOnInteraction: false, // Continue autoplay after user interaction
      }}
      speed={1000}
    >
      {images.map((image, index) => (
        <SwiperSlide className='relative' key={index}>
            <Image
                src={image}
                alt={`Swiper Image ${index + 1}`}
                layout="responsive"
                width={300}
                height={200}
                sizes="50vw"
                className=''
            />
            <div className='absolute w-[60%] inset-y-0 left-0 px-24 flex flex-col justify-center gap-y-8'> 
                <h1 className='text-[70px] font-bold uppercase'>{banner.midText}</h1>
                <p className='text-2xl font-semibold'>{banner.smallText}</p>
                <div>
                    <Link href="">
                        <button className='bg-[#4765F6] text-white px-8 py-4 text-lg rounded-full' type='button'>{banner.buttonText}</button>
                    </Link>
                </div>
            </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;