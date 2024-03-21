import React from "react";
import SectionTitle from "../section/SectionTitle";
import SectionParagraf from "../section/SectionParagraf";
import SkillCard from "./SkillCard";

function SkillSection() {
  return (
    <section className="bg-dust py-28">
      <div className="container mx-auto px-10">
        <SectionTitle>Skills</SectionTitle>
        <SectionParagraf>Beberapa kemampuan saya.</SectionParagraf>

        <div className="flex -mx-4 flex-wrap pt-20">
          <div className="w-4/12 px-4 mb-7">
            <SkillCard name="JavaScript" level="Lanjutan" image="./logo/javascript.svg" imageClassName="rounded-full" />
          </div>
          <div className="w-4/12 px-4 mb-7">
            <SkillCard name="React" level="Menengah" image="./logo/react.svg" />
          </div>
          <div className="w-4/12 px-4 mb-7">
            <SkillCard name="Adobe Photoshop" level="Lanjutan" image="./logo/adobe.svg" />
          </div>

          <div className="w-4/12 px-4 mb-7">
            <SkillCard name="Adobe Photoshop" level="Lanjutan" image="./logo/adobe.svg" />
          </div>
          <div className="w-4/12 px-4 mb-7">
            <SkillCard name="JavaScript" level="Lanjutan" image="./logo/javascript.svg" imageClassName="rounded-full" />
          </div>
          <div className="w-4/12 px-4 mb-7">
            <SkillCard name="React" level="Menengah" image="./logo/react.svg" />
          </div>

          <div className="w-4/12 px-4 mb-7">
            <SkillCard name="React" level="Menengah" image="./logo/react.svg" />
          </div>
          <div className="w-4/12 px-4 mb-7">
            <SkillCard name="Adobe Photoshop" level="Lanjutan" image="./logo/adobe.svg" />
          </div>
          <div className="w-4/12 px-4 mb-7">
            <SkillCard name="JavaScript" level="Lanjutan" image="./logo/javascript.svg" imageClassName="rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillSection;
