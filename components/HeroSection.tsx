"use client";
import { THeroSectionData } from "@/data/data";
import React from "react";

const HeroSection: React.FC<THeroSectionData> = ({ title, description, mainAction, otherActions }) => {
    return (
        <section>
            <div>
                <h1>{title}</h1>
                <p>{description}</p>
                <a href={mainAction.link}>{mainAction.label}</a>
                <div>
                    {otherActions.map((e) => {
                        const externalLink = e.link.startsWith("http");
                        return (
                            <a
                                key={e.label}
                                href={e.link}
                                rel={externalLink ? "noreferrer noopener" : undefined}
                                target={externalLink ? "_blank" : undefined}
                            >
                                {e.label}
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
