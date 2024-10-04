import Image from "next/image";
import bgImage from "../../assets/hero.png";
import vectorX1 from "../../assets/Vector-21.png";
import vectorX2 from "../../assets/Vector-22.png";
import vectorX3 from "../../assets/Vector-23.png";
import { MdArrowRightAlt } from "react-icons/md";

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
          <div className="absolute transform rotate-4 opacity-90 w-[400px] h-[800px] left-[-60px] bottom-[-500px]">
            <Image
              src={vectorX1}
              alt="Left diagonal vector"
              layout="fill"
              objectFit="contain"
            />
          </div>

          {/* Third vector (overlapping in the center) */}
          <div className="absolute opacity-90 w-[400px] h-[800px] left-[-60px] top-[-300px] bottom-6">
            <Image
              src={vectorX3}
              alt="Center vector"
              layout="fill"
              objectFit="contain"
            />
          </div>

          {/* Second vector (right-to-left diagonal overlapping the third vector) */}
          <div className="absolute transform rotate-[0deg] opacity-90 w-[250px] h-[200px] left-[-50px] top-[180px] z-20">
            <Image
              src={vectorX2}
              alt="Right diagonal vector"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        {/* Text on the right side */}
        <div className="text-white text-left pt-40 ml-8">
          <h1 className="text-[] md:text-[118px] mt-20 mr-20 font-extrabold leading-none">
            RELIABLE
            <br /> TRANSPORT
          </h1>
          <div className="ml-60">
            <p className="mt-4 text-2xl md:text-[52px] leading-tight font-extrabold">
              SOLUTIONS FOR
              <br /> YOUR FREIGHT
            </p>
            <button className="mt-6 px-8 flex justify-between space-x-10 items-center py-2 bg-white text-custom-red text-lg md:text-[18px] rounded-full font-normal duration-300 hover:text-white hover:bg-custom-red">
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
