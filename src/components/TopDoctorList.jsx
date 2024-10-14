import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import SectionTtitle from "../components/SectionTtitle";
import { SlideUp } from "../utility/Animation";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const TopDoctorList = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  return (
    <section className="py-16 overflow-y-hidden">
      <div className="container">
        {/* ======== section title ========= */}
        <SectionTtitle
          title="Top Doctors to Book"
          subtitle="Simply browse through our extensive list of trusted doctors."
        />
        {/* ======== doctor list ========= */}
        <motion.div className="grid grid-cols-auto gap-7 mt-14">
          {doctors.slice(0, 10).map((doctor) => {
            return (
              <motion.div
                variants={SlideUp(0.2)}
                initial="hidden"
                whileInView={"visible"}
                key={doctor._id}
                onClick={() => navigate(`/appointment/${doctor._id}`)}
              >
                <div className="border-[0.1px] border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-15px] transition-all duration-500">
                  {" "}
                  <img
                    src={doctor.image}
                    alt="doctor.image"
                    className="bg-blue-50"
                  />
                  <div className="px-5 py-3">
                    <p className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-600 rounded-full block"></span>
                      <span className="text-green-600">Available</span>
                    </p>
                    <h2 className="text-lg font-medium">{doctor.name}</h2>
                    <span className="text-gray-600">{doctor.speciality}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        {/* ======= more button ========= */}
        <motion.button
          variants={SlideUp(0.3)}
          initial="hidden"
          whileInView="visible"
          className="m-auto block bg-[#EAEFFF] text-gray-600 px-12 py-3 rounded-full mt-10"
          onClick={() => navigate("/doctors/all")}
        >
          More
        </motion.button>
      </div>
    </section>
  );
};

export default TopDoctorList;
