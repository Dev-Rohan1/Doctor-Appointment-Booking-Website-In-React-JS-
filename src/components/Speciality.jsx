import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { specialityData } from "../assets/assets";
import { SlideLeft } from "../utility/Animation";
import SectionTtitle from "./SectionTtitle";
const Speciality = () => {
  return (
    <section id="speciality" className="py-16 overflow-x-hidden">
      <div className="container">
        {/* ========= section title ========= */}
        <SectionTtitle
          title="Find by Speciality"
          subtitle="Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free."
        />
        {/* ========= speciality cards ========= */}
        <div
          className="flex items-center flex-wrap  gap-7 justify-center mt-10 cursor-pointer
        "
        >
          {specialityData.map((item, index) => {
            return (
              <Link
                to={`/doctors/${item.speciality}`}
                key={index}
                className="hover:translate-y-[-15px] transition-all duration-500"
              >
                <motion.div
                  variants={SlideLeft(item.deley)}
                  initial="hidden"
                  whileInView={"visible"}
                  className="text-center"
                >
                  <img
                    src={item.image}
                    alt="speciality_image"
                    className="w-20 m-auto md:w-28"
                  />
                  <span className="text-sm mt-1 text-gray-600 ">
                    {item.speciality}
                  </span>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Speciality;
