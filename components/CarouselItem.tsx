import Image from "next/image";
import Link from "next/link";

const CarouselItem = ({ item }) => {
  return (
    <div className="flex flex-col text-center items-center py-5 px-4 w-[500px] shadow-md shadow-emerald-400 ">
      <Image
        alt={item.name}
        src={item.image}
        className=""
        height={200}
        width={200}
      />
      <h2 className="font-semibold text-lg">{item.name}</h2>
      <p className="text-sm py-4">{item.description}</p>
      <Link className="text-sm italic" href={item.webLink}>
        {item.webLink}
      </Link>
      <Link className="text-sm italic" href={item.githubLink}>
        {item.githubLink}
      </Link>
    </div>
  );
};

export default CarouselItem;
