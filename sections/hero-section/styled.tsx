import { COLORS, CONTAINER_WIDTH } from "@/shared/constants";
import styled, { keyframes } from "styled-components";

export const colorSteps = {
    first: 25,
    second: 30,
    third: 34,
    fourth: 38,
    fifth: 42,
    sixth: 47,
    seventh: 52,
};

export const HeroSec = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
    position: relative;
    background: url("/stars.svg") 0% 0% no-repeat padding-box,
        linear-gradient(135deg, ${COLORS.sky1} 0%, ${COLORS.sky2} 100%);
    overflow: hidden;
`;

export const Rainbow = styled.div`
    position: absolute;
    left: calc(50vw - (50vh * 1.1));
    top: 0;
    height: 100vh;
    aspect-ratio: 1.1/1;
    background: radial-gradient(
        ellipse,
        transparent 0%,
        transparent ${colorSteps.first}%,
        ${COLORS.purple} ${colorSteps.first}%,
        ${COLORS.purple} ${colorSteps.second}%,
        ${COLORS.blue} ${colorSteps.second}%,
        ${COLORS.blue} ${colorSteps.third}%,
        ${COLORS.green} ${colorSteps.third}%,
        ${COLORS.green} ${colorSteps.fourth}%,
        ${COLORS.yellow} ${colorSteps.fourth}%,
        ${COLORS.yellow} ${colorSteps.fifth}%,
        ${COLORS.orange} ${colorSteps.fifth}%,
        ${COLORS.orange} ${colorSteps.sixth}%,
        ${COLORS.red} ${colorSteps.sixth}%,
        ${COLORS.red} ${colorSteps.seventh}%,
        transparent ${colorSteps.seventh}%,
        transparent 100%
    );
    filter: blur(6px);
`;

export const CloudAnimation = keyframes`
    0% {transform: translateX(0vw);}
    50% {transform: translateX(100vw);}
    100% {transform: translateX(0vw);}
`;

export const HeroWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 0rem 10rem 0rem;
    background: white;
    flex-grow: 1;
    position: relative;
    margin-top: 50vh;

    &::after {
        content: "";
        width: 200vw;
        height: 20vh;
        background: url("/clouds_bg.svg") 0% 100% repeat-x;
        bottom: 99%;
        left: -100vw;
        position: absolute;
        animation: ${CloudAnimation} 120s ease-in-out infinite;
    }
`;

export const HeroContainer = styled.div`
    width: 100%;
    max-width: ${CONTAINER_WIDTH}px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    position: relative;
    gap: 1rem;
`;

export const MainHeroAction = styled.a`
    padding: 0.4rem 1rem;
    color: white;
    border-radius: 2rem;
    background-color: black;
`;

export const HeroActionsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;

export const HeroAction = styled.a`
    &:hover {
        text-decoration: underline;
    }
`;

export const Title = styled.h1`
    font-weight: 400;
    font-size: 3rem;
`;
