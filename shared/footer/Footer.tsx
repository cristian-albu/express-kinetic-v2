"use client";
import { privacyPolicy } from "@/data/privacyPolicy";
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { CONTAINER_WIDTH } from "../constants";
import { BRAND_NAME, heroSectionData } from "@/data/data";
import { HeroAction } from "@/sections/hero-section/styled";

export const FooterSec = styled.footer`
    background-color: #212121;
    color: white;
    width: 100%;
    min-height: 50vh;
    padding: 4rem;
`;

export const PrivacyPolicyContainer = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    backdrop-filter: blur(5px);
    justify-content: center;
    align-items: center;
    z-index: 999;

    & > div:first-child {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: black;
        opacity: 0.2;
    }
`;

export const FooterContainer = styled.div`
    width: 100%;
    max-width: ${CONTAINER_WIDTH}px;
    height: 70%;
    background-color: white;
    padding: 2rem;
    color: black;
    overflow: auto;
    border-radius: 1rem;
    box-shadow: 1rem 2rem 5rem 0.5rem rgba(0, 0, 0, 0.35);
    position: relative;
`;

export const Container = styled.div`
    width: 100%;
    max-width: ${CONTAINER_WIDTH}px;
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
`;

const focusAnimation = keyframes`
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
    
    `;

export const Button = styled.button`
    padding: 0.7rem;
    border-radius: 0.5rem;
    color: white;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    outline: none;
    border: none;
    transition: transform 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
    }

    &:focus {
        outline: 1px solid white;
        animation: ${focusAnimation} 1s;
    }
`;

export const CloseBtn = styled(Button)`
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 99;
    background-color: transparent;

    &:focus {
        outline: none;
    }
`;

const Footer = () => {
    const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

    const handleKeydown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Escape") {
            setShowPrivacyPolicy(false);
        }
    };
    return (
        <FooterSec onKeyDown={handleKeydown}>
            <Container>
                <h2>{BRAND_NAME}</h2>
                {heroSectionData.otherActions.map((e) => {
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
                <Button id="pdc" onClick={() => setShowPrivacyPolicy((prev) => !prev)}>
                    📄 Politica de confidențialitate
                </Button>
            </Container>

            {showPrivacyPolicy && (
                <PrivacyPolicyContainer>
                    <div onClick={() => setShowPrivacyPolicy(false)}></div>
                    <FooterContainer>
                        {privacyPolicy.map((e, index) => {
                            const key = index.toString();
                            if (e.tag === "h2") {
                                return <h2 key={key}>{e.content}</h2>;
                            } else if (e.tag === "h3") {
                                return <h3 key={key}>{e.content}</h3>;
                            } else if (e.tag === "p") {
                                return <p key={key}>{e.content}</p>;
                            } else {
                                return <div key={key}>{e.content}</div>;
                            }
                        })}
                        <Button onClick={() => setShowPrivacyPolicy(false)}>❌ Închide</Button>
                    </FooterContainer>

                    <CloseBtn onClick={() => setShowPrivacyPolicy(false)}>❌</CloseBtn>
                </PrivacyPolicyContainer>
            )}
        </FooterSec>
    );
};

export default Footer;
