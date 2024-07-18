import ABOUT__ME__LIST from "@/data/aboutMe";
import AboutMeCard from "./AboutMeCard";

const AboutMeCardLists = () => {

  return (
    <div className="flex flex-col items-center gap-12 w-full lg:w-[800px]">
      {ABOUT__ME__LIST.map((data) => {
        return (
          <AboutMeCard key={data.id} data={data}/>
        );
      })}
    </div>
  );
};

export default AboutMeCardLists;
