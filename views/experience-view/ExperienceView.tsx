"use client";
import { experienceData } from "@/data/experience";
import { ServicesCard } from "@/sections/services-section/styled";
import { COLORS } from "@/shared/constants";
import Image from "next/image";
import React from "react";
import { ExperienceContainer, ExperienceHeader, ExperienceSection, ExperienceTitle } from "./styled";

const ExperienceView = () => {
  return (
    <ExperienceSection>
      <ExperienceHeader>
        <ExperienceTitle>
          <h1>{experienceData.title}</h1>
          <p>{experienceData.description}</p>
        </ExperienceTitle>
        <Image
          src={"/luminita_bulgarescu.jpeg"}
          width={300}
          height={300}
          alt=""
          style={{ borderRadius: "1rem", boxShadow: `2rem 2rem 2rem 0.2rem ${COLORS.sky2}45` }}
        />
      </ExperienceHeader>

      <ExperienceContainer>
        {experienceData.certificates.map((e, index) => {
          const mainXp = index === 0 || index === 1;
          return (
            <ServicesCard key={index.toString()} style={{ gridColumn: mainXp ? "span 2" : " span 1" }}>
              <p style={{ fontSize: mainXp ? "1.5rem" : "1rem" }}>
                {mainXp ? "🎓 " : "📃 "}
                {e.title}
              </p>
              <h3>{e.certificate}</h3>
            </ServicesCard>
          );
        })}
      </ExperienceContainer>
    </ExperienceSection>
  );
};

export default ExperienceView;
