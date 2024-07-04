import About from "@/components/About";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import NewRelease from "@/components/NewRealsed";
import OverView from "@/components/OverView";
import Slide from "@/components/Slide";
import { motion } from "framer-motion";

const AnimatedSection = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};
function Home() {
  return (
    <div>
      <AnimatedSection>
        <Banner />
      </AnimatedSection>
      <AnimatedSection>
      
        <About />
      </AnimatedSection>
        <Slide />
      <AnimatedSection>
        <NewRelease />
      </AnimatedSection>
      <AnimatedSection>
        <OverView />
      </AnimatedSection>
      <AnimatedSection>
        <Footer />
      </AnimatedSection>
    </div>
  );
}

export default Home;
