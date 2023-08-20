import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useEffect, useState } from "react";

const Slider = ({ clients }) => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(max-width: 767px)").matches) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, []);

  return (
    <Swiper
      slidesPerView={mobile ? 1 : 3}
      spaceBetween={20}
      grabCursor={true}
      className="testimonialSlider px-[50px]"
    >
      {clients.map(({ message, image, name }, idx) => (
        <SwiperSlide key={idx}>
          <div className="bg-white h-[360px] drop-shadow-primary rounde-[10px] px-[50px] pt-[60px] pb-10 flex flex-col justify-between lg:w-full w-[350px]">
            <p className="font-light leading-[30px]">{message}</p>

            <div className="flex items-center gap-x-5">
              <Image src={image} width={60} height={60} />

              <span className="font-semibold">{name}</span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
