import Image from "next/image";
import Navbar from "./Navbar";




const Header = () => {
  return (
    <header className="bg-neutral min-h-dvh text-accent">
      <Navbar />
      <div className="px-5">
        <div className="max-w-7xl flex-col lg:flex-row w-full gap-10 mx-auto mt-12 flex justify-between items-center">
          <div className="flex max-w-[400px] flex-col md:max-w-[586px]">
            <h1 className="mb-4 text-[35px] font-bold leading-[48px] tracking-[-0.025em] md:text-[40px] lg:text-[54px] lg:leading-[67.2px]">
              Discover <br /> Pre-Loved Treasures <br /> At Unmatched Prices!
            </h1>
            <p className="mb-6 text-base md:text-2xl">
              Buy and sell second-hand products seemlessly. Earn Gems as You
              trade and use them to access premium collections.
            </p>
            <button className="rounded lg:w-fit py-3 w-full px-6 bg-secondary text-neutral text-base font-medium">
              Explore Products
            </button>
          </div>
          <Image
            src={"/images/img.jpeg"}
            alt="Image"
            layout="responsive"
            width={500}
            height={500}
            className="max-h-[639px] max-w-[553px] w-full"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
