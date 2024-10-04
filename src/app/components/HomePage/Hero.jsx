import Image from "next/image";
import bgImage from "../../assets/hero.png";
import vectorX1 from "../../assets/Vector-21.png";
import vectorX2 from "../../assets/Vector-22.png";
import vectorX3 from "../../assets/Vector-23.png";
import { MdArrowRightAlt } from "react-icons/md";

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen overflow-hidden bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black opacity-50 pointer-events-none"></div>

      {/* Container for the X vector images */}
      <div className="relative z-10 flex items-center justify-center flex-col md:flex-row">
        {/* X vector on the left */}
        <div className="relative flex flex-col justify-center items-center w-[300px] h-auto mr-8">
          {/* First vector (bottom-left diagonal) */}
          <div className="absolute floating-animation opacity-50 w-[300px] h-[600px] left-[-60px] md:left-[-90px] bottom-[-500px] md:w-[400px] md:h-[800px]">
            <Image
              src={vectorX1}
              alt="Left diagonal vector"
              layout="fill"
              objectFit="contain"
            />
          </div>

          {/* Third vector (overlapping in the center) */}
          <div className="absolute floating-animation opacity-50 w-[300px] h-[600px] left-[-60px] md:left-[-90px] top-[-170px] md:top-[-300px] md:w-[400px] md:h-[800px]">
            <Image
              src={vectorX3}
              alt="Center vector"
              layout="fill"
              objectFit="contain"
            />
          </div>

          {/* Second vector (right-to-left diagonal overlapping the third vector) */}
          <div className="absolute floating-animation opacity-50 w-[200px] h-[150px] left-[-20px] top-[250px] md:left-[-80px]  md:top-[190px] z-20 md:w-[250px] md:h-[120px]">
            <Image
              src={vectorX2}
              alt="Right diagonal vector"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        {/* Text on the right side */}
        <div className="text-white text-left pt-20 z-20 sm:pt-40 md:pt-40 ml-24 text-wrap md:ml-8 fade-in-animation">
          <h1 className="text-[62px] md:text-[118px] mt-10 mr-20 font-extrabold leading-none">
            RELIABLE
            <br /> TRANSPORT
          </h1>
          <div className="mt-4">
            <p className="mt-4 text-[24px] md:text-[52px] leading-tight font-extrabold">
              SOLUTIONS FOR
              <br /> YOUR FREIGHT
            </p>
            <button className="mt-6 px-6 flex justify-between space-x-2 items-center py-2 bg-white text-custom-red text-[18px] rounded-full font-normal duration-300 hover:text-white hover:bg-custom-red fade-in-animation">
              Book Your Free Trial{" "}
              <span className="ml-2">
                <MdArrowRightAlt size={30} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
