import Image from "next/image";

const HeroContent = () => {
  return (
    <div className="w-full">
      <div className="w-full lg:w-[90%] lg:pt-28 pt-5  mx-auto flex flex-col p-6 gap-12">
        <div className="flex justify-between lg:flex-row gap-8 lg:gap-0 flex-col-reverse  items-center w-full">
          <div className="w-full lg:w-[60%]">
            <h1 className="lg:text-6xl text-3xl text-white">
              Hi, I'm Oladapo Nifemi
            </h1>
            <h3 className="lg:text-2xl text-xl  text-emerald-500">Software Developer</h3>
            <p className="my-5 text-white">
              A Software developer and engineer with experience in developing
              robust and result driven applications with expertise in web
              development and mobile applications development.
            </p>
            <div className="flex gap-3 text-emerald-500">
              <button className="border-emerald-500 border-2 py-2 px-6 rounded-md bg-emerald-500 text-blue-950">
                Hire Me
              </button>
              <button className="border-emerald-500 border-2 py-2 px-6 rounded-md">
                Lets Talk
              </button>
            </div>
          </div>
          <Image
            alt="Nifemi's Image"
            src={"/Nifemi.jpeg"}
            height={250}
            width={250}
            className="rounded-[100%] shadow-2xl shadow-emerald-500 border-emerald-500 border-8 p-2 object-contain"
          />
        </div>
        <div className="flex items-center gap-4 text-white">
        <p>G</p>
        <p>L</p>
        <p>X</p>
      </div>
      </div>
    </div>
  );
};

export default HeroContent;
