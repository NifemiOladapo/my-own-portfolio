import Image from "next/image";
import AboutMeCardLists from "./AboutMeCardLists.ts";

// #0ea2e8

const About = () => {
  return (
    <div className="bg-[#132f44] p-5 lg:p-10 flex flex-col gap-8 text-white items-center">
      <h1 className="text-2xl">About <span className="text-emerald-500">Me</span></h1>
      <Image
        src={"/Nifemi.jpeg"}
        alt="Nifemi's pic"
        height={150}
        width={150}
        className="rounded-[100%] border-emerald-500 border-4"
      />
      <AboutMeCardLists />
    </div>
  );
};

export default About;
