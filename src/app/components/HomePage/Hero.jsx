import Image from "next/image";
import bgImage from "../../assets/hero.png"; // Update this to the correct path
import vectorX1 from "../../assets/Vector-21.png"; // First vector image
import vectorX2 from "../../assets/Vector-22.png"; // Second vector image
import vectorX3 from "../../assets/Vector-23.png"; // Third vector image

const Hero = () => {
  return (
    <section
      className="relative w-full h-[722px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Container for the X vector images */}
      <div className="relative z-10 top-[-150px] flex items-center justify-center">
        {/* X vector on the left */}
        <div className="relative flex flex-col justify-center items-center w-[350px] h-auto mr-8">
          {/* First vector (bottom-left diagonal) */}
          <div className="absolute transform rotate-4 opacity-90 w-[400px] h-[800px] left-[-170px] bottom-[-500px]">
            <Image
              src={vectorX1}
              alt="Left diagonal vector"
              layout="fill"
              objectFit="contain"
            />
          </div>

          {/* Third vector (overlapping in the center) */}
          <div className="absolute opacity-90 w-[400px] h-[800px] left-[-170px] top-[-300px] bottom-6">
            <Image
              src={vectorX3}
              alt="Center vector"
              layout="fill"
              objectFit="contain"
            />
          </div>

          {/* Second vector (right-to-left diagonal overlapping the third vector) */}
          <div className="absolute transform rotate-[0deg] opacity-90 w-[250px] h-[200px] left-[-160px] top-[180px] z-20">
            <Image
              src={vectorX2}
              alt="Right diagonal vector"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        {/* Text on the right side */}
        <div className="text-white text-left ml-8">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            GET REAL-TIME <br /> LOAD TRACKING
          </h1>
          <p className="mt-4 text-2xl md:text-3xl">
            EFFICIENT <br /> PLANNING
          </p>
          <button className="mt-6 px-8 py-4 bg-red-600 text-white text-lg md:text-xl rounded-full hover:bg-red-700">
            Book Your Free Trial
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
