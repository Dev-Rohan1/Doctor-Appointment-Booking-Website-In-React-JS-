import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";
import { SlideUp } from "../utility/Animation";

const Doctor = () => {
  const { speciality } = useParams();
  const { doctors } = useContext(AppContext);

  console.log(doctors);

  console.log(speciality);
  return (
    <section>
      <div className="container">
        <p>Browse through the doctors specialist.</p>
        <div>
          <div>
            <span></span>
          </div>
          <div>
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
                        <span className="text-gray-600">
                          {doctor.speciality}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doctor;
