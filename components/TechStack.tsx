import Image from "next/image";

const TechStack = () => {
  return (
    <section className="p-8 bg-[#091b29] lg:p-16">
      <div className="flex flex-wrap w-full lg:w-[900px] justify-center items-center mx-auto gap-7">
        <Image
          className="object-contain size-20 sm:size-[110px] md:size-[130px]"
          src={"/html.png"}
          alt="html"
          height={120}
          width={120}
        />
        <Image
          className="object-contain size-20 sm:size-30"
          src={"/css.png"}
          alt="css"
          height={120}
          width={120}
        />
        <Image
          className="object-contain size-20 sm:size-[110px] md:size-[130px]"
          src={"/javascript.png"}
          alt="javascript"
          height={120}
          width={120}
        />
        <Image
          className="object-contain size-20 sm:size-[110px] md:size-[130px]"
          src={"/nodejs.png"}
          alt="react"
          height={120}
          width={120}
        />
        <Image
          className="object-contain size-20 sm:size-[110px] md:size-[130px]"
          src={"/react.png"}
          alt="react"
          height={120}
          width={120}
        />

        <Image
          className="object-contain size-20 sm:size-[110px] md:size-[130px]"
          src={"/next.js.png"}
          alt="next.js"
          height={120}
          width={120}
        />

        <Image
          className="object-contain size-20 sm:size-[110px] md:size-[130px]"
          src={"/mongodb.png"}
          alt="mongoDb"
          height={120}
          width={120}
        />

        <Image
          className="object-contain size-20 sm:size-[110px] md:size-[130px]"
          src={"/socket.png"}
          alt="socket.io"
          height={120}
          width={120}
        />
        <Image
          className="object-contain size-20 sm:size-[110px] md:size-[130px]"
          src={"/typescript.png"}
          alt="typescript"
          height={120}
          width={120}
        />
      </div>
    </section>
  );
};

export default TechStack;
