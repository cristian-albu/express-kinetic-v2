"use client";
import { THeroSectionData } from "@/data/data";
import { CONTAINER_WIDTH } from "@/shared/constants";
import React from "react";

const HeroSection: React.FC<THeroSectionData> = ({ title, description, mainAction, otherActions }) => {
    return (
        <>
            <section className={"heroSection"}>
                <div className={"rainbow"} />
                <div className={"clouds"} />

                <div className={"heroWrapper"}>
                    <div className={"heroContainer"}>
                        <h1>{title}</h1>
                        <p>{description}</p>
                        <a href={mainAction.link} className={"mainHeroAction"}>
                            {mainAction.label}
                        </a>
                        <div className={"heroActionsContainer"}>
                            {otherActions.map((e) => {
                                const externalLink = e.link.startsWith("http");
                                return (
                                    <a
                                        key={e.label}
                                        href={e.link}
                                        rel={externalLink ? "noreferrer noopener" : undefined}
                                        target={externalLink ? "_blank" : undefined}
                                        className={"heroAction"}
                                    >
                                        {e.label}
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .heroSection {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: flex-end;
                    flex-direction: column;
                    padding-top: 8rem;
                    position: relative;
                }

                .heroWrapper {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 2rem 0rem 10rem 0rem;
                    background: white;
                    flex-grow: 1;
                }

                .heroContainer {
                    width: 100%;
                    max-width: ${CONTAINER_WIDTH}px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    text-align: center;
                    position: relative;
                }

                .mainHeroAction {
                }

                .heroActionsContainer {
                }

                .heroAction {
                }

                .rainbow {
                    position: absolute;
                    left: 0;
                    top: 0;
                    height: 100%;
                    aspect-ratio: 1/1;
                    background: radial-gradient(
                        circle,
                        transparent 0%,
                        transparent 17%,
                        red 17%,
                        red 33%,
                        purple 33%,
                        purple 67%,
                        transparent 67%,
                        transparent 100%
                    );
                    filter: blur(4px);
                }
                .clouds {
                    width: 100%;
                    height: 30vh;
                    background: url("/clouds_bg.svg") 0% 100% repeat-x;
                }
            `}</style>
        </>
    );
};

export default HeroSection;
