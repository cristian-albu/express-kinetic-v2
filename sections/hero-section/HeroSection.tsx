"use client";
import { THeroSectionData, navData } from "@/data/data";
import React from "react";
import {
    HeroAction,
    HeroActionsContainer,
    HeroContainer,
    HeroSec,
    HeroWrapper,
    MainHeroAction,
    Rainbow,
    Title,
} from "./styled";

const HeroSection: React.FC<THeroSectionData> = ({ title, description, mainAction, otherActions }) => {
    return (
        <HeroSec id={navData[0].link}>
            <Rainbow />
            <HeroWrapper>
                <HeroContainer>
                    <Title>{title}</Title>
                    <p>{description}</p>
                    <MainHeroAction href={mainAction.link}>{mainAction.label}</MainHeroAction>
                    <HeroActionsContainer className={"heroActionsContainer"}>
                        {otherActions.map((e) => {
                            const externalLink = e.link.startsWith("http");
                            return (
                                <HeroAction
                                    key={e.label}
                                    href={e.link}
                                    rel={externalLink ? "noreferrer noopener" : undefined}
                                    target={externalLink ? "_blank" : undefined}
                                    className={"heroAction"}
                                >
                                    {e.label}
                                </HeroAction>
                            );
                        })}
                    </HeroActionsContainer>
                </HeroContainer>
            </HeroWrapper>
        </HeroSec>
    );
};

export default HeroSection;
