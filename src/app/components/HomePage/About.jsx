"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import TruckImage from "../../assets/Truck.png";
import AboutBg from "../../assets/AboutBg.png";
import vectorX1 from "../../assets/Vector-21.png";
import vectorX2 from "../../assets/Vector-22.png";
import vectorX3 from "../../assets/Vector-23.png";
import Link from "next/link";

const AboutSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden h-screen bg-gray-100 py-16 px-6"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${AboutBg.src})`,
        }}
      />

      <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center">
        {/* Text Content */}
        <div className="lg:w-[100vw] lg:pr-12 order-2 lg:order-none">
          <h2
            className={`text-[28px] lg:text-[72px] lg:mb-8 font-bold text-custom-red ${
              isVisible ? "animate-fadeInUp" : "opacity-0"
            }`}
          >
            <span className="text-white">About</span> us
          </h2>
          <p
            className={`text-white mb-4 lg:text-[28px] leading-none font-normal ${
              isVisible ? "animate-fadeInUp delay-200" : "opacity-0"
            }`}
          >
            <span className="text-custom-red leading-tight">Apexloads.com</span>
            <span className="leading-tight">
              {" "}
              is a premier digital platform designed to revolutionize the
              logistics and transportation industry,
            </span>{" "}
            <span className="text-base leading-none">
              with a special focus on the African market. We aim to bridge the
              gap between shippers and truck owners, providing a seamless and
              efficient solution to manage freight loads. Our platform is built
              on the principles of innovation, reliability, and accessibility,
              ensuring that all users, regardless of their location, can
              optimize their logistics operations and drive their businesses
              forward.
            </span>
          </p>
          <Link
            href="/know-more"
            className={`inline-block bg-transparent border border-white text-white py-2 px-4 rounded-full text-nowrap hover:border-custom-red duration-200 hover:bg-custom-red ${
              isVisible ? "animate-fadeInUp delay-400" : "opacity-0"
            }`}
          >
            Know more
          </Link>
        </div>

        {/* Vectors and Truck Image */}
        <div className="relative flex justify-center items-center w-[600px] h-auto order-1 lg:order-none mb-8 lg:mb-0">
          {/* Group Wrapper */}
          <div className="relative flex flex-col items-center justify-center w-[300px] lg:w-[750px] h-auto z-0">
            {/* Second vector red small vector */}
            {/* <div
              className={`absolute opacity-0 w-[200px] h-[150px] right-[-20px] top-[250px] lg:right-[-80px] lg:top-[190px] z-20 lg:w-[250px] lg:h-[120px] ${
                isVisible ? "animate-fadeInUp" : ""
              }`}
            >
              <Image
                src={vectorX2}
                alt="Left diagonal vector"
                layout="fill"
                objectFit="contain"
              />
            </div> */}

            {/* Truck Image with slide-in animation */}
            <div
              className={`relative z-10 mt-2 lg:mt-2 mb-0 ${
                isVisible ? "animate-slideInRight" : "opacity-0"
              }`}
            >
              <div className="w-[489px] lg:w-[780px] ml-[200px] lg:ml-0 lg:mr-[-300px]">
                <Image
                  src={TruckImage}
                  alt="Truck Image"
                  objectFit="cover"
                  width={750}
                  height={524}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Third vector */}
            <div
              className={`absolute opacity-00 w-[350px] h-[600px] right-[-100px] lg:right-[-90px] top-[-220px] lg:top-[-220px] lg:w-[400px] lg:h-[800px] ${
                isVisible ? "animate-fadeInUp delay-400" : ""
              }`}
            >
              <Image
                src={vectorX3}
                alt="Center vector"
                layout="fill"
                objectFit="contain"
              />
            </div>

            {/* First vector */}
            <div
              className={`absolute opacity-50 w-[350px] h-[600px] right-[-200px] lg:right-[-180px] top-[-200px] lg:top-[-560px] bottom-[-500px] lg:w-[500px] lg:h-[1600px] ${
                isVisible ? "animate-fadeInUp delay-600" : ""
              }`}
            >
              <Image
                src={vectorX1}
                alt="Right diagonal vector"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
