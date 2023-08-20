import { motion } from "framer-motion";

import Slider from "../components/Slider";
import { fadeInUp, staggerTextContainer } from "../variants";

const Testimonials = ({ testimonialData }) => {
  const { pretitle, title, clients } = testimonialData;

  return (
    <section className="relative min-h-[600px]">
      <div className="container mx-auto">
        <motion.div
          variants={staggerTextContainer}
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: false, amount: 0.6 }}
          className="flex flex-col"
        >
          <motion.div variants={fadeInUp} className="lg:w-[40%]">
            <h3 className="h3">{pretitle}</h3>

            <h2 className="h2 mb-6">{title}</h2>
          </motion.div>

          <motion.div variants={fadeInUp} className="w-full">
            <Slider clients={clients} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;