import Image from "next/image";

const TechStack = () => {
  return (
    <div className="p-8 bg-[#091b29] lg:p-16">
      <div className="flex flex-wrap w-full lg:w-[900px] justify-center mx-auto gap-7">
        <Image
          className="object-contain "
          src={"/javascript.png"}
          alt="javascript"
          height={120}
          width={120}
        />
        <Image
          className="object-contain "
          src={"/html.png"}
          alt="html"
          height={120}
          width={120}
        />
        <Image
          className="object-contain "
          src={"/express.png"}
          alt="css"
          height={120}
          width={120}
        />
        <Image
          className="object-contain "
          src={"/nodejs.png"}
          alt="react"
          height={120}
          width={120}
        />
        <Image
          className="object-contain "
          src={"/javascript.png"}
          alt="javascript"
          height={120}
          width={120}
        />
        <Image
          className="object-contain "
          src={"/html.png"}
          alt="html"
          height={120}
          width={120}
        />
        <Image
          className="object-contain "
          src={"/express.png"}
          alt="css"
          height={120}
          width={120}
        />
        <Image
          className="object-contain "
          src={"/nodejs.png"}
          alt="react"
          height={120}
          width={120}
        />
        <Image
          className="object-contain "
          src={"/javascript.png"}
          alt="javascript"
          height={120}
          width={120}
        />
      </div>
    </div>
  );
};

export default TechStack;
