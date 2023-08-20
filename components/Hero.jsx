import Image from "next/image";
import { motion } from "framer-motion";
import { CgArrowLongRight } from "react-icons/cg";

import {
  staggerContainer,
  girlAnim,
  boyAnim,
  heroTruckAnim,
  fadeInDown,
} from "../variants";
import Header from "./Header";

const Hero = ({ heroData, headerData, navData }) => {
  const { title, boyImg, girlImg, truckImg, btnText } = heroData;

  return (
    <section className="bg-hero bg-no-repeat bg-left-top min-h-[800px] lg:min-h-[950px] lg:mb-80">
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="container mx-auto relative min-h-[800px] lg:min-h-[950px]"
      >
        <motion.h1
          variants={fadeInDown}
          className="h1 max-w-[740px] text-white mb-[60px] pt-[12rem]"
        >
          {title}
        </motion.h1>

        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          variants={fadeInDown}
          className="btn"
        >
          {btnText}
          <CgArrowLongRight className="text-[30px]" />
        </motion.button>

        <motion.div
          variants={girlAnim}
          className="hidden lg:flex absolute bottom-0"
        >
          <Image src={girlImg} width={206} height={495} />
        </motion.div>

        <motion.div
          variants={heroTruckAnim}
          className="hidden lg:flex absolute -bottom-[25%] -left-[30%]"
        >
          <Image src={truckImg} width={811} height={395} />
        </motion.div>

        <motion.div
          variants={boyAnim}
          className="hidden lg:flex absolute right-[380px] bottom-0 z-10"
        >
          <Image src={boyImg} width={206} height={495} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
