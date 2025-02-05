import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import PROJECTS__LIST from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="bg-[#132f44] text-white flex flex-col items-center py-10 px-5">
      <h1 className="text-3xl font-semibold mb-6">
        My <span className="text-emerald-500">Projects</span>
      </h1>
      <Carousel className="w-full max-w-5xl">
        <CarouselContent className="flex">
          {PROJECTS__LIST.map((project, i) => (
            <CarouselItem
              key={i}
              className="flex flex-col items-center text-center p-5 basis-1/1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="bg-white/10 p-5 rounded-xl shadow-lg w-full h-full flex flex-col items-center gap-3">
                <Image
                  src={"/socket.png"}
                  height={150}
                  width={150}
                  alt={project.name}
                  className="rounded-lg"
                />
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <p className="text-sm text-gray-300">{project.description}</p>
                <div className="flex gap-3 mt-3">
                  <Link
                    href={project.webLink}
                    className="px-4 py-2 text-sm bg-emerald-500 hover:bg-emerald-600 transition rounded-lg"
                  >
                    Live Demo
                  </Link>
                  <Link
                    href={project.githubLink}
                    className="px-4 py-2 text-sm border border-white hover:bg-white hover:text-black transition rounded-lg"
                  >
                    GitHub
                  </Link>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0" />
        <CarouselNext className="absolute right-0" />
      </Carousel>
    </div>
  );
};

export default Projects;
