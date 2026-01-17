import { DifferentialCard } from "@/components/differentialCard";
import { SectionContainer } from "@/components/sectionContainer";
import { SectionTitle } from "@/components/sectionTitle";
import { SubTitle } from "@/components/subTitle";
import { WorkExperienceCard } from "@/components/workExperienceCard";
import { strengths } from "@/data/strengths";
import { workExperience } from "@/data/workExperience";

export function About() {
  return (
    <SectionContainer>
      <SectionTitle title="Sobre mim" />

      <div className="flex flex-col gap-5">
        <div>
          <SubTitle subTitle="Minha jornada" />

          <p className="text-gray-500 font-medium mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            similique excepturi omnis laboriosam quo, temporibus necessitatibus
            iure quia laborum dignissimos minus et inventore quaerat nostrum
            numquam? Soluta ad assumenda nulla, inventore voluptas nesciunt
            consequuntur minus quis vitae cupiditate corporis, ducimus sunt
            voluptatibus. Officia, asperiores porro? Deleniti aliquid incidunt,
            cupiditate illo eligendi omnis officia quis corporis iure vero
            mollitia.
          </p>
        </div>

        <div>
          <SubTitle subTitle="Paixão por desafios" />

          <p className="text-gray-500 font-medium mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            possimus natus incidunt. Veniam exercitationem illum dicta eos est
            sed id explicabo! Quam veniam perferendis perspiciatis animi
            explicabo libero minima ad reiciendis, minus deleniti corrupti
            cupiditate! Voluptatem deleniti accusamus, voluptatibus assumenda
            amet repellat eius quaerat aperiam. Ullam, rerum. Consequatur,
            maiores voluptates?
          </p>
        </div>

        <div>
          <SubTitle subTitle="Meu diferencial" />

          <div className="mt-3 flex flex-col gap-2">
            {strengths.length > 0 &&
              strengths.map((item) => (
                <DifferentialCard
                  key={item.id}
                  icon={item.icon}
                  title={item.title}
                  subTitle={item.subTitle}
                />
              ))}
          </div>
        </div>

        <div>
          <SubTitle subTitle="Meus últimos trabalhos" />

          <div className="flex flex-col gap-0.5 mt-5">
            {workExperience.length > 0 &&
              workExperience.map((item) => (
                <WorkExperienceCard key={item.id} workExperience={item} />
              ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
