import Image from "next/image";
import Hero from "./components/HomePage/Hero";
import AboutSection from "./components/HomePage/About";

export default function Main() {
  return (
    <div className="">
      <div className="">
        <Hero />
      </div>
      <div>
        <AboutSection />
      </div>
    </div>
  );
}
