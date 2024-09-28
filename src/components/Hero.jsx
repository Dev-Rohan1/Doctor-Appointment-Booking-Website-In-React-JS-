import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import { slideRigth } from "../utility/Animation";

const Hero = () => {
  return (
    <section>
      <div className="container">
        <div className="bg-primery rounded-lg px-6 py-9 lg:py-14 lg:px-16">
          <div
            className="flex flex-col items-center justify-center md:flex-row 
      "
          >
            {/* ========= hero content ========== */}
            <div className="mb-10 md:mb-0">
              <motion.h1
                variants={slideRigth(0.1)}
                initial="hidden"
                animate="visible"
                className="text-white text-3xl font-semibold leading-tight mb-5 lg:max-w-[430px] lg:text-5xl lg:leading-snug"
              >
                Book Appointment With Trusted Doctors
              </motion.h1>
              <motion.img
                variants={slideRigth(0.2)}
                initial="hidden"
                animate="visible"
                src={assets.group_profiles}
                alt="group-profiles"
                className="mb-5"
              />
              <motion.p
                variants={slideRigth(0.3)}
                initial="hidden"
                animate="visible"
                className="text-white leading-snug mb-5 lg:max-w-[400px]"
              >
                Simply browse through our extensive list of trusted doctors,
                schedule your appointment hassle-free.
              </motion.p>
              <a href="#speciality">
                <motion.button
                  variants={slideRigth(0.5)}
                  initial="hidden"
                  animate="visible"
                  className="bg-white flex items-center gap-3 px-6 py-[10px] rounded-full"
                >
                  <span>Book Appointment</span>{" "}
                  <img src={assets.arrow_icon} alt="arrow_icon" />
                </motion.button>
              </a>
            </div>
            {/* ========== hero image ========== */}
            <div>
              <motion.img
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 50, delay: 0.2 }}
                src={assets.header_img}
                alt="hero_img"
                className="w-full md:max-w-[500px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
