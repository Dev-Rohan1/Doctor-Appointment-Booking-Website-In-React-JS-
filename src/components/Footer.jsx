import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="pt-16">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap mb-5">
          <div className="mb-4 md:mb-0 max-w-[380px]">
            <img className="w-44 mb-4" src={assets.logo} alt="logo" />
            <p className="text-gray-600 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-semibold mb-4">Company</h2>
            <ul>
              <li className="text-gray-600 mb-[10px]">Home</li>
              <li className="text-gray-600 mb-[10px]">About Us</li>
              <li className="text-gray-600 mb-[10px]">Delivery</li>
              <li className="text-gray-600 mb-[10px]">Privacy policy</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
            <span className="block text-gray-600 mb-[10px]">
              +880-1707474429
            </span>
            <span className="block text-gray-600 mb-[10px]">
              dev.rohan2024@gmail.com
            </span>
          </div>
        </div>
        <div className="border-t border-black">
          <span className="text-center block py-5">
            Copyright 2024 @ ❤️‍🩹Rohan❤️‍🩹 - All Right Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
