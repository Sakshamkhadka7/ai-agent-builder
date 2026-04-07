import React, { useEffect, useRef } from "react";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const typed = new Typed(typedRef.current, {
      strings: ["Agentic AI", "Automate Tasks", "Build Smart Agents"],
      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  // Images from public folder
  const floatingImages = [
    "/ai1.webp",
    "/ai2.png",
    "/ai3.jfif",
    "/ai4.webp",
    "/ai5.jpg",
    "/ai6.jfif",
    "/ai7.png",
  ];

  // Responsive positions
  const positions = [
    { mobile: "top-0 left-0", md: "top-0 left-10", lg: "top-0 left-12" },
    { mobile: "top-12 right-0", md: "top-5 right-10", lg: "top-6 right-12" },
    { mobile: "bottom-16 left-2", md: "bottom-10 left-0", lg: "bottom-12 left-10" },
    { mobile: "bottom-0 right-4", md: "bottom-0 right-10", lg: "bottom-2 right-12" },
    { mobile: "top-20 left-1/4", md: "top-1/2 left-0", lg: "top-1/2 left-12" },
    { mobile: "top-32 right-1/3", md: "top-1/3 right-0", lg: "top-1/3 right-10" },
    { mobile: "top-40 left-1/2", md: "top-1/4 left-1/2", lg: "top-1/4 left-1/2" },
  ];

  return (
    <section className="relative overflow-hidden bg-gray-950 text-white">

      <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-16 py-16 gap-12">

        {/* LEFT CONTENT */}
        <motion.div
          className="space-y-6 max-w-xl"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            <span
              ref={typedRef}
              className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            />
            <br />
            Development from prototype to production
          </h1>

          <p className="text-lg opacity-80">
            Build powerful AI agents with drag-and-drop simplicity.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap items-center gap-4">

            {/* AI Agent Button */}
            <NavLink to="/agent">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-indigo-600 px-6 py-3 rounded-xl font-medium shadow-lg"
              >
                Make an AI Agent
              </motion.button>
            </NavLink>

             <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <FaArrowRight size={24} />
            </motion.div>

            {/* Download Resume */}
            <motion.a
              href="/Saksham_Resume.pdf"
              download
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium 
                         bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 
                         text-white shadow-lg overflow-hidden"
            >
              {/* Shine Effect */}
              <motion.span
                className="absolute inset-0 bg-white opacity-10"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />

              <FaDownload />
              Download Resume
            </motion.a>

            {/* Arrow */}
           

          </div>
        </motion.div>

        {/* RIGHT FLOATING IMAGES */}
        <div className="relative w-full max-w-md h-[350px]">
          {floatingImages.map((img, i) => (
            <motion.img
              key={i}
              src={img}
              alt={`AI ${i + 1}`}
              className={`absolute w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-indigo-500 
                ${positions[i].mobile} md:${positions[i].md} lg:${positions[i].lg}`}
              animate={{
                y: [0, -15, 0],
                x: [0, 10, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default HeroSection;