"use client";
import { TServicesSectionData, navData } from "@/data/data";
import React, { useRef } from "react";
import { ServicesCard, ServicesContainer, ServicesHeaderWrapper, ServicesSec, ServicesWrapper } from "./styled";
import useElementOnScreen from "@/shared/hooks/useElementonScreen";

const ServicesSection: React.FC<TServicesSectionData> = ({ title, p1, p2, services }) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const { isVisible } = useElementOnScreen(containerRef, { root: null, rootMargin: "0px", threshold: 0.3 });
    return (
        <ServicesSec id={navData[1].link}>
            <ServicesContainer>
                <ServicesHeaderWrapper>
                    <h2>{title}</h2>
                    <p>{p1}</p>
                    <p>{p2}</p>
                </ServicesHeaderWrapper>

                <ServicesWrapper ref={containerRef}>
                    {services.map((e, index: number) => {
                        return (
                            <ServicesCard
                                key={e.title}
                                style={{
                                    transition: `transform ${(index + 1) * 200 + 400}ms ease-in-out, opacity 200ms`,
                                    transform: isVisible ? "translateX(0)" : "translateX(60vw)",
                                    opacity: isVisible ? 1 : 0,
                                }}
                            >
                                <h3>✅ {e.title}</h3>
                                <p>{e.description}</p>
                                <p>{e.details}</p>
                            </ServicesCard>
                        );
                    })}
                </ServicesWrapper>
            </ServicesContainer>
        </ServicesSec>
    );
};

export default ServicesSection;
