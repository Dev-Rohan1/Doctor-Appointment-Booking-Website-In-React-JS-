import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import { slideRigth } from "../utility/Animation";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <section className="pb-14">
      <div className="container">
        {/* ========= banner ========= */}
        <div
          className="bg-primery p-8 md:p-16 rounded-xl flex items-center flex-col
      md:flex-row md:justify-between"
        >
          <div>
            <motion.h1
              variants={slideRigth(0.1)}
              initial="hidden"
              whileInView="visible"
              className="text-3xl font-bold text-white md:text-4xl md:font-bold
            lg:text-5xl lg:font-bold mb-4 md:max-w-[500px] md:!leading-tight"
            >
              Book Appointment With 100+ Trusted Doctors
            </motion.h1>
            <motion.button
              variants={slideRigth(0.3)}
              initial="hidden"
              whileInView="visible"
              className="bg-white px-7 py-[10px] text-base font-normal rounded-full mt-2"
              onClick={() => navigate("/login")}
            >
              Create Account
            </motion.button>
          </div>
          <div className="hidden md:block">
            <motion.img
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 30, delay: 0.2 }}
              className="md:max-w-[300px] lg:max-w-[400px]"
              src={assets.appointment_img}
              alt="appointment_img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
