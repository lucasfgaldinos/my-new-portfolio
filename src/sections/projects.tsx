import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProjectCard } from "@/components/projectCard";
import { ProjectsNav } from "@/components/projectsNav";
import { SectionContainer } from "@/components/sectionContainer";
import { SectionTitle } from "@/components/sectionTitle";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <SectionContainer className="min-h-182">
      <SectionTitle title="Projetos" />
      <ProjectsNav />
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
          modules={[Navigation, Pagination]}
          pagination={{
            type: "progressbar",
          }}
          className="mySwiper"
        >
          {projects.length > 0 &&
            projects.map((item) => (
              <SwiperSlide key={item.name}>
                <ProjectCard project={item} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </SectionContainer>
  );
}
