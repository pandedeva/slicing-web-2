import React from "react";
import SectionTitle from "../section/SectionTitle";
import SectionParagraf from "../section/SectionParagraf";
import ProjectItem from "./ProjectItem";

function ProjectsSection() {
  return (
    <section className="py-28">
      <div className="container mx-auto px-10">
        <SectionTitle>Projects</SectionTitle>
        <SectionParagraf>Beberapa proyek bikinan saya.</SectionParagraf>

        <div className="flex flex-wrap -mx-4 pt-20">
          <div className="w-6/12 px-4 mb-14">
            <ProjectItem image="./img/hasten.png" name="Hasten" description="Explorasi landing page" />
          </div>
          <div className="w-6/12 px-4 mb-14">
            <ProjectItem image="./img/hasten2.png" name="Resources" description="Explorasi resources page" />
          </div>
          <div className="w-6/12 px-4">
            <ProjectItem image="./img/hasten2.png" name="Hasten" description="Explorasi landing page" />
          </div>
          <div className="w-6/12 px-4">
            <ProjectItem image="./img/hasten2.png" name="Resources" description="Explorasi resources page" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
