"use client";
import Slider from "react-slick";
import { projects } from "@/data/projects";
import { Github, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function ProjectsPage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <>
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-2">Projects</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of selected projects, enterprise systems, MVPs, and apps.
          </p>
        </div>
        <Slider {...settings}>
          {projects.map((project) => (
            <article key={project.id} className="px-2">
              <div className=" bg-white dark:bg-neutral-900 rounded-xl overflow-hidden border shadow-sm hover:shadow-xl transition-shadow">
                {project.coverImage && (
                  <div className="relative w-full h-56 overflow-hidden">
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-105"
                    />

                    {/* Overlay / Mask */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-transparent to-black/50"></div>

                  </div>
                )}

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((t: any) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-1 rounded bg-primary/10 text-primary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col gap-3">
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        className="flex items-center gap-2 text-sm text-primary hover:underline"
                      >
                        <Github className="w-4 h-4" />
                        GitHub Repository
                      </Link>
                    )}

                    {project.website && (
                      <Link
                        href={project.website}
                        target="_blank"
                        className="flex items-center gap-2 text-sm text-primary hover:underline"
                      >
                        <Globe className="w-4 h-4" />
                        Visit Website
                      </Link>
                    )}

                  </div>
                </div>
              </div>
            </article>
          ))}
        </Slider >
      </section >

    </>
  );
}
