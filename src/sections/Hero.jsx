import React, { useEffect } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import heroimg from "../assets/images/hero1.webp";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <>
      <div className={`${darkMode ? "bg-black" : "bg-white"}`}>
        <section
          id="hero"
          className={`w-[95%] h-[600px] m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-center lg:px-28 px-10 gap-7 z-20`}
          style={{ backgroundImage: `url(${heroimg})`, backgroundSize: 'cover' }}
          aria-label="Hero background image"
        >
          <h1
            data-aos="zoom-in"
            className="text-6xl text-white font-semibold lg:pr-[500px] pr-0 lg:leading-[70px] leading-[60px]"
          >
            Find your next Home in Las Vegas
          </h1>
          <p
            data-aos="zoom-in"
            className="text-white text-xl lg:pr-[500px] pr-0"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            quaerat ab inventore voluptatum illum, dolores animi eum harum
            obcaecati? Mollitia.
          </p>
        </section>
      </div>

      {/* Form Starts here */}
      <div className={`${darkMode ? "bg-black" : "bg-transparent"} z-10`}>
        <div
          data-aos="zoom-in"
          id="form"
          className={`${
            darkMode ? "bg-gray-800" : "bg-white"
          } lg:w-[70%] w-full m-auto grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-6 p-8 rounded-xl -mt-14`}
        >
          <div className="w-full">
            <h1 className="text-black font-semibold dark:text-white">
              Location
            </h1>
            <input
              type="text"
              placeholder="Enter an address, state, city or pincode"
              className="bg-white p-2 w-full mt-2 border-b-[1px] border-[#c9c7c1]"
            />
          </div>
          <div className="w-full">
            <h1 className="text-black font-semibold dark:text-white">Type</h1>
            <select
              name="selectOption"
              id="selectOption"
              className="bg-white p-2 border-b-[1px] w-full mt-2 border-[#c9c7c1] text-gray-500 text-md"
              defaultValue=""
            >
              <option value="" disabled>
                Select property
              </option>
              <option value="rentals">Rentals</option>
              <option value="sales">Sales</option>
              <option value="commercials">Commercials</option>
            </select>
          </div>

          <div className="w-full">
            <h1 className="text-black font-semibold dark:text-white">
              Category
            </h1>
            <select
              name="selectOption"
              id="selectOption"
              className="bg-white p-2 border-b-[1px] w-full mt-2 border-[#c9c7c1] text-gray-500 text-md"
              defaultValue=""
            >
              <option value="" disabled>
                Property category
              </option>
              <option value="apartments">Apartments</option>
              <option value="duplex">Duplex</option>
              <option value="2bhk">2BHK</option>
              <option value="3bhk">3BHK</option>
              <option value="private-villa">Private Villa</option>
            </select>
          </div>

          <div className="w-full">
            <button
              className="bg-red-600 dark:bg-red-700 hover:bg-black dark:hover:bg-white dark:hover:text-black text-lg p-4 w-full text-white font-semibold rounded-xl cursor-pointer transform hover:scale-110 transition-transform duration-300"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;