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
    <section className="bg-[#132f44] text-white py-12 px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
          My <span className="text-emerald-500">Projects</span>
        </h1>

        <div className="relative px-4 md:px-12">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {PROJECTS__LIST.map((project, i) => (
                <CarouselItem
                  key={i}
                  className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <div className="h-full bg-white/10 rounded-xl p-4 md:p-6 flex flex-col">
                    <div className="relative w-full aspect-video mb-4">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="rounded-lg object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>

                    <h3 className="text-lg md:text-xl font-semibold mb-2">
                      {project.name}
                    </h3>

                    <p className="text-sm text-gray-300 mb-4 flex-grow">
                      {project.description}
                    </p>

                    <div className="flex gap-3 mt-auto">
                      <Link
                        href={project.webLink}
                        className="flex-1 px-3 py-2 text-sm bg-emerald-500 hover:bg-emerald-600 transition rounded-lg text-center"
                      >
                        Live Demo
                      </Link>
                      <Link
                        href={project.githubLink}
                        className="flex-1 px-3 py-2 text-sm border border-white hover:bg-white hover:text-black transition rounded-lg text-center"
                      >
                        GitHub
                      </Link>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="absolute -left-2 md:-left-8 top-1/2 -translate-y-1/2 bg-emerald-500 hover:bg-emerald-600 border-0" />
            <CarouselNext className="absolute -right-2 md:-right-8 top-1/2 -translate-y-1/2 bg-emerald-500 hover:bg-emerald-600 border-0" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Projects;
