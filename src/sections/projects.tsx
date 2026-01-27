import { useState } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProjectCard } from "@/components/projectCard";
import { ProjectsNav } from "@/components/projectsNav";
import { SectionContainer } from "@/components/sectionContainer";
import { SectionTitle } from "@/components/sectionTitle";
import type { ProjectButtonOptions } from "@/data/projectButtonOptions";
import { projects } from "@/data/projects";

export function Projects() {
  const [isActive, setIsActive] = useState<ProjectButtonOptions>("highlights");

  const filteredProjects = projects.filter((project) => {
    switch (isActive) {
      case "highlights":
        return project.isHighlight;
      case "freelancer":
        return project.isFreelancer;
      default:
        return project.type === isActive;
    }
  });

  return (
    <SectionContainer className="min-h-182">
      <SectionTitle title="Projetos" />
      <ProjectsNav isActive={isActive} setIsActive={setIsActive} />
      <div className="w-full mt-10">
        <Swiper
          slidesPerView={1}
          breakpoints={{
            600: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            800: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          spaceBetween={16}
          modules={[Pagination]}
          pagination={{
            type: "progressbar",
          }}
          className="mySwiper"
        >
          {filteredProjects.length > 0 &&
            filteredProjects.map((item) => (
              <SwiperSlide key={item.name}>
                <ProjectCard project={item} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </SectionContainer>
  );
}
