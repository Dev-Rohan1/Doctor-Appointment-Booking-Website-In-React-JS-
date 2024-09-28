import { Link, NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [profile, setProfile] = useState(false);
  const [token, setToken] = useState(true);

  const navigate = useNavigate();

  const showProfile = () => {
    setProfile(!profile);
  };

  const ResponsiveMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="py-5">
      <nav className="flex items-center justify-between mb-2 container">
        {/* ========= logo ========== */}
        <Link to={"/"}>
          <img className="w-44" src={assets.logo} alt="logo" />
        </Link>
        {/* ========= nav links ========== */}
        <ul className="hidden md:flex items-center gap-7 uppercase">
          <NavLink to={"/"}>
            <li className="text-sm font-medium mb-1">Home</li>
            <hr className="bg-primery border-none outline-none w-3/4 h-0.5 m-auto opacity-0" />
          </NavLink>
          <NavLink to={"/doctors/all"}>
            <li className="text-sm font-medium mb-1">All Doctors</li>
            <hr className="bg-primery border-none outline-none w-3/4 h-0.5 m-auto opacity-0" />
          </NavLink>
          <NavLink to={"/about"}>
            <li className="text-sm font-medium mb-1">About</li>
            <hr className="bg-primery border-none outline-none w-3/4 h-0.5 m-auto opacity-0" />
          </NavLink>
          <NavLink to={"/contact"}>
            <li className="text-sm font-medium  mb-1">Contact</li>
            <hr className="bg-primery border-none outline-none w-3/4 h-0.5 m-auto opacity-0" />
          </NavLink>
        </ul>
        {/* ========= login ========== */}
        <div>
          {token ? (
            <div
              className="cursor-pointer relative hidden md:block"
              onClick={() => showProfile()}
            >
              <img
                src={assets.profile_pic}
                alt="profile_pic"
                className="w-10 rounded-full border-[3px] border-primery"
              />
              <div
                className={`absolute top-[55px] right-0 z-20  ${
                  profile ? "block" : "hidden"
                }`}
              >
                <div className="bg-slate-100 rounded-md text-gray-700 min-w-52 px-5 py-4">
                  <p
                    className="mb-[10px] text-base font-medium hover:text-black transition-colors"
                    onClick={() => navigate("/my-profile")}
                  >
                    My Profile
                  </p>
                  <p
                    className="mb-[10px] text-base font-medium hover:text-black transition-colors"
                    onClick={() => navigate("/my-appointment")}
                  >
                    My Appointments
                  </p>
                  <p
                    className=" text-base font-medium hover:text-black transition-colors"
                    onClick={() => setToken(false)}
                  >
                    Lougot
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <button
              className="hidden md:block bg-primery text-white px-5 py-2 rounded-full"
              onClick={() => navigate("/login")}
            >
              Create Account
            </button>
          )}
        </div>
        {/* ========= hamburger menu ========== */}
        <div className="cursor-pointer block md:hidden">
          <img
            className="w-6"
            src={assets.menu_icon}
            alt="menu_icon"
            onClick={() => ResponsiveMenu()}
          />
          <div
            className={`fixed top-0 ${
              showMenu ? "left-[0%]" : "left-[-100%]"
            } bg-white z-10 w-full h-screen transition-all`}
          >
            <div className="md:hidden p-6">
              <div className="flex items-center justify-between">
                <Link to={"/"}>
                  <img className="w-44" src={assets.logo} alt="logo" />
                </Link>
                <img
                  className="w-8 cursor-pointer"
                  src={assets.cross_icon}
                  alt="cross_icon"
                  onClick={() => ResponsiveMenu()}
                />
              </div>
              <ul className="text-center mt-16 uppercase">
                <li className="mb-[20px]">
                  <NavLink
                    to={"/"}
                    className="px-8 py-[10px] rounded-lg text-base font-medium"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="mb-[20px]">
                  <NavLink
                    to={"/doctors/all"}
                    className="px-8 py-[13px] rounded-lg text-base font-medium"
                  >
                    All Doctors
                  </NavLink>
                </li>
                <li className="mb-[20px]">
                  <NavLink
                    to={"/about"}
                    className="px-8 py-[10px] rounded-lg text-base font-medium"
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/contact"}
                    className="px-8 py-[10px] rounded-lg text-base font-medium"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <hr className="bg-black border-none outline-none w-full h-[0.5px]" />
    </header>
  );
};

export default Navbar;
