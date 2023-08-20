import Image from "next/image";
import { motion } from "framer-motion";

import { fadeInUp, fadeInDown, staggerTextContainer } from "../variants";

const About = ({ aboutData }) => {
  const { title, subtitle, text, boyImg } = aboutData;

  return (
    <section className="mb-[60px] lg:mb-[160px] relative">
      <div id="about" className="absolute -top-40"></div>
      <div className="container mx-auto">
        <motion.div
          variants={staggerTextContainer}
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: false, amount: 0.6 }}
          className="flex flex-col lg:flex-row gap-x-5"
        >
          <motion.div variants={fadeInDown} className="flex-1 mt-[74px]">
            <h3 className="h3">{title}</h3>

            <p className="lead max-w-[470px] mb-[70px]">{subtitle}</p>

            <div className="bg-accent/10 border-l-[10px] border-accent max-w-[570px] h-[160px] flex items-center justify-center mb-8 lg:mb-0">
              <p className="text-xl leading-normal lg:text-2xl lg:leading-8 font-medium max-w-[320px] lg:max-w-[460px]">
                {text}
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex-1">
            <Image src={boyImg} width={575} height={480} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
