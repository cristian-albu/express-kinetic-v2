"use client";
import { experienceData } from "@/data/experience";
import { ServicesCard } from "@/sections/services-section/styled";
import { BREAKPOINTS, COLORS } from "@/shared/constants";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ExperienceContainer, ExperienceHeader, ExperienceSection, ExperienceTitle } from "./styled";

const ExperienceView = () => {
  const [width, setWidth] = useState(500);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
          style={{ borderRadius: "1rem", boxShadow: `2rem 2rem 2rem 0.2rem ${COLORS.sky2}45`, margin: "0.5rem 0rem" }}
        />
      </ExperienceHeader>

      <ExperienceContainer>
        {experienceData.certificates.map((e, index) => {
          const mainXp = index === 0 || index === 1;
          return (
            <ServicesCard
              key={index.toString()}
              style={{ gridColumn: mainXp && width >= BREAKPOINTS.tablet ? "span 2" : "span 1" }}
            >
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
