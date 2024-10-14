import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { SlideUp, slideRigth } from "../utility/Animation";

const Doctors = () => {
  const [filterDoc, setFilterDoc] = useState([]);
  const { speciality } = useParams();
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    const applyFilter = () => {
      if (speciality === "all") {
        setFilterDoc(doctors);
      } else {
        setFilterDoc(
          doctors.filter((doctor) => doctor.speciality === speciality)
        );
      }
    };

    applyFilter();
  }, [doctors, speciality]);

  return (
    <section>
      <div className="container">
        <p className="text-gray-700 mb-6 text-lg">
          Browse through the doctors specialist.
        </p>
        <div className="flex flex-col md:justify-between gap-5 md:flex-row">
          <div className="w-full md:w-[25%]">
            <motion.p
              variants={slideRigth(0.1)}
              initial="hidden"
              whileInView="visible"
              onClick={() =>
                speciality === "General physician"
                  ? navigate("/doctors/all")
                  : navigate("/doctors/General physician")
              }
              className={`border-[1.5px] border-indigo-100 rounded-[6px] cursor-pointer mb-4 px-2  py-[6px] text-sm ${
                speciality === "General physician"
                  ? "bg-indigo-100 text-black"
                  : ""
              }`}
            >
              General physician
            </motion.p>
            <motion.p
              variants={slideRigth(0.2)}
              initial="hidden"
              whileInView="visible"
              onClick={() =>
                speciality === "Gynecologist"
                  ? navigate("/doctors/all")
                  : navigate("/doctors/Gynecologist")
              }
              className={`border-[1.5px] border-indigo-100 rounded-[6px] cursor-pointer mb-4 px-2  py-[6px] text-sm ${
                speciality === "Gynecologist" ? "bg-indigo-100 text-black" : ""
              }`}
            >
              Gynecologist
            </motion.p>
            <motion.p
              variants={slideRigth(0.3)}
              initial="hidden"
              whileInView="visible"
              onClick={() =>
                speciality === "Dermatologist"
                  ? navigate("/doctors/all")
                  : navigate("/doctors/Dermatologist")
              }
              className={`border-[1.5px] border-indigo-100 rounded-[6px] cursor-pointer mb-4 px-2  py-[6px] text-sm ${
                speciality === "Dermatologist" ? "bg-indigo-100 text-black" : ""
              }`}
            >
              Dermatologist
            </motion.p>
            <motion.p
              variants={slideRigth(0.4)}
              initial="hidden"
              whileInView="visible"
              onClick={() =>
                speciality === "Pediatricians"
                  ? navigate("/doctors/all")
                  : navigate("/doctors/Pediatricians")
              }
              className={`border-[1.5px] border-indigo-100 rounded-[6px] cursor-pointer mb-4 px-2  py-[6px] text-sm ${
                speciality === "Pediatricians" ? "bg-indigo-100 text-black" : ""
              }`}
            >
              Pediatricians
            </motion.p>
            <motion.p
              variants={slideRigth(0.5)}
              initial="hidden"
              whileInView="visible"
              onClick={() =>
                speciality === "Neurologist"
                  ? navigate("/doctors/all")
                  : navigate("/doctors/Neurologist")
              }
              className={`border-[1.5px] border-indigo-100 rounded-[6px] cursor-pointer mb-4 px-2  py-[6px] text-sm ${
                speciality === "Neurologist" ? "bg-indigo-100 text-black" : ""
              }`}
            >
              Neurologist
            </motion.p>
            <motion.p
              variants={slideRigth(0.6)}
              initial="hidden"
              whileInView="visible"
              onClick={() =>
                speciality === "Gastroenterologist"
                  ? navigate("/doctors/all")
                  : navigate("/doctors/Gastroenterologist")
              }
              className={`border-[1.5px] border-indigo-100 rounded-[6px] cursor-pointer px-2  py-[6px] text-sm ${
                speciality === "Gastroenterologist"
                  ? "bg-indigo-100 text-black"
                  : ""
              }`}
            >
              Gastroenterologist
            </motion.p>
          </div>
          <div className="w-full md:w-[75%]">
            {" "}
            <motion.div className="grid grid-cols-auto gap-7 ">
              {filterDoc.map((doctor) => {
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

export default Doctors;
