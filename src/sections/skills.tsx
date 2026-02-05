import { useState } from "react";
import { SectionContainer } from "@/components/sectionContainer";
import { SectionTitle } from "@/components/sectionTitle";
import { SkillCard } from "@/components/skillCard";
import { SkillsNav } from "@/components/skillsNav";
import { type Stack, skills } from "@/data/skills";

export function Skills() {
  const [skillActive, setSkillActive] = useState<Stack>("languages");
  const filteredSkills = skills.filter((item) => item.stack === skillActive);

  return (
    <SectionContainer>
      <SectionTitle title="Habilidades" />

      <div className="h-90 sm:h-72">
        <SkillsNav setSkillActive={setSkillActive} skillActive={skillActive} />

        <div className="flex gap-4 mt-8 flex-wrap">
          {filteredSkills.length > 0 &&
            filteredSkills.map((item) => (
              <SkillCard key={item.name} skill={item} />
            ))}
        </div>
      </div>
    </SectionContainer>
  );
}
