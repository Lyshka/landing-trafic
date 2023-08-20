import { motion } from "framer-motion";

// import components
import Hero from "../components/Hero";
import About from "../components/About";
import How from "../components/How";
import Faq from "../components/Faq";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

// import data

import {
  headerData,
  heroData,
  navData,
  faqData,
  aboutData,
  howData,
  testimonialData,
  footerData,
} from "../data.json";
import Header from "../components/Header";
import { fadeInDown, staggerContainer } from "../variants";

const Home = ({
  headerData,
  heroData,
  navData,
  faqData,
  aboutData,
  howData,
  testimonialData,
  footerData,
}) => {
  return (
    <div className="overflow-hidden relative max-w-[1600px] mx-auto bg-page">
      <motion.div variants={fadeInDown}>
        <Header headerData={headerData} navData={navData} />
      </motion.div>

      <Hero heroData={heroData} headerData={headerData} navData={navData} />
      <About aboutData={aboutData} />
      <How howData={howData} />
      <Faq faqData={faqData} />
      <Testimonials testimonialData={testimonialData} />
      <Footer footerData={footerData} />
      <Copyright />
    </div>
  );
};

// get data.json
export const getStaticProps = async () => {
  return {
    props: {
      headerData,
      heroData,
      navData,
      faqData,
      aboutData,
      howData,
      testimonialData,
      footerData,
    },
  };
};

export default Home;
