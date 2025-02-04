// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
// } from "@/components/ui/carousel";
import PROJECTS__LIST from "@/data/projects";
import CarouselList from "./CarouselList";

const Projects = () => {
  return (
    <div className="bg-[#132f44] flex gap-5 text-white flex-col items-center p-5">
      <h1 className="text-2xl text-white">
        My <span className="text-emerald-500">Projects</span>
      </h1>
      {/* <CarouselList items={PROJECTS__LIST} /> */}  
      {/* <Button>heloo</Button> */}
      {/* <Carousel>
        <CarouselContent>
          {PROJECTS__LIST.map((project, i) => {
            return (
              <CarouselItem
                className="flex flex-col items-center"
                key={i}
              >
                <Image
                  src={project.image}
                  height={250}
                  width={250}
                  alt={project.name}
                />
                <h3 className="text-xl">{project.name}</h3>
                <p>{project.description}</p>
                <Link href={project.webLink}>{project.webLink}</Link>
                <Link href={project.githubLink}>{project.githubLink}</Link>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel> */}
    </div>
  );
};

export default Projects;
